import React from 'react';
import { cn } from '../../utils/cn';
import type {
  FooterProps,
  FooterCTAProps,
  FooterColumnsProps,
  FooterColumnProps,
  FooterBottomProps,
} from './Footer.types';

/* ────────────── sub-components ────────────── */

function CTA({ title, ctaText, ctaHref, secondaryText, secondaryHref, className }: FooterCTAProps) {
  return (
    <div className={cn('py-8 md:py-10 px-6 border-b border-[var(--vista-light)]/[0.08]', className)}>
      <p className="text-xs uppercase tracking-[0.12em] text-[var(--vista-light)]/50 mb-3 font-[var(--font-mono)]">
        Ready to work together?
      </p>
      <h3 className="text-[32px] md:text-[42px] font-medium leading-tight text-[var(--vista-light)] mb-6">
        {title}
      </h3>
      <div className="flex gap-3 flex-wrap">
        <a
          href={ctaHref}
          className="bg-[var(--ultra-orange)] text-white px-7 py-4 rounded-[3px] text-sm font-[var(--font-mono)] uppercase tracking-wider hover:bg-[var(--medium-orange)] transition-colors duration-200"
        >
          {ctaText}
        </a>
        {secondaryText && secondaryHref && (
          <a
            href={secondaryHref}
            className="border border-[var(--vista-light)]/[0.2] text-[var(--vista-light)] px-7 py-4 rounded-[3px] text-sm font-[var(--font-mono)] uppercase tracking-wider hover:border-[var(--vista-light)]/[0.35] transition-colors"
          >
            {secondaryText}
          </a>
        )}
      </div>
    </div>
  );
}

function Columns({ className, children }: FooterColumnsProps) {
  return (
    <div
      className={cn(
        'grid grid-cols-1 md:[grid-template-columns:repeat(4,minmax(0,1fr))] gap-0 mb-12 px-0 relative',
        'after:absolute after:bottom-0 after:left-0 after:right-0 after:h-px after:bg-[var(--vista-light)]/[0.08]',
        '[&>*:not(:last-child)]:border-b [&>*:not(:last-child)]:md:border-b-0 [&>*:not(:last-child)]:border-[var(--vista-light)]/[0.08]',
        className
      )}
    >
      {children}
    </div>
  );
}

function Column({ title, links, className }: FooterColumnProps) {
  return (
    <div
      className={cn(
        'py-8 md:py-10 px-6 md:border-r md:border-[var(--vista-light)]/[0.08] last:md:border-r-0',
        className
      )}
    >
      <h3 className="text-xs uppercase tracking-[0.12em] text-[var(--vista-light)]/50 mb-3 font-[var(--font-mono)]">
        {title}
      </h3>
      <ul className="space-y-2">
        {links.map((link) => (
          <li key={link.href}>
            <a
              href={link.href}
              className="text-sm text-[var(--vista-light)]/60 hover:text-[var(--ultra-orange)] transition-colors"
            >
              {link.label}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

function Bottom({ copyright, socials, className }: FooterBottomProps) {
  return (
    <div
      className={cn(
        'pt-2 px-6 flex flex-col md:flex-row justify-between items-start gap-4 text-left',
        className
      )}
    >
      <span className="text-sm text-[var(--vista-light)]/40 font-[var(--font-mono)] uppercase tracking-[0.04em]">{copyright}</span>
      {socials && socials.length > 0 && (
        <div className="flex gap-4">
          {socials.map((social) => (
            <a
              key={social.label}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[var(--vista-light)]/40 hover:text-[var(--vista-light)] transition-colors [&>svg]:w-5 [&>svg]:h-5"
              aria-label={social.label}
            >
              {social.icon}
            </a>
          ))}
        </div>
      )}
    </div>
  );
}

/* ────────────── main component ────────────── */

function FooterRoot({ className, children }: FooterProps) {
  return (
    <footer className={cn('relative bg-[var(--vista-black)] text-[var(--vista-light)] pt-0 pb-8', className)}>
      {/* Grid rails */}
      <div className="absolute inset-0 max-w-[var(--content-max)] mx-auto pointer-events-none" aria-hidden="true">
        <div className="absolute left-0 top-0 bottom-0 w-px bg-[var(--vista-light)]/[0.06]" />
        <div className="absolute right-0 top-0 bottom-0 w-px bg-[var(--vista-light)]/[0.06]" />
      </div>
      <div className="relative z-10 max-w-[var(--content-max)] mx-auto">
        {children}
      </div>
    </footer>
  );
}

export const Footer = Object.assign(FooterRoot, {
  CTA,
  Columns,
  Column,
  Bottom,
});
