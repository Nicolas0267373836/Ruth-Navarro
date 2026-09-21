import React from 'react';
import { Link } from 'react-router-dom';
import { MessageCircle, Mail, Instagram, MapPin, GraduationCap, ArrowUpRight, Clock } from 'lucide-react';
import { CLINIC_DATA, LOCATIONS } from '../data/content';
import { ClinicStatusBadge } from './ClinicStatusBadge';

export const Footer: React.FC = () => {
  return (
    <footer id="main-footer" className="bg-[#292735] text-white pt-16 pb-12 border-t border-[#4C2E78]/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 pb-12 border-b border-white/10">
          
          {/* Brand Col */}
          <div className="lg:col-span-4 space-y-4">
            <div>
              <span className="font-serif text-2xl font-bold text-white tracking-tight">
                {CLINIC_DATA.doctorName}
              </span>
              <p className="text-xs uppercase tracking-widest text-[#CDAEF5] font-medium mt-1">
                {CLINIC_DATA.specialty}
              </p>
            </div>
            
            <p className="text-sm text-gray-300 leading-relaxed max-w-sm">
              Acompañamiento cercano y biomecánica ortodóncica de precisión para guiar el desarrollo de sonrisas saludables en niños, adolescentes y adultos.
            </p>

            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#4C2E78]/60 border border-[#D9C9F4]/20 text-xs text-[#D9C9F4]">
              <GraduationCap className="w-3.5 h-3.5 text-[#CDAEF5]" />
              <span>{CLINIC_DATA.teachingRole}</span>
            </div>

            {/* Real-time Status Badge */}
            <div className="pt-2">
              <ClinicStatusBadge size="sm" />
            </div>
          </div>

          {/* Navigation Links */}
          <div className="lg:col-span-2 space-y-3">
            <p className="text-xs uppercase tracking-wider text-gray-400 font-semibold">
              Navegación
            </p>
            <ul className="space-y-2 text-sm text-gray-300">
              <li>
                <Link to="/" className="hover:text-[#CDAEF5] transition-colors">Inicio</Link>
              </li>
              <li>
                <Link to="/tratamientos" className="hover:text-[#CDAEF5] transition-colors">Tratamientos</Link>
              </li>
              <li>
                <Link to="/casos" className="hover:text-[#CDAEF5] transition-colors">Casos Clínicos</Link>
              </li>
              <li>
                <Link to="/sobre-la-doctora" className="hover:text-[#CDAEF5] transition-colors">Sobre la Doctora</Link>
              </li>
              <li>
                <Link to="/agenda" className="hover:text-[#CDAEF5] transition-colors">Agendar Cita</Link>
              </li>
            </ul>
          </div>

          {/* Locations */}
          <div className="lg:col-span-3 space-y-3">
            <p className="text-xs uppercase tracking-wider text-gray-400 font-semibold">
              Localidades de Atención
            </p>
            <ul className="space-y-3 text-sm">
              {LOCATIONS.map((loc) => (
                <li key={loc.name} className="flex items-start gap-2.5">
                  <MapPin className="w-4 h-4 text-[#CDAEF5] shrink-0 mt-0.5" />
                  <div>
                    <span className="font-medium text-white block">{loc.name}</span>
                    <span className="text-xs text-gray-400 block">{loc.note}</span>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Direct */}
          <div className="lg:col-span-3 space-y-3">
            <p className="text-xs uppercase tracking-wider text-gray-400 font-semibold">
              Contacto y Consultas
            </p>
            
            <div className="space-y-2.5 text-sm">
              <a
                href={CLINIC_DATA.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center justify-between p-2.5 rounded-xl bg-white/5 hover:bg-[#4C2E78]/50 border border-white/5 hover:border-[#D9C9F4]/30 transition-all text-gray-200"
              >
                <div className="flex items-center gap-2.5">
                  <MessageCircle className="w-4 h-4 text-[#CDAEF5]" />
                  <span>WhatsApp: {CLINIC_DATA.whatsappNumber}</span>
                </div>
                <ArrowUpRight className="w-3.5 h-3.5 text-gray-400 group-hover:text-white" />
              </a>

              <a
                href={`mailto:${CLINIC_DATA.email}`}
                className="group flex items-center justify-between p-2.5 rounded-xl bg-white/5 hover:bg-[#4C2E78]/50 border border-white/5 hover:border-[#D9C9F4]/30 transition-all text-gray-200"
              >
                <div className="flex items-center gap-2.5">
                  <Mail className="w-4 h-4 text-[#CDAEF5]" />
                  <span>{CLINIC_DATA.email}</span>
                </div>
                <ArrowUpRight className="w-3.5 h-3.5 text-gray-400 group-hover:text-white" />
              </a>

              <a
                href={CLINIC_DATA.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center justify-between p-2.5 rounded-xl bg-white/5 hover:bg-[#4C2E78]/50 border border-white/5 hover:border-[#D9C9F4]/30 transition-all text-gray-200"
              >
                <div className="flex items-center gap-2.5">
                  <Instagram className="w-4 h-4 text-[#CDAEF5]" />
                  <span>{CLINIC_DATA.instagramHandle}</span>
                </div>
                <ArrowUpRight className="w-3.5 h-3.5 text-gray-400 group-hover:text-white" />
              </a>
            </div>
          </div>

        </div>

        {/* Schedule & Operational Strip */}
        <div className="py-6 border-b border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-gray-300">
          <div className="flex items-center gap-2">
            <Clock className="w-4 h-4 text-[#CDAEF5]" />
            <span>
              <strong className="text-white font-medium">Horario de consulta:</strong> Lunes a Viernes 8:00 AM - 6:00 PM · Sábados 8:30 AM - 1:00 PM (Hora Rep. Dominicana)
            </span>
          </div>
          <Link
            to="/agenda"
            className="text-[#CDAEF5] hover:text-white font-medium transition-colors underline underline-offset-4"
          >
            Ver disponibilidad y agendar
          </Link>
        </div>

        {/* Bottom Legal & Ethics Note */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-gray-400">
          <p className="text-center md:text-left">
            © {new Date().getFullYear()} {CLINIC_DATA.doctorName}. Ortodoncia & Ortopedia Maxilofacial. República Dominicana.
          </p>
          <p className="text-center md:text-right text-[11px] text-gray-400 max-w-md">
            Nota informativa: La información presentada en este sitio tiene fines exclusivamente informativos. Los tratamientos específicos y presupuestos se determinan tras evaluación clínica presencial individualizada.
          </p>
        </div>
      </div>
    </footer>
  );
};
