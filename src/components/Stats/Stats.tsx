import React from 'react';
import { cn } from '../../utils/cn';
import type { StatsProps, StatsItemProps } from './Stats.types';

function Item({ value, label, className }: StatsItemProps) {
  return (
    <div className={cn('text-center', className)}>
      <div className="text-[clamp(2rem,4.5vw,3.25rem)] font-medium leading-[1.1] tracking-[-0.03em] text-[var(--foreground)] tabular-nums">
        {value}
      </div>
      <div className="mt-2 text-[0.875rem] text-[var(--muted)]">{label}</div>
    </div>
  );
}

function StatsRoot({ className, children }: StatsProps) {
  return (
    <section className={cn('vista-section bg-[var(--background)]', className)}>
      <div className="vista-container">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
          {children}
        </div>
      </div>
    </section>
  );
}

export const Stats = Object.assign(StatsRoot, {
  Item,
});
