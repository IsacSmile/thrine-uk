import React from 'react';
import { Link } from 'react-router-dom';

interface ButtonProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost' | 'dark';
  size?: 'sm' | 'md' | 'lg';
  href?: string;
  onClick?: () => void;
  fullWidth?: boolean;
  className?: string;
  type?: 'button' | 'submit' | 'reset';
  icon?: React.ReactNode;
  disabled?: boolean;
}

export const Button: React.FC<ButtonProps> = ({
  children,
  variant = 'primary',
  size = 'md',
  href,
  onClick,
  fullWidth = false,
  className = '',
  type = 'button',
  icon,
  disabled = false,
}) => {
  const baseStyles = 'inline-flex items-center justify-center font-medium transition-all duration-200 focus:outline-none focus:ring-1 focus:ring-editorial disabled:opacity-50 disabled:pointer-events-none rounded-sm tracking-wide';

  const sizeStyles = {
    sm: 'text-xs px-3.5 py-2 gap-1.5',
    md: 'text-xs sm:text-sm px-5 py-2.5 gap-2',
    lg: 'text-sm sm:text-base px-6 py-3 gap-2.5',
  };

  const variantStyles = {
    primary: 'bg-dark text-paper hover:bg-terracotta transition-colors shadow-none border border-transparent',
    secondary: 'bg-transparent text-editorial border border-studio-border hover:bg-studio-surface hover:border-editorial transition-colors',
    outline: 'bg-transparent text-editorial border border-studio-border hover:bg-studio-surface transition-colors',
    ghost: 'bg-transparent text-editorial hover:bg-studio-surface transition-colors',
    dark: 'bg-paper text-dark hover:bg-terracotta hover:text-paper transition-colors',
  };

  const combinedClasses = `${baseStyles} ${sizeStyles[size]} ${variantStyles[variant]} ${
    fullWidth ? 'w-full' : ''
  } ${className}`;

  if (href) {
    if (href.startsWith('http') || href.startsWith('mailto:')) {
      return (
        <a
          href={href}
          target={href.startsWith('http') ? '_blank' : undefined}
          rel={href.startsWith('http') ? 'noreferrer' : undefined}
          className={combinedClasses}
        >
          <span>{children}</span>
          {icon && <span className="shrink-0">{icon}</span>}
        </a>
      );
    }

    return (
      <Link to={href} className={combinedClasses}>
        <span>{children}</span>
        {icon && <span className="shrink-0">{icon}</span>}
      </Link>
    );
  }

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={combinedClasses}
    >
      <span>{children}</span>
      {icon && <span className="shrink-0">{icon}</span>}
    </button>
  );
};
