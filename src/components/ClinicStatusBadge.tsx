import React, { useState, useRef, useEffect } from 'react';
import { Clock, ChevronDown, CheckCircle2, MessageCircle, X } from 'lucide-react';
import { useClinicStatus } from '../utils/clinicSchedule';
import { CLINIC_DATA } from '../data/content';

interface ClinicStatusBadgeProps {
  showDropdown?: boolean;
  className?: string;
  size?: 'sm' | 'md';
}

export const ClinicStatusBadge: React.FC<ClinicStatusBadgeProps> = ({
  showDropdown = true,
  className = '',
  size = 'sm',
}) => {
  const status = useClinicStatus();
  const [isOpenMenu, setIsOpenMenu] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Close dropdown on outside click
  useEffect(() => {
    if (!isOpenMenu) return;
    const handleClickOutside = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setIsOpenMenu(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [isOpenMenu]);

  // Close on Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setIsOpenMenu(false);
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  return (
    <div ref={dropdownRef} className={`relative inline-block ${className}`}>
      {/* Interactive Trigger Button */}
      <button
        type="button"
        onClick={() => showDropdown && setIsOpenMenu(!isOpenMenu)}
        aria-expanded={isOpenMenu}
        aria-label={`Estado de la clínica: ${status.statusTitle}. ${status.statusSubtext}. Clic para ver horarios.`}
        className={`inline-flex items-center gap-2 rounded-full border transition-all cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-[#7654B3] ${
          size === 'sm'
            ? 'px-3 py-1 text-xs'
            : 'px-4 py-1.5 text-xs sm:text-sm'
        } ${
          status.isOpen
            ? 'bg-emerald-50/90 text-emerald-800 border-emerald-200/80 hover:bg-emerald-100/90 shadow-sm'
            : 'bg-[#F6F2FD] text-[#4C2E78] border-[#D9C9F4] hover:bg-[#D9C9F4]/40 shadow-sm'
        }`}
      >
        {/* Pulsing status indicator dot */}
        <span className="relative flex h-2 w-2 shrink-0">
          {status.isOpen ? (
            <>
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
            </>
          ) : (
            <span className="relative inline-flex rounded-full h-2 w-2 bg-[#7654B3]" />
          )}
        </span>

        {/* Text */}
        <span className="font-semibold whitespace-nowrap">
          {status.statusTitle}
        </span>

        <span className="text-gray-300 hidden sm:inline">|</span>

        <span className="hidden sm:inline opacity-90 truncate max-w-[180px] font-normal">
          {status.statusSubtext}
        </span>

        {showDropdown && (
          <ChevronDown
            className={`w-3 h-3 opacity-60 transition-transform duration-200 ${
              isOpenMenu ? 'rotate-180' : ''
            }`}
          />
        )}
      </button>

      {/* Popover / Dropdown with Full Schedule Details */}
      {showDropdown && isOpenMenu && (
        <div
          role="dialog"
          aria-label="Horarios de atención de la clínica"
          className="absolute right-0 sm:right-auto sm:left-0 mt-2 w-80 sm:w-88 p-5 bg-white rounded-2xl shadow-[0_15px_40px_rgba(76,46,120,0.15)] border border-[#D9C9F4] z-50 animate-in fade-in zoom-in-95 duration-150"
        >
          {/* Header */}
          <div className="flex items-center justify-between pb-3 border-b border-[#F6F2FD]">
            <div className="flex items-center gap-2">
              <div className={`w-2.5 h-2.5 rounded-full ${status.isOpen ? 'bg-emerald-500' : 'bg-[#7654B3]'}`} />
              <p className="font-serif text-base font-bold text-[#292735]">
                Horario de Atención
              </p>
            </div>
            <button
              type="button"
              onClick={() => setIsOpenMenu(false)}
              className="p-1 text-gray-400 hover:text-gray-700 rounded-lg hover:bg-gray-100 transition-colors"
              aria-label="Cerrar panel de horarios"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          {/* Current Status Box */}
          <div className={`mt-3.5 p-3 rounded-xl border flex items-start gap-2.5 ${
            status.isOpen
              ? 'bg-emerald-50/70 border-emerald-200 text-emerald-900'
              : 'bg-[#F6F2FD] border-[#D9C9F4] text-[#4C2E78]'
          }`}>
            <Clock className="w-4 h-4 shrink-0 mt-0.5" />
            <div className="text-xs">
              <p className="font-bold">
                {status.statusTitle} ({status.currentTimeString} RD)
              </p>
              <p className="mt-0.5 opacity-90 leading-tight">
                {status.statusSubtext}
              </p>
            </div>
          </div>

          {/* Schedule list by day */}
          <div className="mt-4 space-y-1.5 text-xs">
            {status.scheduleList.map((item) => {
              const isToday = item.dayName.toLowerCase() === status.currentDayName.toLowerCase();
              return (
                <div
                  key={item.dayName}
                  className={`flex items-center justify-between py-1.5 px-2.5 rounded-lg transition-colors ${
                    isToday
                      ? 'bg-[#F6F2FD] text-[#4C2E78] font-bold border border-[#D9C9F4]/70'
                      : 'text-[#62657D]'
                  }`}
                >
                  <div className="flex items-center gap-2">
                    <span className="w-16">{item.dayName}</span>
                    {isToday && (
                      <span className="px-1.5 py-0.2 rounded text-[10px] bg-[#7654B3] text-white uppercase font-bold tracking-wider">
                        Hoy
                      </span>
                    )}
                  </div>
                  <span className={item.isOpen ? 'text-[#292735]' : 'text-gray-400 italic'}>
                    {item.formattedHours}
                  </span>
                </div>
              );
            })}
          </div>

          {/* Reassurance Notice */}
          <p className="mt-4 text-[11px] text-[#62657D] leading-relaxed bg-gray-50 p-2.5 rounded-xl border border-gray-100">
            {status.reassuranceNotice}
          </p>

          {/* Direct CTA */}
          <div className="mt-4 pt-3 border-t border-[#F6F2FD]">
            <a
              href={CLINIC_DATA.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full inline-flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl text-xs font-semibold text-white bg-[#7654B3] hover:bg-[#4C2E78] transition-colors shadow-sm"
            >
              <MessageCircle className="w-3.5 h-3.5 text-[#CDAEF5]" />
              <span>Contactar por WhatsApp</span>
            </a>
          </div>
        </div>
      )}
    </div>
  );
};
