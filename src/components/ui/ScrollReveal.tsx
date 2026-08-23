import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

interface ScrollRevealProps {
  children: string;
  className?: string;
  textClassName?: string;
  baseOpacity?: number;
  baseRotation?: number;
  enableBlur?: boolean;
  blurStrength?: number;
}

interface WordProps {
  children: string;
  progress: any;
  range: [number, number];
  baseOpacity: number;
  baseRotation: number;
  enableBlur: boolean;
  blurStrength: number;
}

const Word: React.FC<WordProps> = ({
  children,
  progress,
  range,
  baseOpacity,
  baseRotation,
  enableBlur,
  blurStrength,
}) => {
  const opacity = useTransform(progress, range, [baseOpacity, 1]);
  const rotate = useTransform(progress, range, [baseRotation, 0]);
  const blurValue = useTransform(progress, range, [blurStrength, 0]);

  return (
    <span className="relative mr-[0.28em] inline-block">
      <motion.span
        style={{
          opacity,
          rotate,
          filter: enableBlur
            ? useTransform(blurValue, (v) => `blur(${v}px)`)
            : 'none',
        }}
        className="inline-block transition-colors duration-200"
      >
        {children}
      </motion.span>
    </span>
  );
};

export const ScrollReveal: React.FC<ScrollRevealProps> = ({
  children,
  className = '',
  textClassName = '',
  baseOpacity = 0.15,
  baseRotation = 0,
  enableBlur = true,
  blurStrength = 4,
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start 85%', 'end 35%'],
  });

  const words = children.split(' ');

  return (
    <div ref={containerRef} className={`relative z-10 ${className}`}>
      <p className={`flex flex-wrap ${textClassName}`}>
        {words.map((word, i) => {
          const start = i / words.length;
          const end = start + 1 / words.length;

          return (
            <Word
              key={i}
              progress={scrollYProgress}
              range={[start, end]}
              baseOpacity={baseOpacity}
              baseRotation={baseRotation}
              enableBlur={enableBlur}
              blurStrength={blurStrength}
            >
              {word}
            </Word>
          );
        })}
      </p>
    </div>
  );
};
