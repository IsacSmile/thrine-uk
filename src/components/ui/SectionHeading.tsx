import React from 'react';

interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  align?: 'left' | 'center';
  className?: string;
  dark?: boolean;
}

export const SectionHeading: React.FC<SectionHeadingProps> = ({
  eyebrow,
  title,
  subtitle,
  align = 'left',
  className = '',
  dark = false,
}) => {
  const alignStyles = align === 'center' ? 'text-center mx-auto' : 'text-left';

  return (
    <div className={`max-w-3xl mb-8 sm:mb-16 ${alignStyles} ${className}`}>
      {eyebrow && (
        <div className={`flex items-center gap-2 mb-2 sm:mb-3 ${align === 'center' ? 'justify-center' : ''}`}>
          <span className={`text-[10px] sm:text-xs font-mono uppercase tracking-widest ${dark ? 'text-terracotta' : 'text-terracotta'} font-semibold`}>
            {eyebrow}
          </span>
        </div>
      )}
      
      <h2 className={`text-2xl sm:text-4xl md:text-5xl font-extrabold tracking-tight font-sans ${dark ? 'text-paper' : 'text-editorial'} leading-[1.12]`}>
        {title}
      </h2>

      {subtitle && (
        <p className={`mt-2.5 sm:mt-4 text-xs sm:text-base ${dark ? 'text-paper/70' : 'text-editorial-muted'} leading-relaxed font-normal`}>
          {subtitle}
        </p>
      )}
    </div>
  );
};
