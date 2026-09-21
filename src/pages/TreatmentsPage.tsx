import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import {
  Sparkles,
  ShieldCheck,
  Activity,
  Layers,
  CheckCircle2,
  HeartHandshake,
  ArrowRight,
  MessageCircle,
  Check,
  Info
} from 'lucide-react';
import { TREATMENTS, CLINIC_DATA } from '../data/content';
import { TreatmentsSkeleton } from '../components/TreatmentsSkeleton';
import { RevealOnScroll } from '../components/RevealOnScroll';

export const TreatmentsPage: React.FC = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Initial perceived performance skeleton transition
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 400);
    return () => clearTimeout(timer);
  }, []);

  const getTreatmentIcon = (iconName: string) => {
    switch (iconName) {
      case 'Sparkles': return <Sparkles className="w-7 h-7 text-[#7654B3]" />;
      case 'ShieldCheck': return <ShieldCheck className="w-7 h-7 text-[#7654B3]" />;
      case 'Activity': return <Activity className="w-7 h-7 text-[#7654B3]" />;
      case 'Layers': return <Layers className="w-7 h-7 text-[#7654B3]" />;
      case 'CheckCircle2': return <CheckCircle2 className="w-7 h-7 text-[#7654B3]" />;
      case 'HeartHandshake': return <HeartHandshake className="w-7 h-7 text-[#7654B3]" />;
      default: return <Sparkles className="w-7 h-7 text-[#7654B3]" />;
    }
  };

  return (
    <div className="pt-28 pb-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      
      {/* Editorial Header */}
      <RevealOnScroll direction="up">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#F6F2FD] border border-[#D9C9F4] text-xs font-semibold text-[#7654B3] mb-4 uppercase">
            <span>Especialidades y Procedimientos</span>
          </div>
          
          <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold text-[#292735] tracking-tight leading-tight">
            Tratamientos de Ortodoncia y Ortopedia Maxilofacial
          </h1>

          <p className="mt-4 text-base sm:text-lg text-[#62657D] leading-relaxed">
            Cada sonrisa posee una arquitectura ósea y dental única. Nuestros planes están concebidos para armonizar la función masticatoria, la salud periodontal y la estética facial en niños, adolescentes y adultos.
          </p>
        </div>
      </RevealOnScroll>

      {/* Clinical Caution Note */}
      <RevealOnScroll direction="up" delay={100}>
        <div className="mb-14 p-6 rounded-3xl bg-[#F6F2FD] border border-[#D9C9F4]/70 flex items-start gap-4 max-w-4xl mx-auto">
          <Info className="w-6 h-6 text-[#7654B3] shrink-0 mt-0.5" />
          <div className="text-xs sm:text-sm text-[#4C2E78] leading-relaxed">
            <p className="font-semibold text-base mb-1">Criterio clínico y diagnóstico responsable</p>
            <p>
              Los métodos y aparatologías específicas se definen exclusivamente de manera individual durante la evaluación presencial tras el análisis radiográfico y fotográfico del paciente. No promovemos recetas estándar ni tratamientos prefabricados.
            </p>
          </div>
        </div>
      </RevealOnScroll>

      {/* Grid of Treatments or Skeleton */}
      {isLoading ? (
        <TreatmentsSkeleton count={4} />
      ) : (
        <div className="space-y-12 animate-in fade-in duration-500">
          {TREATMENTS.map((tr, index) => (
            <RevealOnScroll key={tr.id} direction="up" delay={index * 50}>
              <div
                id={tr.id}
                className={`bg-white rounded-3xl p-8 sm:p-10 lg:p-12 border border-[#D9C9F4]/70 shadow-[0_8px_30px_rgba(76,46,120,0.04)] grid grid-cols-1 lg:grid-cols-12 gap-8 items-center ${
                  index % 2 === 1 ? 'lg:bg-[#FCFBFE]' : ''
                }`}
              >
                {/* Left Col: Info */}
                <div className="lg:col-span-7 space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="w-14 h-14 rounded-2xl bg-[#F6F2FD] flex items-center justify-center shrink-0">
                      {getTreatmentIcon(tr.iconName)}
                    </div>
                    <div>
                      <span className="text-xs font-semibold text-[#7654B3] uppercase tracking-wider block">
                        {tr.targetAudience}
                      </span>
                      <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#292735]">
                        {tr.title}
                      </h2>
                    </div>
                  </div>

                  <p className="text-base text-[#4C2E78] font-medium leading-snug">
                    {tr.shortDescription}
                  </p>

                  <p className="text-sm text-[#62657D] leading-relaxed">
                    {tr.fullDescription}
                  </p>

                  <div className="pt-2">
                    <p className="text-xs font-bold uppercase tracking-wider text-[#292735] mb-2.5">
                      Aspectos clave del tratamiento:
                    </p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-[#62657D]">
                      {tr.keyAspects.map((aspect, i) => (
                        <div key={i} className="flex items-start gap-2">
                          <Check className="w-3.5 h-3.5 text-[#7654B3] shrink-0 mt-0.5" />
                          <span>{aspect}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Right Col: Consultation Action */}
                <div className="lg:col-span-5 bg-[#F6F2FD]/70 rounded-2xl p-6 sm:p-8 border border-[#D9C9F4]/60 flex flex-col justify-between space-y-6">
                  <div>
                    <span className="text-xs font-semibold uppercase text-[#7654B3] block mb-1">
                      Atención en 3 ciudades
                    </span>
                    <p className="font-serif text-lg font-bold text-[#292735]">
                      ¿Deseas evaluar esta opción para ti o tu familia?
                    </p>
                    <p className="text-xs text-[#62657D] mt-2 leading-relaxed">
                      Coordina una cita de diagnóstico en San Pedro de Macorís, Higüey o La Romana directamente con nuestro equipo.
                    </p>
                  </div>

                  <div className="space-y-2.5">
                    <a
                      href={`${CLINIC_DATA.whatsappUrl}?text=${encodeURIComponent(`Hola Dra. Ruth, me gustaría solicitar información sobre ${tr.title}.`)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full inline-flex items-center justify-center gap-2 py-3 px-5 rounded-full text-xs sm:text-sm font-semibold text-white bg-[#7654B3] hover:bg-[#4C2E78] transition-colors shadow-sm"
                    >
                      <MessageCircle className="w-4 h-4 text-[#CDAEF5]" />
                      <span>Consultar sobre {tr.title}</span>
                    </a>

                    <Link
                      to="/agenda"
                      className="w-full inline-flex items-center justify-center gap-2 py-2.5 px-4 rounded-full text-xs font-medium text-[#4C2E78] bg-white hover:bg-[#F6F2FD] border border-[#D9C9F4] transition-colors"
                    >
                      <span>Formulario de pre-agenda</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                </div>

              </div>
            </RevealOnScroll>
          ))}
        </div>
      )}

      {/* Bottom CTA */}
      <RevealOnScroll direction="up" delay={150}>
        <div className="mt-20 p-10 rounded-3xl bg-[#4C2E78] text-white text-center space-y-4">
          <h3 className="font-serif text-2xl sm:text-3xl font-bold">
            Cada tratamiento inicia con una evaluación clínica personalizada.
          </h3>
          <p className="text-sm text-gray-200 max-w-xl mx-auto leading-relaxed">
            Permítenos orientarte con honestidad y respaldar la salud de tu sonrisa con ciencia y dedicación.
          </p>
          <div className="pt-2">
            <Link
              to="/agenda"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full text-sm font-semibold text-[#4C2E78] bg-white hover:bg-[#F6F2FD] transition-colors shadow-lg"
            >
              <span>Agendar mi consulta de evaluación</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </RevealOnScroll>

    </div>
  );
};
