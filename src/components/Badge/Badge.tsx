import React from 'react';
import { cn } from '../../utils/cn';
import type { BadgeProps } from './Badge.types';

const variantStyles: Record<string, string> = {
  default: 'bg-[var(--surface-hover)] text-[var(--foreground)] border border-[var(--border)]',
  accent: 'bg-[var(--ultra-orange)]/10 text-[var(--ultra-orange)] border border-[var(--ultra-orange)]/20',
  outline: 'bg-transparent text-[var(--foreground)] border border-[var(--border)]',
};

const sizeStyles: Record<string, string> = {
  sm: 'px-2 py-[2px] text-[0.625rem]',
  md: 'px-2.5 py-[3px] text-[0.75rem]',
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
        'inline-flex items-center font-medium tracking-[0.02em] rounded-[4px] whitespace-nowrap',
        variantStyles[variant],
        sizeStyles[size],
        className
      )}
    >
      {children}
    </span>
  );
}
