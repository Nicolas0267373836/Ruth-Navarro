import React from 'react';
import { Link } from 'react-router-dom';
import {
  GraduationCap,
  MapPin,
  MessageCircle,
  Instagram,
  Mail,
  Heart,
  BookOpen,
  Sparkles,
  ArrowRight
} from 'lucide-react';
import { CLINIC_DATA, LOCATIONS } from '../data/content';
import { ImageWithSkeleton } from '../components/ImageWithSkeleton';
import { RevealOnScroll } from '../components/RevealOnScroll';

export const AboutPage: React.FC = () => {
  return (
    <div className="pt-28 pb-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      
      {/* Hero Profile */}
      <RevealOnScroll direction="up">
        <div className="bg-white rounded-3xl p-8 sm:p-12 lg:p-16 border border-[#D9C9F4]/70 shadow-[0_10px_40px_rgba(76,46,120,0.05)] relative overflow-hidden mb-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            
            {/* Circular Photo Card */}
            <div className="lg:col-span-5 flex justify-center">
              <RevealOnScroll direction="right" delay={100}>
                <div className="relative">
                  <div className="w-72 h-72 sm:w-80 sm:h-80 rounded-full p-3.5 bg-[#F6F2FD] border-2 border-[#D9C9F4] shadow-xl">
                    <div className="w-full h-full rounded-full overflow-hidden bg-white">
                      <ImageWithSkeleton
                        src="/images/about-draruth.jpg"
                        alt="Retrato oficial de la Dra. Ruth Esther Navarro"
                        referrerPolicy="no-referrer"
                        containerClassName="w-full h-full rounded-full"
                        skeletonClassName="rounded-full"
                        className="w-full h-full object-cover"
                        width="350"
                        height="350"
                        loading="eager"
                      />
                    </div>
                  </div>

                  {/* Decorative Badge */}
                  <div className="absolute -bottom-2 right-4 bg-white px-4 py-2 rounded-2xl border border-[#D9C9F4] shadow-md flex items-center gap-2 text-xs font-semibold text-[#4C2E78]">
                    <Sparkles className="w-4 h-4 text-[#7654B3]" />
                    <span>Ortodoncista</span>
                  </div>
                </div>
              </RevealOnScroll>
            </div>

            {/* Profile Editorial */}
            <div className="lg:col-span-7 space-y-6">
              <RevealOnScroll direction="left" delay={150}>
                <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#F6F2FD] border border-[#D9C9F4] text-xs font-semibold text-[#7654B3] uppercase">
                  <span>Sobre la Doctora</span>
                </div>

                <div className="mt-2">
                  <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#292735] leading-tight">
                    Dra. Ruth Esther Navarro
                  </h1>
                  <p className="text-base sm:text-lg text-[#7654B3] font-medium mt-1">
                    Especialista en Ortodoncia y Ortopedia Maxilofacial
                  </p>
                </div>

                <blockquote className="border-l-3 border-[#7654B3] pl-4 italic text-base sm:text-lg text-[#4C2E78] font-normal leading-relaxed my-4">
                  «La ortodoncia trasciende la simple alineación dental: es ciencia biomecánica aplicada para restablecer el equilibrio entre respiración, masticación y armonía de la sonrisa.»
                </blockquote>

                <p className="text-sm sm:text-base text-[#62657D] leading-relaxed">
                  Cada etapa biológica requiere un criterio diferente: interceptar discrepancias óseas en la infancia, modelar la oclusión definitiva en la adolescencia o realizar correcciones complejas y estables en la edad adulta, siempre preservando la salud de las encías y el soporte óseo.
                </p>

                <div className="pt-2 flex flex-wrap gap-3">
                  <div className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl bg-[#F6F2FD] border border-[#D9C9F4]/60 text-xs font-medium text-[#4C2E78]">
                    <GraduationCap className="w-4 h-4 text-[#7654B3]" />
                    <span>Docente en la Universidad Central del Este (UCE)</span>
                  </div>

                  <div className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl bg-[#F6F2FD] border border-[#D9C9F4]/60 text-xs font-medium text-[#4C2E78]">
                    <MapPin className="w-4 h-4 text-[#7654B3]" />
                    <span>San Pedro · Higüey · La Romana</span>
                  </div>
                </div>
              </RevealOnScroll>
            </div>

          </div>
        </div>
      </RevealOnScroll>

      {/* 3 Pilares Profesionales */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
        <RevealOnScroll direction="up" delay={0} className="h-full">
          <div className="h-full bg-white rounded-3xl p-8 border border-[#D9C9F4]/70 shadow-sm flex flex-col justify-between">
            <div className="space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-[#F6F2FD] flex items-center justify-center text-[#7654B3]">
                <Sparkles className="w-6 h-6" />
              </div>
              <h3 className="font-serif text-2xl font-bold text-[#292735]">
                Especialización Clínica
              </h3>
              <p className="text-xs sm:text-sm text-[#62657D] leading-relaxed">
                Enfoque exclusivo en ortodoncia correctiva, ortodoncia interceptiva y ortopedia maxilofacial. Cada plan responde al estudio minucioso de la biomecánica y anatomía dental de cada persona.
              </p>
            </div>
          </div>
        </RevealOnScroll>

        <RevealOnScroll direction="up" delay={120} className="h-full">
          <div className="h-full bg-white rounded-3xl p-8 border border-[#D9C9F4]/70 shadow-sm flex flex-col justify-between">
            <div className="space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-[#F6F2FD] flex items-center justify-center text-[#7654B3]">
                <Heart className="w-6 h-6" />
              </div>
              <h3 className="font-serif text-2xl font-bold text-[#292735]">
                Atención Humana por Edades
              </h3>
              <p className="text-xs sm:text-sm text-[#62657D] leading-relaxed">
                Paciencia y didáctica para los niños en etapas de crecimiento temprano, empatía y motivación para adolescentes, y comprensión pragmática de horarios para adultos.
              </p>
            </div>
          </div>
        </RevealOnScroll>

        <RevealOnScroll direction="up" delay={240} className="h-full">
          <div className="h-full bg-white rounded-3xl p-8 border border-[#D9C9F4]/70 shadow-sm flex flex-col justify-between">
            <div className="space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-[#F6F2FD] flex items-center justify-center text-[#7654B3]">
                <BookOpen className="w-6 h-6" />
              </div>
              <h3 className="font-serif text-2xl font-bold text-[#292735]">
                Compromiso Académico
              </h3>
              <p className="text-xs sm:text-sm text-[#62657D] leading-relaxed">
                Como docente en la Universidad Central del Este (UCE), participa activamente en la formación de nuevas generaciones odontológicas, manteniendo una actualización científica continua.
              </p>
            </div>
          </div>
        </RevealOnScroll>
      </div>

      {/* Localidades de atención detalladas */}
      <RevealOnScroll direction="up">
        <div className="bg-[#F6F2FD]/50 rounded-3xl p-8 sm:p-12 border border-[#D9C9F4]/70 mb-16">
          <div className="max-w-2xl mb-8">
            <span className="text-xs font-semibold text-[#7654B3] uppercase tracking-wider block mb-2">
              Disponibilidad geográfica
            </span>
            <h2 className="font-serif text-3xl font-bold text-[#292735]">
              Atención en tres ciudades de la región Este
            </h2>
            <p className="text-xs sm:text-sm text-[#62657D] mt-2">
              Para comodidad de nuestros pacientes y sus familias, la doctora programa consultas periódicas en consultorios acondicionados:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {LOCATIONS.map((loc, idx) => (
              <RevealOnScroll key={loc.name} direction="up" delay={idx * 100} className="h-full">
                <div className="h-full bg-white rounded-2xl p-6 border border-[#D9C9F4]/60 shadow-sm flex flex-col justify-between">
                  <div>
                    <div className="flex items-center gap-2.5 mb-2">
                      <MapPin className="w-5 h-5 text-[#7654B3]" />
                      <h3 className="font-serif text-lg font-bold text-[#292735]">{loc.name}</h3>
                    </div>
                    <p className="text-xs text-[#62657D] leading-relaxed mb-4">
                      {loc.note}
                    </p>
                  </div>
                  <a
                    href={`${CLINIC_DATA.whatsappUrl}?text=${encodeURIComponent(`Hola Dra. Ruth, deseo coordinar una consulta en ${loc.name}.`)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs font-semibold text-[#4C2E78] hover:text-[#7654B3] inline-flex items-center gap-1 mt-2"
                  >
                    <span>Consultar disponibilidad</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </a>
                </div>
              </RevealOnScroll>
            ))}
          </div>
        </div>
      </RevealOnScroll>

      {/* Contact & Social Links */}
      <RevealOnScroll direction="up" delay={100}>
        <div className="text-center space-y-6 max-w-xl mx-auto">
          <h3 className="font-serif text-2xl font-bold text-[#292735]">
            Conecta con la doctora
          </h3>
          <p className="text-xs sm:text-sm text-[#62657D]">
            Sigue el trabajo clínico diario y contenido educativo en Instagram o agenda tu cita directamente:
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4">
            <a
              href={CLINIC_DATA.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-xs sm:text-sm font-semibold text-white bg-[#7654B3] hover:bg-[#4C2E78] transition-colors shadow-sm"
            >
              <MessageCircle className="w-4 h-4 text-[#CDAEF5]" />
              <span>WhatsApp (+1 829-765-9989)</span>
            </a>

            <a
              href={CLINIC_DATA.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-xs sm:text-sm font-semibold text-[#4C2E78] bg-white hover:bg-[#F6F2FD] border border-[#D9C9F4] transition-colors shadow-sm"
            >
              <Instagram className="w-4 h-4 text-[#7654B3]" />
              <span>Instagram {CLINIC_DATA.instagramHandle}</span>
            </a>

            <a
              href={`mailto:${CLINIC_DATA.email}`}
              className="inline-flex items-center gap-2 px-5 py-3 rounded-full text-xs sm:text-sm font-medium text-[#62657D] hover:text-[#292735] transition-colors"
            >
              <Mail className="w-4 h-4" />
              <span>{CLINIC_DATA.email}</span>
            </a>
          </div>
        </div>
      </RevealOnScroll>

    </div>
  );
};
