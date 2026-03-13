import React from 'react';
import { cn } from '../../utils/cn';
import type { SelectProps } from './Select.types';

const sizeStyles: Record<string, string> = {
  sm: 'h-9 px-3 text-[0.8125rem]',
  md: 'h-11 px-4 text-[0.9375rem]',
};

export const Select = React.forwardRef<HTMLSelectElement, SelectProps>(
  (
    {
      label,
      error,
      options,
      placeholder,
      size = 'md',
      className,
      id,
      ...props
    },
    ref
  ) => {
    const selectId = id || (label ? label.toLowerCase().replace(/\s+/g, '-') : undefined);

    return (
      <div className={cn('flex flex-col gap-1.5', className)}>
        {label && (
          <label
            htmlFor={selectId}
            className="vista-text-body-sm font-medium text-[var(--foreground)]"
          >
            {label}
          </label>
        )}
        <div className="relative">
          <select
            ref={ref}
            id={selectId}
            className={cn(
              'w-full rounded-[4px] border bg-[var(--surface-hover)] text-[var(--foreground)]',
              'appearance-none cursor-pointer',
              'transition-[border-color,box-shadow] duration-200',
              'focus:outline-none focus:border-[var(--ultra-orange)] focus:shadow-[0_0_0_3px_rgba(255,82,51,0.1)]',
              error
                ? 'border-red-500 focus:border-red-500 focus:shadow-[0_0_0_3px_rgba(239,68,68,0.1)]'
                : 'border-[var(--border)]',
              sizeStyles[size],
              'pr-10'
            )}
            aria-invalid={error ? true : undefined}
            aria-describedby={error ? `${selectId}-error` : undefined}
            {...props}
          >
            {placeholder && (
              <option value="" disabled>
                {placeholder}
              </option>
            )}
            {options.map((opt) => (
              <option key={opt.value} value={opt.value}>
                {opt.label}
              </option>
            ))}
          </select>
          {/* Chevron */}
          <svg
            width="16"
            height="16"
            className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-[var(--muted)] pointer-events-none"
            viewBox="0 0 16 16"
            fill="none"
          >
            <path d="M4 6l4 4 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
        {error && (
          <p id={`${selectId}-error`} className="text-[0.75rem] text-red-500" role="alert">
            {error}
          </p>
        )}
      </div>
    );
  }
);

Select.displayName = 'Select';
