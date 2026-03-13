import React from 'react';
import { cn } from '../../utils/cn';
import type { BadgeProps } from './Badge.types';

const variantStyles: Record<string, string> = {
  default: 'bg-[var(--surface-hover)] text-[var(--foreground)] border border-[var(--border)] font-medium tracking-[0.02em]',
  accent: [
    'bg-[rgba(255,82,51,0.04)] dark:bg-[rgba(255,82,51,0.08)]',
    'text-[var(--ultra-orange)]',
    'border border-[rgba(255,82,51,0.2)] dark:border-[rgba(255,82,51,0.15)]',
    'font-semibold tracking-[0.08em] uppercase',
  ].join(' '),
  outline: 'bg-transparent text-[var(--foreground)] border border-[var(--border)] font-medium tracking-[0.02em]',
};

const sizeStyles: Record<string, string> = {
  sm: 'px-2 py-[2px] text-[0.625rem]',
  md: 'px-2.5 py-[3px] text-[0.625rem]',
};

export function Badge({
  variant = 'default',
  size = 'md',
  className,
  children,
}: BadgeProps) {
  return (
    <span
      className={cn(
        'inline-flex items-center rounded-[4px] whitespace-nowrap',
        variantStyles[variant],
        sizeStyles[size],
        className
      )}
    >
      {children}
    </span>
  );
}
