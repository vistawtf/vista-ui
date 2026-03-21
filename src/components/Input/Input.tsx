import React from 'react';
import { cn } from '../../utils/cn';
import type { InputProps } from './Input.types';

const sizeStyles: Record<string, string> = {
  sm: 'h-9 px-3 text-[0.8125rem]',
  md: 'h-11 px-4 text-[0.9375rem]',
};

export const Input = React.forwardRef<HTMLInputElement, InputProps>(
  (
    {
      label,
      error,
      hint,
      size = 'md',
      leftIcon,
      rightIcon,
      className,
      id,
      ...props
    },
    ref
  ) => {
    const inputId = id || (label ? label.toLowerCase().replace(/\s+/g, '-') : undefined);

    return (
      <div className={cn('flex flex-col gap-1.5', className)}>
        {label && (
          <label
            htmlFor={inputId}
            className="vista-text-body-sm text-[var(--text-primary)]"
          >
            {label}
          </label>
        )}
        <div className="relative">
          {leftIcon && (
            <span className="absolute left-3 top-1/2 -translate-y-1/2 text-[var(--text-muted)] [&>svg]:w-4 [&>svg]:h-4">
              {leftIcon}
            </span>
          )}
          <input
            ref={ref}
            id={inputId}
            className={cn(
              'w-full rounded-[3px] border bg-[var(--card-bg)] text-[var(--text-primary)]',
              'placeholder:text-[var(--text-muted)]',
              'transition-[border-color,box-shadow] duration-200',
              'focus:outline-none focus:border-[var(--ultra-orange)] focus:shadow-[0_0_0_3px_rgba(255,82,51,0.1)]',
              error
                ? 'border-red-500 focus:border-red-500 focus:shadow-[0_0_0_3px_rgba(239,68,68,0.1)]'
                : 'border-[var(--border)]',
              sizeStyles[size],
              leftIcon && 'pl-10',
              rightIcon && 'pr-10'
            )}
            aria-invalid={error ? true : undefined}
            aria-describedby={error ? `${inputId}-error` : hint ? `${inputId}-hint` : undefined}
            {...props}
          />
          {rightIcon && (
            <span className="absolute right-3 top-1/2 -translate-y-1/2 text-[var(--text-muted)] [&>svg]:w-4 [&>svg]:h-4">
              {rightIcon}
            </span>
          )}
        </div>
        {error && (
          <p id={`${inputId}-error`} className="text-[0.75rem] text-red-500" role="alert">
            {error}
          </p>
        )}
        {hint && !error && (
          <p id={`${inputId}-hint`} className="text-[0.75rem] text-[var(--text-muted)]">
            {hint}
          </p>
        )}
      </div>
    );
  }
);

Input.displayName = 'Input';
