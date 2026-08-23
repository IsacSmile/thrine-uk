import React from 'react';

interface BadgeProps {
  children: React.ReactNode;
  variant?: 'default' | 'brand' | 'accent' | 'outline' | 'dark';
  size?: 'sm' | 'md';
  className?: string;
}

export const Badge: React.FC<BadgeProps> = ({
  children,
  variant = 'default',
  size = 'md',
  className = '',
}) => {
  const baseStyles = 'inline-flex items-center font-mono uppercase tracking-widest rounded-sm';

  const sizeStyles = {
    sm: 'text-[10px] px-2 py-0.5',
    md: 'text-xs px-2.5 py-1',
  };

  const variantStyles = {
    default: 'bg-studio-surface text-editorial-muted border border-studio-border',
    brand: 'bg-studio-surface text-terracotta border border-studio-border font-semibold',
    accent: 'bg-terracotta/10 text-terracotta border border-terracotta/20 font-semibold',
    outline: 'bg-transparent text-editorial-muted border border-studio-border',
    dark: 'bg-dark text-paper border border-dark-border',
  };

  return (
    <span className={`${baseStyles} ${sizeStyles[size]} ${variantStyles[variant]} ${className}`}>
      {children}
    </span>
  );
};
