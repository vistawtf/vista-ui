import React from 'react';
import { cn } from '../../utils/cn';
import type { TextareaProps } from './Textarea.types';

const resizeMap: Record<string, string> = {
  none: 'resize-none',
  vertical: 'resize-y',
  both: 'resize',
};

export const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
  (
    {
      label,
      error,
      hint,
      rows = 4,
      resize = 'vertical',
      className,
      id,
      ...props
    },
    ref
  ) => {
    const textareaId = id || (label ? label.toLowerCase().replace(/\s+/g, '-') : undefined);

    return (
      <div className={cn('flex flex-col gap-1.5', className)}>
        {label && (
          <label
            htmlFor={textareaId}
            className="vista-text-body-sm font-medium text-[var(--foreground)]"
          >
            {label}
          </label>
        )}
        <textarea
          ref={ref}
          id={textareaId}
          rows={rows}
          className={cn(
            'w-full rounded-[4px] border bg-[var(--surface-hover)] text-[var(--foreground)]',
            'px-4 py-3 text-[0.9375rem]',
            'placeholder:text-[var(--muted)]',
            'transition-[border-color,box-shadow] duration-200',
            'focus:outline-none focus:border-[var(--ultra-orange)] focus:shadow-[0_0_0_3px_rgba(255,82,51,0.1)]',
            error
              ? 'border-red-500 focus:border-red-500 focus:shadow-[0_0_0_3px_rgba(239,68,68,0.1)]'
              : 'border-[var(--border)]',
            resizeMap[resize]
          )}
          aria-invalid={error ? true : undefined}
          aria-describedby={error ? `${textareaId}-error` : hint ? `${textareaId}-hint` : undefined}
          {...props}
        />
        {error && (
          <p id={`${textareaId}-error`} className="text-[0.75rem] text-red-500" role="alert">
            {error}
          </p>
        )}
        {hint && !error && (
          <p id={`${textareaId}-hint`} className="text-[0.75rem] text-[var(--muted-light)]">
            {hint}
          </p>
        )}
      </div>
    );
  }
);

Textarea.displayName = 'Textarea';
