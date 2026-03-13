import React from 'react';
import { cn } from '../../utils/cn';
import type { GridLinesProps, SectionDividerProps } from './Decorative.types';

export function GridLines({ className }: GridLinesProps) {
  return (
    <div
      className={cn('absolute inset-0 max-w-[1200px] mx-auto pointer-events-none', className)}
      aria-hidden="true"
    >
      <div className="absolute left-0 top-0 bottom-0 w-px bg-[var(--foreground)]/[0.06] max-sm:opacity-0" />
      <div className="absolute right-0 top-0 bottom-0 w-px bg-[var(--foreground)]/[0.06] max-sm:opacity-0" />
    </div>
  );
}

export function SectionDivider({ dark = false, className }: SectionDividerProps) {
  return (
    <div
      className={cn('relative z-20 w-full', className)}
      aria-hidden="true"
    >
      <div
        className="absolute left-0 right-0 h-px"
        style={{
          background: dark
            ? 'rgba(255, 255, 255, 0.06)'
            : 'rgba(0, 0, 0, 0.06)',
        }}
      />
    </div>
  );
}
