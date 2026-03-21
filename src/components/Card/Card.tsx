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
        'border border-[var(--border)] rounded-[3px] bg-[var(--background)]',
        'transition-all duration-[350ms] [transition-timing-function:cubic-bezier(0.16,1,0.3,1)]',
        'hover:border-[var(--border-hover)] hover:bg-[var(--card-bg)]',
        className
      )}
    >
      {number && (
        <span className="absolute top-8 right-8 text-5xl text-[var(--text-primary)]/[0.06] font-[var(--font-mono)]">
          {number}
        </span>
      )}
      {icon && <div className="text-[var(--ultra-orange)] mb-4 [&>svg]:w-12 [&>svg]:h-12">{icon}</div>}
      <h3 className="text-[32px] font-medium text-[var(--text-primary)] mb-3">{title}</h3>
      <p className="text-lg text-[var(--text-muted)] leading-relaxed mb-4 flex-1">{description}</p>
      {href && (
        <span className="inline-block text-[13px] font-[var(--font-mono)] uppercase tracking-[0.06em] text-[var(--text-muted)] hover:text-[var(--ultra-orange)] transition-colors">
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
        'border border-[var(--border)] rounded-[3px] bg-[var(--background)]',
        'transition-all duration-[350ms] [transition-timing-function:cubic-bezier(0.16,1,0.3,1)]',
        'hover:border-[var(--border-hover)] hover:bg-[var(--card-bg)]',
        className
      )}
    >
      {image && (
        <div className="w-full aspect-video rounded-[3px] overflow-hidden mb-4 bg-[var(--card-bg)]">
          <img src={image} alt={title} className="w-full h-full object-cover" />
        </div>
      )}
      <div className="flex items-center gap-2 mb-3">
        {category && (
          <span className="text-[0.625rem] font-[var(--font-mono)] tracking-[0.08em] uppercase text-[var(--ultra-orange)] px-2 py-[3px] border border-[rgba(255,82,51,0.2)] rounded-[3px] bg-[rgba(255,82,51,0.04)]">
            {category}
          </span>
        )}
        {date && (
          <span className="text-[0.75rem] text-[var(--text-muted)]">{date}</span>
        )}
      </div>
      <h3 className="text-[1.0625rem] font-medium leading-[1.35] text-[var(--text-primary)] mb-2.5">{title}</h3>
      {excerpt && (
        <p className="text-[0.8125rem] leading-[1.6] text-[var(--text-muted)] flex-1">{excerpt}</p>
      )}
      {href && (
        <span className="inline-flex items-center mt-4 text-[0.8125rem] font-[var(--font-mono)] uppercase tracking-[0.04em] text-[var(--text-muted)] group-hover:text-[var(--ultra-orange)] transition-colors">
          Read more →
        </span>
      )}
    </article>
  );

  if (href) {
    return (
      <a href={href} className="block text-inherit no-underline h-full group">
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
        'border border-[var(--border)] rounded-[3px] bg-[var(--background)]',
        'transition-all duration-300 [transition-timing-function:cubic-bezier(0.16,1,0.3,1)]',
        'hover:border-[var(--border-hover)] hover:bg-[var(--card-bg)]',
        className
      )}
    >
      <h3 className="vista-text-h3 text-[var(--text-primary)] mb-2">{title}</h3>
      <p className="vista-text-body-sm text-[var(--text-muted)] leading-relaxed">{description}</p>
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
        'flex flex-col p-8 rounded-[3px] border',
        'transition-all duration-300 [transition-timing-function:cubic-bezier(0.16,1,0.3,1)]',
        highlighted
          ? 'border-[var(--ultra-orange)] bg-[var(--background)]'
          : 'border-[var(--border)] bg-[var(--background)] hover:border-[var(--border-hover)]',
        className
      )}
    >
      <span className="vista-text-label text-[var(--text-muted)] mb-3">{plan}</span>
      <div className="flex items-baseline gap-1 mb-6">
        <span className="text-[2rem] md:text-[2.5rem] font-medium text-[var(--text-primary)] leading-none tracking-tight">{price}</span>
        {period && <span className="text-[var(--text-muted)] text-sm">{period}</span>}
      </div>
      <ul className="flex flex-col gap-3 mb-8 flex-1">
        {features.map((feature, i) => (
          <li key={i} className="flex items-start gap-2.5 text-[0.875rem] text-[var(--text-primary)]">
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
          'inline-flex items-center justify-center px-6 py-3 rounded-[3px] text-[0.8125rem] font-[var(--font-mono)] uppercase tracking-[0.06em] transition-all duration-200 text-center',
          highlighted
            ? 'bg-[var(--ultra-orange)] text-white hover:bg-[var(--medium-orange)]'
            : 'border border-[var(--border)] text-[var(--text-primary)] hover:border-[var(--border-hover)] hover:bg-[var(--card-bg)]'
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
