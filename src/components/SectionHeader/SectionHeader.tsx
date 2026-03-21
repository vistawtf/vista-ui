import React from 'react';
import { cn } from '../../utils/cn';
import type { SectionHeaderProps } from './SectionHeader.types';

export function SectionHeader({ number, label, className }: SectionHeaderProps) {
  return (
    <div className={cn('flex items-center gap-4', className)}>
      {number && (
        <span className="vista-text-label text-[var(--text-muted)] font-[var(--font-mono)]">
          {number}
        </span>
      )}
      <div className="flex-1 h-px bg-[var(--border)]" />
      <span className="vista-text-label text-[var(--text-muted)]">{label}</span>
    </div>
  );
}
