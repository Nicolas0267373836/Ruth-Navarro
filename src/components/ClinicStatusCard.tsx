import React from 'react';
import { Clock, Calendar, MessageCircle, Sparkles, CheckCircle2 } from 'lucide-react';
import { useClinicStatus } from '../utils/clinicSchedule';
import { CLINIC_DATA } from '../data/content';

interface ClinicStatusCardProps {
  variant?: 'light' | 'dark';
  className?: string;
}

export const ClinicStatusCard: React.FC<ClinicStatusCardProps> = ({
  variant = 'light',
  className = '',
}) => {
  const status = useClinicStatus();

  const isDark = variant === 'dark';

  return (
    <div
      id="clinic-status-card"
      className={`rounded-3xl p-6 sm:p-8 border transition-all ${
        isDark
          ? 'bg-[#1F1E28] border-white/10 text-white shadow-xl'
          : 'bg-white border-[#D9C9F4]/70 text-[#292735] shadow-[0_10px_35px_rgba(76,46,120,0.05)]'
      } ${className}`}
    >
      {/* Top row: Real-time Indicator & Local Time */}
      <div className="flex flex-wrap items-center justify-between gap-4 pb-5 border-b border-dashed border-[#D9C9F4]/40">
        <div className="flex items-center gap-3">
          <div
            className={`flex items-center gap-2 px-3.5 py-1.5 rounded-full border text-xs font-semibold ${
              status.isOpen
                ? 'bg-emerald-500/10 text-emerald-600 border-emerald-500/30'
                : isDark
                ? 'bg-purple-500/20 text-[#CDAEF5] border-purple-500/30'
                : 'bg-[#F6F2FD] text-[#7654B3] border-[#D9C9F4]'
            }`}
          >
            <span className="relative flex h-2 w-2">
              {status.isOpen ? (
                <>
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
                </>
              ) : (
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#7654B3]" />
              )}
            </span>
            <span>{status.statusTitle}</span>
          </div>

          <span className={`text-xs ${isDark ? 'text-gray-300' : 'text-[#4C2E78]'}`}>
            {status.statusSubtext}
          </span>
        </div>

        {/* Live Clock */}
        <div className="flex items-center gap-2 text-xs text-gray-400">
          <Clock className="w-3.5 h-3.5 text-[#7654B3]" />
          <span>{status.currentTimeString} (Hora Rep. Dominicana)</span>
        </div>
      </div>

      {/* Main Body: Days and Hours Grid */}
      <div className="mt-6 grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
        <div className="md:col-span-7 space-y-2">
          <div className="flex items-center gap-2 mb-3">
            <Calendar className="w-4 h-4 text-[#7654B3]" />
            <h3 className={`font-serif text-lg font-bold ${isDark ? 'text-white' : 'text-[#292735]'}`}>
              Horario Habitual de Consulta
            </h3>
          </div>

          <div className="space-y-1.5 text-xs">
            {status.scheduleList.map((item) => {
              const isToday = item.dayName.toLowerCase() === status.currentDayName.toLowerCase();
              return (
                <div
                  key={item.dayName}
                  className={`flex items-center justify-between py-2 px-3 rounded-xl transition-colors ${
                    isToday
                      ? isDark
                        ? 'bg-white/10 text-white font-semibold border border-white/20'
                        : 'bg-[#F6F2FD] text-[#4C2E78] font-bold border border-[#D9C9F4]'
                      : isDark
                      ? 'text-gray-300'
                      : 'text-[#62657D]'
                  }`}
                >
                  <div className="flex items-center gap-2">
                    <span className="w-20">{item.dayName}</span>
                    {isToday && (
                      <span className="px-1.5 py-0.5 rounded text-[10px] bg-[#7654B3] text-white uppercase font-bold tracking-wider">
                        Hoy
                      </span>
                    )}
                  </div>
                  <span className={item.isOpen ? (isDark ? 'text-white' : 'text-[#292735]') : 'text-gray-400 italic'}>
                    {item.formattedHours}
                  </span>
                </div>
              );
            })}
          </div>
        </div>

        {/* Reassurance and Quick Action */}
        <div className={`md:col-span-5 p-5 rounded-2xl border flex flex-col justify-between space-y-4 ${
          isDark
            ? 'bg-white/5 border-white/10'
            : 'bg-[#FCFBFE] border-[#D9C9F4]/60'
        }`}>
          <div className="space-y-2">
            <div className="flex items-center gap-1.5 text-xs font-semibold text-[#7654B3]">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Atención Planificada</span>
            </div>
            <p className={`text-xs leading-relaxed ${isDark ? 'text-gray-300' : 'text-[#62657D]'}`}>
              {status.reassuranceNotice}
            </p>
          </div>

          <div className="pt-2">
            <a
              href={CLINIC_DATA.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full inline-flex items-center justify-center gap-2 py-3 px-4 rounded-xl text-xs sm:text-sm font-semibold text-white bg-[#7654B3] hover:bg-[#4C2E78] transition-colors shadow-sm"
            >
              <MessageCircle className="w-4 h-4 text-[#CDAEF5]" />
              <span>Coordinar cita por WhatsApp</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
