import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  MessageCircle,
  ArrowRight,
  Sparkles,
  ShieldCheck,
  Activity,
  Layers,
  CheckCircle2,
  HeartHandshake,
  ChevronDown,
  MapPin,
  GraduationCap,
  Eye,
  Check,
  Calendar
} from 'lucide-react';
import {
  CLINIC_DATA,
  TREATMENTS,
  LIFE_STAGES,
  CLINICAL_CASES,
  CARE_PROCESS,
  FAQS,
  CORE_VALUES
} from '../data/content';
import { SectionHeading } from '../components/SectionHeading';
import { CaseLightbox } from '../components/CaseLightbox';
import { ImageWithSkeleton } from '../components/ImageWithSkeleton';
import { RevealOnScroll } from '../components/RevealOnScroll';
import { ClinicStatusBadge } from '../components/ClinicStatusBadge';
import { ClinicalCase } from '../types';

export const HomePage: React.FC = () => {
  const [selectedCase, setSelectedCase] = useState<ClinicalCase | null>(null);
  const [openFaq, setOpenFaq] = useState<string | null>('edad-evaluacion');

  const getTreatmentIcon = (iconName: string) => {
    switch (iconName) {
      case 'Sparkles': return <Sparkles className="w-6 h-6 text-[#7654B3]" />;
      case 'ShieldCheck': return <ShieldCheck className="w-6 h-6 text-[#7654B3]" />;
      case 'Activity': return <Activity className="w-6 h-6 text-[#7654B3]" />;
      case 'Layers': return <Layers className="w-6 h-6 text-[#7654B3]" />;
      case 'CheckCircle2': return <CheckCircle2 className="w-6 h-6 text-[#7654B3]" />;
      case 'HeartHandshake': return <HeartHandshake className="w-6 h-6 text-[#7654B3]" />;
      default: return <Sparkles className="w-6 h-6 text-[#7654B3]" />;
    }
  };

  const toggleFaq = (id: string) => {
    setOpenFaq(openFaq === id ? null : id);
  };

  return (
    <div className="pt-24 pb-16 overflow-hidden">
      
      {/* 1. HERO PRINCIPAL EDITORIAL */}
      <section className="relative px-4 sm:px-6 lg:px-8 py-8 sm:py-16 max-w-7xl mx-auto">
        {/* Soft decorative background ambient gradient */}
        <div className="absolute top-1/4 -left-20 w-96 h-96 bg-[#D9C9F4]/30 rounded-full blur-3xl pointer-events-none -z-10" />
        <div className="absolute top-1/3 -right-20 w-96 h-96 bg-[#CDAEF5]/20 rounded-full blur-3xl pointer-events-none -z-10" />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Columna Izquierda: Mensaje y Conversión */}
          <div className="lg:col-span-7">
            <RevealOnScroll direction="up" delay={50} className="space-y-6 sm:space-y-8">
              <div className="flex flex-wrap items-center gap-3">
                <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#F6F2FD] border border-[#D9C9F4] text-xs font-semibold text-[#7654B3]">
                  <span className="w-2 h-2 rounded-full bg-[#7654B3] animate-pulse" />
                  <span>{CLINIC_DATA.specialty}</span>
                </div>
                <ClinicStatusBadge size="sm" />
              </div>

              <div className="space-y-3 sm:space-y-4">
                <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-extrabold text-[#292735] tracking-tight leading-[1.12]">
                  {CLINIC_DATA.primaryTagline}
                </h1>
                <p className="text-xl sm:text-2xl text-[#4C2E78] font-medium leading-snug">
                  {CLINIC_DATA.subTagline}
                </p>
              </div>

              <p className="text-base sm:text-lg text-[#62657D] leading-relaxed max-w-xl">
                Evaluaciones clínicas individualizadas en San Pedro de Macorís, Higüey y La Romana. Tratamientos con base científica para resolver apiñamiento, discrepancias óseas y anomalías de mordida.
              </p>

              {/* CTAs */}
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2">
                <a
                  href={CLINIC_DATA.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  id="hero-cta-whatsapp"
                  className="inline-flex items-center justify-center gap-2.5 px-7 py-4 rounded-full text-base font-semibold text-white bg-[#7654B3] hover:bg-[#4C2E78] shadow-lg shadow-[#7654B3]/25 transition-all transform active:scale-98 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#4C2E78]"
                >
                  <MessageCircle className="w-5 h-5 text-[#CDAEF5]" />
                  <span>Agendar por WhatsApp</span>
                </a>

                <Link
                  to="/tratamientos"
                  id="hero-cta-tratamientos"
                  className="inline-flex items-center justify-center gap-2 px-6 py-4 rounded-full text-base font-medium text-[#4C2E78] bg-[#F6F2FD] hover:bg-[#D9C9F4]/40 border border-[#D9C9F4]/70 transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-[#7654B3]"
                >
                  <span>Explorar tratamientos</span>
                  <ArrowRight className="w-4 h-4 text-[#7654B3]" />
                </Link>
              </div>

              {/* Trust highlights under hero */}
              <div className="pt-6 border-t border-[#D9C9F4]/40 grid grid-cols-2 sm:grid-cols-3 gap-4 text-xs text-[#62657D]">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#7654B3] shrink-0" />
                  <span>Diagnóstico individual</span>
                </div>
                <div className="flex items-center gap-2">
                  <GraduationCap className="w-4 h-4 text-[#7654B3] shrink-0" />
                  <span>Docente en la UCE</span>
                </div>
                <div className="flex items-center gap-2 col-span-2 sm:col-span-1">
                  <MapPin className="w-4 h-4 text-[#7654B3] shrink-0" />
                  <span>3 Ciudades del Este</span>
                </div>
              </div>
            </RevealOnScroll>
          </div>

          {/* Columna Derecha: Fotografía Profesional Protagonista */}
          <div className="lg:col-span-5 relative">
            <RevealOnScroll direction="left" delay={150}>
              <div className="relative mx-auto max-w-md lg:max-w-none">
                
                {/* Organic leaf & lavender background ornament */}
                <div className="absolute -top-6 -right-6 w-32 h-32 bg-[#D9C9F4]/40 rounded-full blur-xl pointer-events-none" />
                <div className="absolute -bottom-8 -left-8 w-40 h-40 bg-[#F6F2FD] rounded-3xl -rotate-6 border border-[#D9C9F4]/50 -z-10" />

                {/* Main Photo Card */}
                <div className="relative rounded-3xl overflow-hidden bg-white p-3 shadow-[0_20px_50px_rgba(76,46,120,0.12)] border border-[#D9C9F4]/60">
                  <div className="relative aspect-[3/4] rounded-2xl overflow-hidden bg-[#F6F2FD]">
                    <ImageWithSkeleton
                      src="/images/hero-draruth.jpg"
                      alt="Dra. Ruth Esther Navarro, especialista en Ortodoncia y Ortopedia Maxilofacial"
                      referrerPolicy="no-referrer"
                      containerClassName="w-full h-full"
                      className="w-full h-full object-cover object-top hover:scale-[1.02] transition-transform duration-700"
                      width="600"
                      height="800"
                      loading="eager"
                    />
                    
                    {/* Subtle gradient overlay at bottom of photo */}
                    <div className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-[#292735]/60 via-[#292735]/10 to-transparent pointer-events-none" />

                    {/* Doctor label directly in photo */}
                    <div className="absolute bottom-4 left-4 right-4 text-white">
                      <p className="font-serif text-lg font-bold">Dra. Ruth Esther Navarro</p>
                      <p className="text-xs text-[#D9C9F4]">Ortodoncia y Ortopedia Maxilofacial</p>
                    </div>
                  </div>
                </div>

                {/* Floating Badge: Ciudades */}
                <div className="absolute -bottom-5 sm:-bottom-6 right-2 sm:right-4 bg-white/95 backdrop-blur-md px-4 sm:px-5 py-2.5 sm:py-3 rounded-2xl shadow-xl border border-[#D9C9F4] flex items-center gap-3">
                  <div className="p-2 rounded-xl bg-[#F6F2FD] text-[#7654B3]">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <p className="text-[11px] uppercase tracking-wider text-[#62657D] font-semibold">Atención en</p>
                    <p className="text-xs sm:text-sm font-bold text-[#4C2E78]">
                      San Pedro · Higüey · La Romana
                    </p>
                  </div>
                </div>

              </div>
            </RevealOnScroll>
          </div>

        </div>
      </section>

      {/* 2. SECCIÓN DE CONFIANZA: VALORES CLÍNICOS */}
      <section className="py-16 sm:py-20 bg-[#F6F2FD]/60 border-y border-[#D9C9F4]/40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <RevealOnScroll direction="up">
            <SectionHeading
              badge="Fundamentos Clínicos"
              title="Precisión clínica. Atención cercana."
              subtitle="Nuestro compromiso profesional se basa en acompañar con honestidad, rigor biomecánico y respeto el desarrollo de cada sonrisa."
            />
          </RevealOnScroll>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {CORE_VALUES.map((val, idx) => (
              <RevealOnScroll
                key={val.title}
                direction="up"
                delay={idx * 140}
                className="h-full"
              >
                <div className="h-full relative bg-white rounded-3xl p-8 border border-[#D9C9F4]/60 shadow-[0_4px_20px_rgba(76,46,120,0.03)] hover:shadow-[0_8px_30px_rgba(76,46,120,0.08)] transition-all flex flex-col justify-between">
                  <div className="space-y-4">
                    <span className="font-serif text-3xl font-bold text-[#CDAEF5]">
                      0{idx + 1}
                    </span>
                    <h3 className="font-serif text-2xl font-bold text-[#292735]">
                      {val.title}
                    </h3>
                    <p className="text-sm text-[#62657D] leading-relaxed">
                      {val.description}
                    </p>
                  </div>

                  <div className="pt-6 mt-4 border-t border-[#F6F2FD] flex items-center gap-2 text-xs font-semibold text-[#7654B3]">
                    <Check className="w-4 h-4" />
                    <span>Enfoque comprobado</span>
                  </div>
                </div>
              </RevealOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* 3. TRATAMIENTOS DESTACADOS */}
      <section id="tratamientos-destacados" className="py-20 sm:py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <RevealOnScroll direction="up">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
            <div className="max-w-2xl">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#F6F2FD] border border-[#D9C9F4]/70 text-xs font-semibold text-[#7654B3] mb-4 uppercase">
                <span>Áreas de Tratamiento</span>
              </div>
              <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#292735] tracking-tight">
                Especialidades clínicas y seguimiento
              </h2>
              <p className="mt-3 text-base sm:text-lg text-[#62657D]">
                Planes integrales diseñados para prevenir, interceptar y corregir problemas de alineación y armonía maxilofacial.
              </p>
            </div>

            <Link
              to="/tratamientos"
              className="mt-6 md:mt-0 inline-flex items-center gap-2 text-sm font-semibold text-[#4C2E78] hover:text-[#7654B3] transition-colors group"
            >
              <span>Ver detalles de tratamientos</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </RevealOnScroll>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {TREATMENTS.map((tr, idx) => (
            <RevealOnScroll
              key={tr.id}
              direction="up"
              delay={(idx % 3) * 100}
              className="h-full"
            >
              <div className="h-full group bg-white rounded-3xl p-7 border border-[#D9C9F4]/60 hover:border-[#7654B3]/50 shadow-[0_4px_24px_rgba(76,46,120,0.03)] hover:shadow-[0_12px_36px_rgba(76,46,120,0.09)] transition-all flex flex-col justify-between">
                <div className="space-y-4">
                  <div className="w-12 h-12 rounded-2xl bg-[#F6F2FD] group-hover:bg-[#D9C9F4]/50 transition-colors flex items-center justify-center">
                    {getTreatmentIcon(tr.iconName)}
                  </div>

                  <div>
                    <span className="text-[11px] font-semibold text-[#7654B3] uppercase tracking-wider block mb-1">
                      {tr.targetAudience}
                    </span>
                    <h3 className="font-serif text-2xl font-bold text-[#292735] group-hover:text-[#4C2E78] transition-colors">
                      {tr.title}
                    </h3>
                  </div>

                  <p className="text-sm text-[#62657D] leading-relaxed">
                    {tr.shortDescription}
                  </p>
                </div>

                <div className="pt-6 mt-6 border-t border-[#F6F2FD] flex items-center justify-between">
                  <Link
                    to="/tratamientos"
                    className="text-xs font-semibold text-[#4C2E78] hover:text-[#7654B3] inline-flex items-center gap-1.5"
                  >
                    <span>Conocer más</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>

                  <Link
                    to="/agenda"
                    className="text-xs px-3 py-1.5 rounded-full bg-[#F6F2FD] text-[#7654B3] hover:bg-[#7654B3] hover:text-white transition-colors"
                  >
                    Consultar
                  </Link>
                </div>
              </div>
            </RevealOnScroll>
          ))}
        </div>
      </section>

      {/* 4. ATENCIÓN SEGÚN LA EDAD */}
      <section className="py-20 sm:py-24 bg-[#FCFBFE] border-t border-[#D9C9F4]/40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <RevealOnScroll direction="up">
            <SectionHeading
              badge="Atención a tu Medida"
              title="Acompañamiento en cada etapa de la vida"
              subtitle="El tratamiento de ortodoncia y ortopedia responde a necesidades biológicas y funcionales distintas según la edad."
            />
          </RevealOnScroll>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {LIFE_STAGES.map((stage, idx) => (
              <RevealOnScroll
                key={stage.id}
                direction="up"
                delay={idx * 130}
                className="h-full"
              >
                <div className="h-full bg-white rounded-3xl p-8 border border-[#D9C9F4]/60 shadow-[0_6px_28px_rgba(76,46,120,0.04)] flex flex-col justify-between hover:shadow-[0_12px_36px_rgba(76,46,120,0.08)] transition-all">
                  <div>
                    <div className="inline-block px-3 py-1 rounded-full text-xs font-semibold bg-[#F6F2FD] text-[#4C2E78] mb-3">
                      {stage.recommendedAge}
                    </div>
                    
                    <h3 className="font-serif text-3xl font-bold text-[#292735] mb-1">
                      {stage.title}
                    </h3>
                    <p className="text-sm font-medium text-[#7654B3] mb-4">
                      {stage.subtitle}
                    </p>

                    <p className="text-sm text-[#62657D] leading-relaxed mb-6">
                      {stage.description}
                    </p>

                    <div className="space-y-2.5">
                      <p className="text-xs font-semibold uppercase tracking-wider text-[#292735]">
                        Enfoque prioritario:
                      </p>
                      {stage.focus.map((item, i) => (
                        <div key={i} className="flex items-start gap-2 text-xs text-[#62657D]">
                          <Check className="w-3.5 h-3.5 text-[#7654B3] shrink-0 mt-0.5" />
                          <span>{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="pt-6 mt-8 border-t border-[#F6F2FD]">
                    <Link
                      to="/agenda"
                      className="w-full py-2.5 px-4 rounded-full text-xs font-semibold text-center block text-[#4C2E78] bg-[#F6F2FD] hover:bg-[#D9C9F4]/50 transition-colors"
                    >
                      Agendar evaluación para {stage.title.toLowerCase()}
                    </Link>
                  </div>
                </div>
              </RevealOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* 5. CASOS CLÍNICOS REALES CON LIGHTBOX */}
      <section id="casos-clinicos" className="py-20 sm:py-24 bg-[#F6F2FD]/40 border-t border-[#D9C9F4]/40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <RevealOnScroll direction="up">
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
              <div className="max-w-2xl">
                <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#F6F2FD] border border-[#D9C9F4] text-xs font-semibold text-[#7654B3] mb-4 uppercase">
                  <Eye className="w-3.5 h-3.5" />
                  <span>Galería Clínica</span>
                </div>
                <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#292735] tracking-tight">
                  Casos clínicos documentados
                </h2>
                <p className="mt-3 text-sm sm:text-base text-[#62657D]">
                  Registro de evolución ortodóncica de pacientes en consulta. Pulsa sobre cualquier imagen para ver los detalles con claridad.
                </p>
              </div>

              <div className="mt-4 md:mt-0 text-xs text-[#7654B3] bg-white px-4 py-2 rounded-2xl border border-[#D9C9F4]/70 inline-flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-[#7654B3]" />
                <span>Publicados con autorización correspondiente</span>
              </div>
            </div>
          </RevealOnScroll>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {CLINICAL_CASES.map((clinicalCase, idx) => (
              <RevealOnScroll
                key={clinicalCase.id}
                direction="up"
                delay={idx * 130}
                className="h-full"
              >
                <div
                  onClick={() => setSelectedCase(clinicalCase)}
                  className="h-full group cursor-pointer bg-white rounded-3xl overflow-hidden border border-[#D9C9F4]/60 shadow-[0_4px_24px_rgba(76,46,120,0.04)] hover:shadow-[0_12px_36px_rgba(76,46,120,0.1)] transition-all flex flex-col"
                >
                  <div className="relative aspect-square bg-[#F6F2FD] overflow-hidden">
                    <ImageWithSkeleton
                      src={clinicalCase.imageSrc}
                      alt={clinicalCase.title}
                      referrerPolicy="no-referrer"
                      containerClassName="w-full h-full"
                      className="w-full h-full object-contain p-2 group-hover:scale-105 transition-transform duration-500"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-[#292735]/0 group-hover:bg-[#292735]/20 transition-colors flex items-center justify-center pointer-events-none">
                      <span className="opacity-0 group-hover:opacity-100 transition-opacity px-4 py-2 rounded-full bg-white/95 text-xs font-semibold text-[#4C2E78] shadow-lg">
                        Ver detalle completo
                      </span>
                    </div>
                  </div>

                  <div className="p-6 flex-1 flex flex-col justify-between space-y-3">
                    <div>
                      <span className="text-[11px] font-semibold text-[#7654B3] uppercase tracking-wider block">
                        {clinicalCase.category}
                      </span>
                      <h3 className="font-serif text-xl font-bold text-[#292735] mt-1 group-hover:text-[#4C2E78] transition-colors">
                        {clinicalCase.title}
                      </h3>
                    </div>

                    <p className="text-xs text-[#62657D] leading-relaxed">
                      {clinicalCase.description}
                    </p>

                    <p className="text-[11px] text-[#7654B3]/80 italic pt-2 border-t border-[#F6F2FD]">
                      {clinicalCase.disclaimer}
                    </p>
                  </div>
                </div>
              </RevealOnScroll>
            ))}
          </div>

          <div className="mt-12 text-center">
            <RevealOnScroll direction="up" delay={100}>
              <Link
                to="/casos"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-sm font-semibold text-[#4C2E78] bg-white hover:bg-[#F6F2FD] border border-[#D9C9F4] transition-all shadow-sm"
              >
                <span>Explorar galería completa de casos</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </RevealOnScroll>
          </div>

        </div>
      </section>

      {/* 6. SOBRE LA DOCTORA (PREVIEW EDITORIAL) */}
      <section className="py-20 sm:py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <RevealOnScroll direction="up">
          <div className="bg-white rounded-3xl p-8 sm:p-12 lg:p-16 border border-[#D9C9F4]/70 shadow-[0_12px_40px_rgba(76,46,120,0.06)] relative overflow-hidden">
            
            <div className="absolute top-0 right-0 w-96 h-96 bg-[#F6F2FD] rounded-full blur-3xl pointer-events-none -z-10" />

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
              
              {/* Foto Circular con marco lavanda */}
              <div className="lg:col-span-4 flex justify-center">
                <RevealOnScroll direction="right" delay={100}>
                  <div className="relative">
                    <div className="w-64 h-64 sm:w-72 sm:h-72 rounded-full p-3 bg-[#F6F2FD] border-2 border-[#D9C9F4] shadow-lg">
                      <div className="w-full h-full rounded-full overflow-hidden bg-white">
                        <ImageWithSkeleton
                          src="/images/about-draruth.jpg"
                          alt="Retrato profesional de la Dra. Ruth Esther Navarro"
                          referrerPolicy="no-referrer"
                          containerClassName="w-full h-full rounded-full"
                          skeletonClassName="rounded-full"
                          className="w-full h-full object-cover"
                          width="300"
                          height="300"
                          loading="lazy"
                        />
                      </div>
                    </div>

                    <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 px-4 py-1.5 rounded-full bg-[#4C2E78] text-white text-xs font-semibold whitespace-nowrap shadow-md">
                      Docente UCE
                    </div>
                  </div>
                </RevealOnScroll>
              </div>

              {/* Texto y Visión */}
              <div className="lg:col-span-8 space-y-5">
                <RevealOnScroll direction="left" delay={150}>
                  <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#F6F2FD] border border-[#D9C9F4]/70 text-xs font-semibold text-[#7654B3] uppercase">
                    <span>Perfil Profesional</span>
                  </div>

                  <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#292735] leading-tight">
                    Una sonrisa se acompaña en cada etapa.
                  </h2>

                  <blockquote className="border-l-2 border-[#7654B3] pl-4 italic text-base sm:text-lg text-[#4C2E78] my-3">
                    "{CLINIC_DATA.positioningQuote}"
                  </blockquote>

                  <p className="text-sm sm:text-base text-[#62657D] leading-relaxed">
                    Mi labor como especialista y docente universitaria en la UCE se enfoca en comprender la individualidad de cada paciente. Desarrollamos planes basados en estudios cefalométricos y fotográficos exhaustivos, garantizando decisiones terapéuticas fundamentadas.
                  </p>

                  <p className="text-sm sm:text-base text-[#62657D] leading-relaxed">
                    Brindamos atención personalizada en San Pedro de Macorís, Higüey y La Romana, cuidando la salud periodontal, la función respiratoria y la armonía facial con un trato cálido y transparente.
                  </p>

                  <div className="pt-4 flex flex-col sm:flex-row items-start sm:items-center gap-4">
                    <Link
                      to="/sobre-la-doctora"
                      className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-sm font-semibold text-white bg-[#7654B3] hover:bg-[#4C2E78] transition-all shadow-md shadow-[#7654B3]/20"
                    >
                      <span>Conocer más sobre mi trayectoria</span>
                      <ArrowRight className="w-4 h-4" />
                    </Link>

                    <a
                      href={CLINIC_DATA.instagramUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs font-medium text-[#62657D] hover:text-[#4C2E78] transition-colors"
                    >
                      Seguir en Instagram {CLINIC_DATA.instagramHandle}
                    </a>
                  </div>
                </RevealOnScroll>
              </div>

            </div>

          </div>
        </RevealOnScroll>
      </section>

      {/* 7. PROCESO DE ATENCIÓN */}
      <section className="py-20 sm:py-24 bg-[#F6F2FD]/50 border-t border-[#D9C9F4]/40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <RevealOnScroll direction="up">
            <SectionHeading
              badge="Paso a Paso"
              title="Cómo es tu proceso de atención"
              subtitle="Una secuencia ordenada, transparente y sin complicaciones desde tu primer contacto hasta el seguimiento final."
            />
          </RevealOnScroll>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-4 sm:gap-6 relative">
            {CARE_PROCESS.map((step, idx) => (
              <RevealOnScroll
                key={step.step}
                direction="up"
                delay={idx * 100}
                className="h-full"
              >
                <div className="h-full bg-white rounded-3xl p-6 border border-[#D9C9F4]/60 shadow-[0_4px_16px_rgba(76,46,120,0.03)] hover:shadow-[0_8px_24px_rgba(76,46,120,0.06)] transition-all flex flex-col justify-between">
                  <div>
                    <div className="w-10 h-10 rounded-2xl bg-[#F6F2FD] text-[#7654B3] font-serif font-bold text-lg flex items-center justify-center mb-4">
                      {step.step}
                    </div>
                    <h3 className="font-serif text-lg font-bold text-[#292735] mb-2">
                      {step.title}
                    </h3>
                    <p className="text-xs text-[#62657D] leading-relaxed">
                      {step.description}
                    </p>
                  </div>

                  <div className="mt-4 pt-4 border-t border-[#F6F2FD]">
                    <span className="text-[10px] font-semibold tracking-wider text-[#7654B3] uppercase">
                      Fase {step.step}
                    </span>
                  </div>
                </div>
              </RevealOnScroll>
            ))}
          </div>

          <div className="mt-12 text-center">
            <RevealOnScroll direction="up" delay={100}>
              <Link
                to="/agenda"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full text-sm font-semibold text-white bg-[#7654B3] hover:bg-[#4C2E78] shadow-md shadow-[#7654B3]/25 transition-all"
              >
                <Calendar className="w-4 h-4 text-[#CDAEF5]" />
                <span>Comenzar con el paso 1: Solicitar cita</span>
              </Link>
            </RevealOnScroll>
          </div>
        </div>
      </section>

      {/* 8. PREGUNTAS FRECUENTES (FAQ) */}
      <section className="py-20 sm:py-24 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <RevealOnScroll direction="up">
          <SectionHeading
            badge="Dudas Comunes"
            title="Preguntas frecuentes"
            subtitle="Respuestas claras y sinceras a las preguntas más habituales de nuestros pacientes y sus familias."
          />
        </RevealOnScroll>

        <div className="space-y-4">
          {FAQS.map((faq, idx) => {
            const isOpen = openFaq === faq.id;
            return (
              <RevealOnScroll key={faq.id} direction="up" delay={idx * 60}>
                <div className="bg-white rounded-2xl border border-[#D9C9F4]/60 overflow-hidden shadow-sm transition-all">
                  <button
                    type="button"
                    onClick={() => toggleFaq(faq.id)}
                    aria-expanded={isOpen}
                    className="w-full px-6 py-5 text-left flex items-center justify-between gap-4 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#7654B3]"
                  >
                    <span className="font-serif text-lg sm:text-xl font-bold text-[#292735]">
                      {faq.question}
                    </span>
                    <div className={`p-2 rounded-full bg-[#F6F2FD] text-[#4C2E78] shrink-0 transition-transform duration-200 ${isOpen ? 'rotate-180 bg-[#D9C9F4]/60' : ''}`}>
                      <ChevronDown className="w-4 h-4" />
                    </div>
                  </button>

                  {isOpen && (
                    <div className="px-6 pb-6 pt-1 text-sm sm:text-base text-[#62657D] leading-relaxed border-t border-[#F6F2FD]">
                      {faq.answer}
                    </div>
                  )}
                </div>
              </RevealOnScroll>
            );
          })}
        </div>

        <RevealOnScroll direction="up" delay={150}>
          <div className="mt-10 p-6 rounded-3xl bg-[#F6F2FD] border border-[#D9C9F4]/60 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
            <div>
              <p className="font-serif text-lg font-bold text-[#292735]">
                ¿Tienes otra pregunta sobre tu caso?
              </p>
              <p className="text-xs sm:text-sm text-[#62657D]">
                Escríbenos directamente y te orientamos sin ningún compromiso.
              </p>
            </div>
            <a
              href={CLINIC_DATA.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-xs sm:text-sm font-semibold text-white bg-[#7654B3] hover:bg-[#4C2E78] transition-colors whitespace-nowrap"
            >
              <MessageCircle className="w-4 h-4 text-[#CDAEF5]" />
              <span>Consultar por WhatsApp</span>
            </a>
          </div>
        </RevealOnScroll>
      </section>

      {/* 9. CTA FINAL EDITORIAL */}
      <section className="py-16 sm:py-20 bg-[#4C2E78] text-white relative overflow-hidden rounded-3xl mx-4 sm:mx-6 lg:mx-8 mb-12 shadow-2xl">
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#7654B3]/50 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#CDAEF5]/10 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-4xl mx-auto px-6 sm:px-8 text-center relative z-10 space-y-6">
          <RevealOnScroll direction="up">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 border border-white/20 text-xs font-semibold text-[#CDAEF5] uppercase">
              <span>Atención Personalizada</span>
            </div>

            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight mt-4">
              Tu próxima evaluación está a un mensaje de distancia.
            </h2>

            <p className="text-base sm:text-lg text-gray-200 max-w-2xl mx-auto leading-relaxed mt-4">
              Coordinamos tu cita en San Pedro de Macorís, Higüey o La Romana de manera rápida y directa a través de WhatsApp.
            </p>

            <div className="pt-6 flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href={CLINIC_DATA.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 rounded-full text-base font-bold text-[#4C2E78] bg-white hover:bg-[#F6F2FD] shadow-xl hover:scale-105 active:scale-95 transition-all"
              >
                <MessageCircle className="w-5 h-5 text-[#25D366] fill-[#25D366]" />
                <span>Agendar por WhatsApp (+1 829-765-9989)</span>
              </a>

              <Link
                to="/agenda"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-4 rounded-full text-base font-medium text-white bg-[#7654B3] hover:bg-[#7654B3]/80 border border-white/20 transition-all"
              >
                <Calendar className="w-4 h-4 text-[#CDAEF5]" />
                <span>Llenar formulario previo</span>
              </Link>
            </div>

            <div className="pt-6 text-xs text-gray-300 flex flex-wrap items-center justify-center gap-6">
              <span>San Pedro de Macorís</span>
              <span>·</span>
              <span>Higüey</span>
              <span>·</span>
              <span>La Romana</span>
            </div>
          </RevealOnScroll>
        </div>
      </section>

      {/* Modal Lightbox para Casos */}
      <CaseLightbox
        currentCase={selectedCase}
        casesList={CLINICAL_CASES}
        onClose={() => setSelectedCase(null)}
        onSelectCase={(c) => setSelectedCase(c)}
      />

    </div>
  );
};
