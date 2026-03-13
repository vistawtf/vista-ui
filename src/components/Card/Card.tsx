import React from 'react';
import { cn } from '../../utils/cn';
import type {
  CardProps,
  ServiceCardProps,
  ArticleCardProps,
  ValueCardProps,
  PricingCardProps,
} from './Card.types';

/* ────────────── Service Card ────────────── */

function ServiceCard({ number, icon, title, description, href, className }: ServiceCardProps) {
  const content = (
    <div
      className={cn(
        'relative flex flex-col h-full p-[clamp(24px,3vw,32px)]',
        'border border-[var(--border)] rounded-[10px] bg-[var(--background)]',
        'transition-all duration-[350ms] [transition-timing-function:cubic-bezier(0.16,1,0.3,1)]',
        'hover:border-[var(--border-hover)] hover:bg-[var(--surface)]',
        'hover:-translate-y-[3px] hover:shadow-[0_4px_6px_-1px_rgba(0,0,0,0.04),0_10px_20px_-2px_rgba(0,0,0,0.06)]',
        className
      )}
    >
      {number && (
        <span className="absolute top-8 right-8 text-5xl font-semibold text-[var(--foreground)]/[0.08] font-mono">
          {number}
        </span>
      )}
      {icon && <div className="text-[var(--ultra-orange)] mb-4 [&>svg]:w-12 [&>svg]:h-12">{icon}</div>}
      <h3 className="text-[32px] font-medium text-[var(--foreground)] mb-3">{title}</h3>
      <p className="text-lg text-[var(--muted)] leading-relaxed mb-4 flex-1">{description}</p>
      {href && (
        <span className="inline-block text-[13px] font-mono font-medium uppercase tracking-[0.05em] text-[var(--muted)] hover:text-[var(--ultra-orange)] transition-colors">
          Learn more →
        </span>
      )}
    </div>
  );

  if (href) {
    return (
      <a href={href} className="block text-inherit no-underline h-full">
        {content}
      </a>
    );
  }

  return content;
}

/* ────────────── Article Card ────────────── */

function ArticleCard({ image, category, date, title, excerpt, href, className }: ArticleCardProps) {
  const content = (
    <article
      className={cn(
        'flex flex-col h-full p-[clamp(24px,2.5vw,32px)]',
        'border border-[var(--border)] rounded-[10px] bg-[var(--background)]',
        'transition-all duration-[350ms] [transition-timing-function:cubic-bezier(0.16,1,0.3,1)]',
        'hover:border-[var(--border-hover)] hover:bg-[var(--surface)]',
        'hover:-translate-y-[3px] hover:shadow-[0_4px_6px_-1px_rgba(0,0,0,0.04),0_10px_20px_-2px_rgba(0,0,0,0.06)]',
        className
      )}
    >
      {image && (
        <div className="w-full aspect-video rounded-[6px] overflow-hidden mb-4 bg-[var(--surface-hover)]">
          <img src={image} alt={title} className="w-full h-full object-cover" />
        </div>
      )}
      <div className="flex items-center gap-2 mb-3">
        {category && (
          <span className="text-[0.625rem] font-semibold tracking-[0.08em] uppercase text-[var(--ultra-orange)] px-2 py-[3px] border border-[rgba(255,82,51,0.2)] rounded-[4px] bg-[rgba(255,82,51,0.04)]">
            {category}
          </span>
        )}
        {date && (
          <span className="text-[0.75rem] text-[var(--muted-light)]">{date}</span>
        )}
      </div>
      <h3 className="text-[1.0625rem] font-medium leading-[1.35] text-[var(--foreground)] mb-2.5">{title}</h3>
      {excerpt && (
        <p className="text-[0.8125rem] leading-[1.6] text-[var(--muted)] flex-1">{excerpt}</p>
      )}
      {href && (
        <span className="inline-flex items-center mt-4 text-[0.8125rem] font-medium text-[var(--ultra-orange)]">
          Read more →
        </span>
      )}
    </article>
  );

  if (href) {
    return (
      <a href={href} className="block text-inherit no-underline h-full">
        {content}
      </a>
    );
  }

  return content;
}

/* ────────────── Value Card ────────────── */

function ValueCard({ title, description, className }: ValueCardProps) {
  return (
    <div
      className={cn(
        'p-[clamp(24px,3vw,32px)]',
        'border border-[var(--border)] rounded-[10px] bg-[var(--background)]',
        'transition-all duration-300 [transition-timing-function:cubic-bezier(0.16,1,0.3,1)]',
        'hover:border-[var(--border-hover)] hover:bg-[var(--surface)]',
        className
      )}
    >
      <h3 className="vista-text-h3 text-[var(--foreground)] mb-2">{title}</h3>
      <p className="vista-text-body-sm text-[var(--muted)] leading-relaxed">{description}</p>
    </div>
  );
}

/* ────────────── Pricing Card ────────────── */

function PricingCard({
  plan,
  price,
  period,
  features,
  ctaText = 'Get started',
  ctaHref = '#',
  highlighted = false,
  className,
}: PricingCardProps) {
  return (
    <div
      className={cn(
        'flex flex-col p-8 rounded-[10px] border',
        'transition-all duration-300 [transition-timing-function:cubic-bezier(0.16,1,0.3,1)]',
        highlighted
          ? 'border-[var(--ultra-orange)] bg-[var(--background)] shadow-[0_0_0_1px_var(--ultra-orange),0_8px_24px_rgba(255,82,51,0.12)]'
          : 'border-[var(--border)] bg-[var(--background)] hover:border-[var(--border-hover)]',
        className
      )}
    >
      <span className="vista-text-label text-[var(--muted)] mb-3">{plan}</span>
      <div className="flex items-baseline gap-1 mb-6">
        <span className="text-[2rem] md:text-[2.5rem] font-medium text-[var(--foreground)] leading-none tracking-tight">{price}</span>
        {period && <span className="text-[var(--muted)] text-sm">{period}</span>}
      </div>
      <ul className="flex flex-col gap-3 mb-8 flex-1">
        {features.map((feature, i) => (
          <li key={i} className="flex items-start gap-2.5 text-[0.875rem] text-[var(--foreground)]">
            <svg width="16" height="16" className="w-4 h-4 mt-0.5 text-[var(--ultra-orange)] shrink-0" viewBox="0 0 16 16" fill="none">
              <path d="M3 8l3.5 3.5L13 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            {feature}
          </li>
        ))}
      </ul>
      <a
        href={ctaHref}
        className={cn(
          'inline-flex items-center justify-center px-6 py-3 rounded-[3px] text-[0.875rem] font-medium tracking-[0.02em] transition-all duration-200 text-center',
          highlighted
            ? 'bg-[var(--ultra-orange)] text-white hover:bg-[var(--medium-orange)] hover:-translate-y-[1px] hover:shadow-[0_4px_12px_rgba(255,82,51,0.25)]'
            : 'border border-[var(--border)] text-[var(--foreground)] hover:border-[var(--border-hover)] hover:bg-[var(--surface-hover)]'
        )}
      >
        {ctaText}
      </a>
    </div>
  );
}

/* ────────────── main component ────────────── */

export function Card(props: CardProps) {
  switch (props.variant) {
    case 'service':
      return <ServiceCard {...props} />;
    case 'article':
      return <ArticleCard {...props} />;
    case 'value':
      return <ValueCard {...props} />;
    case 'pricing':
      return <PricingCard {...props} />;
    default:
      return null;
  }
}
