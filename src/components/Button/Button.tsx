import React from 'react';
import { cn } from '../../utils/cn';
import type { ButtonProps } from './Button.types';

const variantStyles: Record<string, string> = {
  primary: [
    'bg-[var(--ultra-orange)] text-white',
    'hover:bg-[var(--medium-orange)]',
    'active:translate-y-0',
  ].join(' '),
  secondary: [
    'bg-transparent border border-[var(--border)] text-[var(--text-primary)]',
    'hover:bg-[var(--card-bg)] hover:border-[var(--border-hover)]',
    'active:bg-[var(--card-bg)]',
  ].join(' '),
  ghost: [
    'bg-transparent text-[var(--text-primary)]',
    'hover:bg-[var(--card-bg)]',
    'active:bg-[var(--card-bg)]',
  ].join(' '),
};

const sizeStyles: Record<string, string> = {
  sm: 'px-4 py-2 text-[0.75rem] gap-1.5',
  md: 'px-6 py-2.5 text-[0.8125rem] gap-2',
  lg: 'px-8 py-3.5 text-[0.875rem] gap-2.5',
};

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      variant = 'primary',
      size = 'md',
      disabled = false,
      loading = false,
      icon,
      iconRight,
      asChild = false,
      className,
      children,
      ...props
    },
    ref
  ) => {
    const isDisabled = disabled || loading;

    const baseStyles = [
      'inline-flex items-center justify-center',
      'font-[var(--font-mono)] tracking-[0.06em] uppercase',
      'rounded-[3px] cursor-pointer',
      'transition-all duration-200',
      'select-none whitespace-nowrap',
      'focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--ultra-orange)]',
    ].join(' ');

    const disabledStyles = isDisabled
      ? 'opacity-50 cursor-not-allowed pointer-events-none'
      : '';

    if (asChild && React.isValidElement(children)) {
      return React.cloneElement(children as React.ReactElement<Record<string, unknown>>, {
        className: cn(
          baseStyles,
          variantStyles[variant],
          sizeStyles[size],
          disabledStyles,
          className,
          (children as React.ReactElement<{ className?: string }>).props.className
        ),
        ref,
      });
    }

    return (
      <button
        ref={ref}
        disabled={isDisabled}
        className={cn(
          baseStyles,
          variantStyles[variant],
          sizeStyles[size],
          disabledStyles,
          className
        )}
        {...props}
      >
        {loading && <span className="vista-spinner" aria-hidden="true" />}
        {!loading && icon && <span className="shrink-0">{icon}</span>}
        {children}
        {iconRight && <span className="shrink-0">{iconRight}</span>}
      </button>
    );
  }
);

Button.displayName = 'Button';
