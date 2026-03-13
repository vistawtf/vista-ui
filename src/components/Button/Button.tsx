import React from 'react';
import { cn } from '../../utils/cn';
import type { ButtonProps } from './Button.types';

const variantStyles: Record<string, string> = {
  primary: [
    'bg-[var(--ultra-orange)] text-white',
    'hover:bg-[var(--medium-orange)] hover:-translate-y-[1px]',
    'hover:shadow-[0_4px_12px_rgba(255,82,51,0.25)]',
    'active:translate-y-0 active:shadow-none',
  ].join(' '),
  secondary: [
    'bg-transparent border border-[var(--border)] text-[var(--foreground)]',
    'hover:bg-[var(--surface-hover)] hover:border-[var(--border-hover)]',
    'active:bg-[var(--surface)]',
  ].join(' '),
  ghost: [
    'bg-transparent text-[var(--foreground)]',
    'hover:bg-[var(--surface-hover)]',
    'active:bg-[var(--surface)]',
  ].join(' '),
};

const sizeStyles: Record<string, string> = {
  sm: 'px-4 py-2 text-[0.8125rem] gap-1.5',
  md: 'px-6 py-2.5 text-[0.875rem] gap-2',
  lg: 'px-8 py-3.5 text-[0.9375rem] gap-2.5',
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
      'font-medium tracking-[0.02em]',
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
