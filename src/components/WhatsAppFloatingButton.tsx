import React, { useState } from 'react';
import { MessageCircle, X } from 'lucide-react';
import { CLINIC_DATA } from '../data/content';

export const WhatsAppFloatingButton: React.FC = () => {
  const [showTooltip, setShowTooltip] = useState(false);

  return (
    <div className="fixed bottom-6 right-6 z-50 flex items-center gap-3">
      {/* Tooltip bubble */}
      <div
        className={`hidden sm:flex items-center gap-2 bg-white text-[#292735] px-4 py-2.5 rounded-2xl shadow-xl border border-[#D9C9F4]/70 text-xs font-medium transition-all duration-300 ${
          showTooltip ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-4 pointer-events-none'
        }`}
      >
        <span>¿Tienes dudas? Escríbenos por WhatsApp</span>
        <button
          type="button"
          onClick={() => setShowTooltip(false)}
          className="text-gray-400 hover:text-gray-600 p-0.5"
          aria-label="Cerrar sugerencia"
        >
          <X className="w-3.5 h-3.5" />
        </button>
      </div>

      {/* Main Floating Button */}
      <a
        href={CLINIC_DATA.whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        onMouseEnter={() => setShowTooltip(true)}
        className="relative group flex items-center justify-center w-14 h-14 rounded-full bg-[#25D366] text-white shadow-[0_8px_30px_rgba(37,211,102,0.35)] hover:shadow-[0_10px_35px_rgba(37,211,102,0.45)] hover:scale-105 active:scale-95 transition-all focus:outline-none focus-visible:ring-4 focus-visible:ring-[#25D366]/40"
        aria-label="Contactar a la Dra. Ruth Navarro por WhatsApp"
      >
        <span className="absolute inset-0 rounded-full bg-[#25D366] animate-ping opacity-20 group-hover:opacity-0" />
        <MessageCircle className="w-7 h-7 fill-current relative z-10" />
      </a>
    </div>
  );
};
