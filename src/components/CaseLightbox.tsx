import React, { useEffect } from 'react';
import { X, ChevronLeft, ChevronRight, Info } from 'lucide-react';
import { ClinicalCase } from '../types';
import { ImageWithSkeleton } from './ImageWithSkeleton';

interface CaseLightboxProps {
  currentCase: ClinicalCase | null;
  casesList: ClinicalCase[];
  onClose: () => void;
  onSelectCase: (c: ClinicalCase) => void;
}

export const CaseLightbox: React.FC<CaseLightboxProps> = ({
  currentCase,
  casesList,
  onClose,
  onSelectCase,
}) => {
  useEffect(() => {
    if (!currentCase) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowRight') handleNext();
      if (e.key === 'ArrowLeft') handlePrev();
    };

    window.addEventListener('keydown', handleKeyDown);
    document.body.style.overflow = 'hidden';

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'auto';
    };
  }, [currentCase]);

  if (!currentCase) return null;

  const currentIndex = casesList.findIndex((c) => c.id === currentCase.id);

  const handleNext = () => {
    const nextIndex = (currentIndex + 1) % casesList.length;
    onSelectCase(casesList[nextIndex]);
  };

  const handlePrev = () => {
    const prevIndex = (currentIndex - 1 + casesList.length) % casesList.length;
    onSelectCase(casesList[prevIndex]);
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label={currentCase.title}
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-[#292735]/90 backdrop-blur-md animate-in fade-in duration-200"
    >
      {/* Backdrop Click */}
      <div className="absolute inset-0" onClick={onClose} />

      {/* Lightbox Container */}
      <div className="relative z-10 w-full max-w-4xl bg-white rounded-3xl overflow-hidden shadow-2xl border border-[#D9C9F4]/40 flex flex-col md:flex-row max-h-[90vh]">
        
        {/* Close Button */}
        <button
          type="button"
          onClick={onClose}
          className="absolute top-4 right-4 z-20 p-2.5 rounded-full bg-[#292735]/70 hover:bg-[#292735] text-white transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-white"
          aria-label="Cerrar vista de caso"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Image Display */}
        <div className="md:w-3/5 bg-[#F6F2FD] relative flex items-center justify-center min-h-[300px] md:min-h-[480px]">
          <ImageWithSkeleton
            key={currentCase.id}
            src={currentCase.imageSrc}
            alt={`Fotografía clínica: ${currentCase.title}`}
            referrerPolicy="no-referrer"
            containerClassName="w-full h-full flex items-center justify-center"
            className="w-full h-full object-contain max-h-[60vh] md:max-h-[85vh] p-4"
          />

          {/* Navigation Arrows */}
          {casesList.length > 1 && (
            <>
              <button
                type="button"
                onClick={handlePrev}
                className="absolute left-3 top-1/2 -translate-y-1/2 p-2 rounded-full bg-white/80 hover:bg-white text-[#4C2E78] shadow-md transition-colors"
                aria-label="Caso anterior"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                type="button"
                onClick={handleNext}
                className="absolute right-3 top-1/2 -translate-y-1/2 p-2 rounded-full bg-white/80 hover:bg-white text-[#4C2E78] shadow-md transition-colors"
                aria-label="Caso siguiente"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </>
          )}
        </div>

        {/* Details Sidebar */}
        <div className="md:w-2/5 p-6 sm:p-8 flex flex-col justify-between overflow-y-auto bg-[#FCFBFE]">
          <div className="space-y-4">
            <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold bg-[#F6F2FD] text-[#4C2E78] border border-[#D9C9F4]/60">
              {currentCase.category}
            </span>

            <h3 className="font-serif text-2xl font-bold text-[#292735] leading-snug">
              {currentCase.title}
            </h3>

            <p className="text-sm text-[#62657D] leading-relaxed">
              {currentCase.description}
            </p>

            <div className="p-3.5 rounded-2xl bg-[#F6F2FD]/80 border border-[#D9C9F4]/60 text-xs text-[#4C2E78] flex items-start gap-2.5">
              <Info className="w-4 h-4 shrink-0 text-[#7654B3] mt-0.5" />
              <p className="leading-relaxed">
                {currentCase.disclaimer}
              </p>
            </div>
          </div>

          <div className="pt-6 border-t border-[#D9C9F4]/40 mt-6 flex items-center justify-between text-xs text-[#62657D]">
            <span>Caso {currentIndex + 1} de {casesList.length}</span>
            <span className="font-medium text-[#7654B3]">Dra. Ruth Esther Navarro</span>
          </div>
        </div>

      </div>
    </div>
  );
};
