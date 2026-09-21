import React from 'react';

interface SectionHeadingProps {
  badge?: string;
  title: string;
  subtitle?: string;
  alignment?: 'center' | 'left';
  className?: string;
}

export const SectionHeading: React.FC<SectionHeadingProps> = ({
  badge,
  title,
  subtitle,
  alignment = 'center',
  className = '',
}) => {
  const alignClass = alignment === 'center' ? 'text-center mx-auto' : 'text-left';

  return (
    <div className={`max-w-3xl ${alignClass} mb-12 sm:mb-16 ${className}`}>
      {badge && (
        <div className={`inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#F6F2FD] border border-[#D9C9F4]/70 text-xs font-semibold text-[#7654B3] mb-4 tracking-wide uppercase`}>
          <span className="w-1.5 h-1.5 rounded-full bg-[#7654B3]" />
          <span>{badge}</span>
        </div>
      )}
      
      <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#292735] tracking-tight leading-[1.15]">
        {title}
      </h2>

      {subtitle && (
        <p className="mt-4 text-base sm:text-lg text-[#62657D] leading-relaxed max-w-2xl mx-auto">
          {subtitle}
        </p>
      )}

      {/* Subtle organic curved accent */}
      <div className={`mt-5 flex ${alignment === 'center' ? 'justify-center' : 'justify-start'}`}>
        <svg
          className="w-16 h-2.5 text-[#D9C9F4]"
          viewBox="0 0 64 10"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
        >
          <path
            d="M2 8C14 2 26 2 32 5C38 8 50 8 62 2"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinecap="round"
          />
        </svg>
      </div>
    </div>
  );
};
