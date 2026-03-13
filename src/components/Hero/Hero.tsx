import React from 'react';
import { cn } from '../../utils/cn';
import { Button } from '../Button';
import type {
  HeroProps,
  HeroKickerProps,
  HeroTitleProps,
  HeroSubtitleProps,
  HeroActionsProps,
  HeroTrustedByProps,
} from './Hero.types';

/* ────────────── sub-components ────────────── */

function Kicker({ className, children }: HeroKickerProps) {
  return (
    <span
      className={cn(
        'vista-text-label text-[var(--muted)] mb-4 block',
        className
      )}
    >
      {children}
    </span>
  );
}

function Title({ className, children }: HeroTitleProps) {
  return (
    <h1
      className={cn(
        'vista-text-display text-[var(--foreground)] max-w-[640px]',
        className
      )}
    >
      {children}
    </h1>
  );
}

function Subtitle({ className, children }: HeroSubtitleProps) {
  return (
    <p
      className={cn(
        'text-[16px] md:text-[20px] text-[var(--muted)] leading-[1.6] max-w-[480px] md:max-w-[540px] mt-2',
        className
      )}
    >
      {children}
    </p>
  );
}

function Actions({ className, children }: HeroActionsProps) {
  return (
    <div className={cn('flex flex-col sm:flex-row items-start sm:items-center gap-4 mt-9', className)}>
      {children}
    </div>
  );
}

function TrustedBy({ logos, label = 'Trusted by', className }: HeroTrustedByProps) {
  return (
    <div className={cn('mt-10 md:mt-12', className)}>
      <p className="text-[10px] md:text-[11px] font-semibold uppercase tracking-[0.12em] text-[var(--muted-light)] mb-2 md:mb-3 font-mono">
        {label}
      </p>
      <div className="flex gap-6 md:gap-8 items-center">
        {logos.map((logo) => {
          const img = (
            <img
              src={logo.src}
              alt={logo.alt}
              width={logo.width}
              height={logo.height}
              className="h-5 md:h-6 w-auto opacity-50 grayscale saturate-0 transition-all duration-[240ms] hover:opacity-100 hover:grayscale-0 hover:saturate-100 hover:-translate-y-[1px]"
            />
          );

          if (logo.href) {
            return (
              <a
                key={logo.alt}
                href={logo.href}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center"
                aria-label={logo.alt}
              >
                {img}
              </a>
            );
          }

          return (
            <span key={logo.alt} className="inline-flex items-center">
              {img}
            </span>
          );
        })}
      </div>
    </div>
  );
}

/* ────────────── main component ────────────── */

function HeroRoot({
  kicker,
  title,
  subtitle,
  ctaText,
  ctaHref,
  ctaSecondaryText,
  ctaSecondaryHref,
  className,
  children,
}: HeroProps) {
  // Compound API: if children are provided, render them
  const hasChildren = React.Children.count(children) > 0;

  return (
    <section
      className={cn(
        'relative flex items-start overflow-hidden bg-[var(--background)]',
        className
      )}
    >
      <div className="relative z-10 w-full vista-container pt-[100px] md:pt-[120px] pb-[80px] md:pb-[100px]">
        <div className="max-w-[560px] md:max-w-[640px]">
          {hasChildren ? (
            children
          ) : (
            <>
              {kicker && <Kicker>{kicker}</Kicker>}
              {title && <Title>{title}</Title>}
              {subtitle && <Subtitle>{subtitle}</Subtitle>}
              {(ctaText || ctaSecondaryText) && (
                <Actions>
                  {ctaText && (
                    <Button
                      variant="primary"
                      asChild
                    >
                      <a href={ctaHref || '#'}>{ctaText}</a>
                    </Button>
                  )}
                  {ctaSecondaryText && (
                    <Button
                      variant="secondary"
                      asChild
                    >
                      <a href={ctaSecondaryHref || '#'}>{ctaSecondaryText}</a>
                    </Button>
                  )}
                </Actions>
              )}
            </>
          )}
        </div>
      </div>
    </section>
  );
}

/* ────────────── compound export ────────────── */

export const Hero = Object.assign(HeroRoot, {
  Kicker,
  Title,
  Subtitle,
  Actions,
  TrustedBy,
});
