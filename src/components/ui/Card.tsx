import React from 'react';

interface CardProps {
  children: React.ReactNode;
  className?: string;
  padding?: 'none' | 'sm' | 'md' | 'lg';
  border?: boolean;
  hoverEffect?: boolean;
}

export const Card: React.FC<CardProps> = ({
  children,
  className = '',
  padding = 'md',
  border = true,
  hoverEffect = false,
}) => {
  const paddingStyles = {
    none: 'p-0',
    sm: 'p-4 sm:p-5',
    md: 'p-6 sm:p-8',
    lg: 'p-8 sm:p-10',
  };

  return (
    <div
      className={`bg-studio-surface text-editorial rounded-sm ${
        border ? 'border border-studio-border' : ''
      } ${
        hoverEffect ? 'hover:border-editorial transition-colors duration-200' : ''
      } ${paddingStyles[padding]} ${className}`}
    >
      {children}
    </div>
  );
};
