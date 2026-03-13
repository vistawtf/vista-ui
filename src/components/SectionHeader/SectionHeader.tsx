import React from 'react';
import { cn } from '../../utils/cn';
import type { SectionHeaderProps } from './SectionHeader.types';

export function SectionHeader({ number, label, className }: SectionHeaderProps) {
  return (
    <div className={cn('flex items-center gap-4 mb-[clamp(32px,5vh,48px)]', className)}>
      {number && (
        <span className="text-[0.6875rem] font-mono font-medium tracking-[0.08em] text-[var(--muted-light)]">
          {number}
        </span>
      )}
      <span className="vista-text-label text-[var(--muted)]">{label}</span>
    </div>
  );
}
