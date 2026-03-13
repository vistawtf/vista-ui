import React from 'react';
import { cn } from '../../utils/cn';
import type { FeaturesGridProps, FeaturesGridItemProps } from './FeaturesGrid.types';

const colsMap: Record<number, string> = {
  2: 'md:grid-cols-2',
  3: 'md:grid-cols-2 lg:grid-cols-3',
  4: 'md:grid-cols-2 lg:grid-cols-4',
};

function Item({ number, icon, title, description, href, className }: FeaturesGridItemProps) {
  const content = (
    <div
      className={cn(
        'relative p-8 border border-[var(--border)] rounded-[2px] bg-[var(--background)]',
        'transition-all duration-300 [transition-timing-function:cubic-bezier(0.16,1,0.3,1)]',
        'hover:-translate-y-[4px] hover:shadow-[0_8px_24px_rgba(0,0,0,0.06)] hover:border-[var(--ultra-orange)]',
        className
      )}
    >
      {number && (
        <span className="absolute top-8 right-8 text-5xl font-semibold text-[var(--foreground)]/[0.08] font-mono">
          {number}
        </span>
      )}
      {icon && (
        <div className="text-[var(--ultra-orange)] mb-4 [&>svg]:w-12 [&>svg]:h-12 [&>svg]:stroke-[1.5]">
          {icon}
        </div>
      )}
      <h3 className="text-[1.125rem] font-medium text-[var(--foreground)] mb-2">{title}</h3>
      <p className="text-[0.875rem] leading-[1.6] text-[var(--muted)]">{description}</p>
      {href && (
        <span className="inline-block mt-4 text-[13px] font-mono font-medium uppercase tracking-[0.05em] text-[var(--muted)] hover:text-[var(--ultra-orange)] transition-colors">
          Learn more →
        </span>
      )}
    </div>
  );

  if (href) {
    return (
      <a href={href} className="block text-inherit no-underline">
        {content}
      </a>
    );
  }

  return content;
}

function FeaturesGridRoot({ title, columns = 3, className, children }: FeaturesGridProps) {
  return (
    <section className={cn('vista-section bg-[var(--background)]', className)}>
      <div className="vista-container">
        {title && (
          <h2 className="text-[36px] md:text-[48px] font-medium leading-tight text-[var(--foreground)] lowercase mb-12">
            {title}
          </h2>
        )}
        <div className={cn('grid grid-cols-1 gap-6', colsMap[columns])}>
          {children}
        </div>
      </div>
    </section>
  );
}

export const FeaturesGrid = Object.assign(FeaturesGridRoot, {
  Item,
});
