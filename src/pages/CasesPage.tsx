import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ShieldCheck, Eye, MessageCircle, Info, Calendar } from 'lucide-react';
import { CLINICAL_CASES, CLINIC_DATA } from '../data/content';
import { CaseLightbox } from '../components/CaseLightbox';
import { CasesSkeleton } from '../components/CasesSkeleton';
import { ImageWithSkeleton } from '../components/ImageWithSkeleton';
import { RevealOnScroll } from '../components/RevealOnScroll';
import { ClinicalCase } from '../types';

export const CasesPage: React.FC = () => {
  const [selectedCase, setSelectedCase] = useState<ClinicalCase | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Initial perceived performance skeleton transition
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 450);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="pt-28 pb-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      
      {/* Editorial Header */}
      <RevealOnScroll direction="up">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#F6F2FD] border border-[#D9C9F4] text-xs font-semibold text-[#7654B3] mb-4 uppercase">
            <Eye className="w-3.5 h-3.5" />
            <span>Evidencia Clínica</span>
          </div>

          <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold text-[#292735] tracking-tight">
            Casos Clínicos y Evolución
          </h1>

          <p className="mt-4 text-base sm:text-lg text-[#62657D] leading-relaxed">
            Una muestra visual y respetuosa del proceso de alineación, oclusión y armonización ortodóncica en consulta.
          </p>

          {/* Regulatory & Ethical Badge */}
          <div className="mt-6 inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-[#D9C9F4] text-xs text-[#7654B3] shadow-sm">
            <ShieldCheck className="w-4 h-4 text-[#7654B3]" />
            <span>Casos clínicos publicados con la autorización correspondiente de los pacientes.</span>
          </div>
        </div>
      </RevealOnScroll>

      {/* Grid of cases or Skeleton Loader */}
      {isLoading ? (
        <CasesSkeleton count={3} />
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 animate-in fade-in duration-500">
          {CLINICAL_CASES.map((item, index) => (
            <RevealOnScroll key={item.id} direction="up" delay={index * 120} className="h-full">
              <div
                onClick={() => setSelectedCase(item)}
                className="h-full group cursor-pointer bg-white rounded-3xl overflow-hidden border border-[#D9C9F4]/70 shadow-[0_6px_25px_rgba(76,46,120,0.04)] hover:shadow-[0_16px_40px_rgba(76,46,120,0.12)] transition-all flex flex-col justify-between"
              >
                {/* Image container with Skeleton */}
                <div className="relative aspect-square bg-[#F6F2FD] overflow-hidden">
                  <ImageWithSkeleton
                    src={item.imageSrc}
                    alt={item.title}
                    referrerPolicy="no-referrer"
                    containerClassName="w-full h-full"
                    className="w-full h-full object-contain p-2 group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />

                  <div className="absolute inset-0 bg-[#292735]/0 group-hover:bg-[#292735]/25 transition-colors flex items-center justify-center pointer-events-none">
                    <span className="opacity-0 group-hover:opacity-100 transition-opacity px-5 py-2.5 rounded-full bg-white/95 text-xs font-bold text-[#4C2E78] shadow-lg flex items-center gap-1.5">
                      <Eye className="w-3.5 h-3.5" />
                      <span>Ampliar caso</span>
                    </span>
                  </div>

                  <div className="absolute top-3 left-3 px-2.5 py-1 rounded-full bg-white/90 backdrop-blur-sm text-[11px] font-semibold text-[#4C2E78] border border-[#D9C9F4]/60 pointer-events-none">
                    Caso 0{index + 1}
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                  <div>
                    <span className="text-[11px] font-semibold text-[#7654B3] uppercase tracking-wider block mb-1">
                      {item.category}
                    </span>
                    <h2 className="font-serif text-xl font-bold text-[#292735] group-hover:text-[#4C2E78] transition-colors leading-snug">
                      {item.title}
                    </h2>
                    <p className="text-xs sm:text-sm text-[#62657D] leading-relaxed mt-2">
                      {item.description}
                    </p>
                  </div>

                  <div className="pt-3 border-t border-[#F6F2FD] space-y-2">
                    <div className="flex items-start gap-1.5 text-[11px] text-[#7654B3] italic">
                      <Info className="w-3.5 h-3.5 shrink-0 mt-0.5" />
                      <span>{item.disclaimer}</span>
                    </div>
                  </div>
                </div>
              </div>
            </RevealOnScroll>
          ))}
        </div>
      )}

      {/* Reassurance Callout */}
      <RevealOnScroll direction="up" delay={150}>
        <div className="mt-16 p-8 rounded-3xl bg-white border border-[#D9C9F4]/70 shadow-sm max-w-4xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-1 text-center md:text-left">
            <h3 className="font-serif text-2xl font-bold text-[#292735]">
              ¿Tienes un caso similar?
            </h3>
            <p className="text-xs sm:text-sm text-[#62657D]">
              Agenda una evaluación clínica para analizar tu mordida y definir tu propio plan de tratamiento.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-3 w-full md:w-auto">
            <a
              href={CLINIC_DATA.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full text-xs sm:text-sm font-semibold text-white bg-[#7654B3] hover:bg-[#4C2E78] transition-colors"
            >
              <MessageCircle className="w-4 h-4 text-[#CDAEF5]" />
              <span>Consultar por WhatsApp</span>
            </a>

            <Link
              to="/agenda"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3 rounded-full text-xs sm:text-sm font-medium text-[#4C2E78] bg-[#F6F2FD] hover:bg-[#D9C9F4]/40 border border-[#D9C9F4] transition-colors"
            >
              <Calendar className="w-4 h-4 text-[#7654B3]" />
              <span>Pre-agendar</span>
            </Link>
          </div>
        </div>
      </RevealOnScroll>

      {/* Lightbox Component */}
      <CaseLightbox
        currentCase={selectedCase}
        casesList={CLINICAL_CASES}
        onClose={() => setSelectedCase(null)}
        onSelectCase={(c) => setSelectedCase(c)}
      />

    </div>
  );
};
