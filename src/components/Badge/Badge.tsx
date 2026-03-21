import React from 'react';
import { cn } from '../../utils/cn';
import type { BadgeProps } from './Badge.types';

const variantStyles: Record<string, string> = {
  default: 'bg-[var(--card-bg)] text-[var(--text-primary)] border border-[var(--border)] tracking-[0.06em] uppercase',
  accent: [
    'bg-[rgba(255,82,51,0.04)]',
    'text-[var(--ultra-orange)]',
    'border border-[rgba(255,82,51,0.2)]',
    'tracking-[0.08em] uppercase',
  ].join(' '),
  outline: 'bg-transparent text-[var(--text-primary)] border border-[var(--border)] tracking-[0.06em] uppercase',
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
        'inline-flex items-center rounded-[3px] whitespace-nowrap font-[var(--font-mono)]',
        variantStyles[variant],
        sizeStyles[size],
        className
      )}
    >
      {children}
    </span>
  );
}
