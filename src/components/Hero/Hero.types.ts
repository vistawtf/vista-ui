import type React from 'react';

export interface TrustedByLogo {
  src: string;
  alt: string;
  href?: string;
  width?: number;
  height?: number;
}

export interface HeroProps {
  /* Quick API props */
  kicker?: string;
  title?: string;
  subtitle?: string;
  ctaText?: string;
  ctaHref?: string;
  ctaSecondaryText?: string;
  ctaSecondaryHref?: string;
  /* Common */
  className?: string;
  children?: React.ReactNode;
}

export interface HeroKickerProps {
  className?: string;
  children: React.ReactNode;
}

export interface HeroTitleProps {
  className?: string;
  children: React.ReactNode;
}

export interface HeroSubtitleProps {
  className?: string;
  children: React.ReactNode;
}

export interface HeroActionsProps {
  className?: string;
  children: React.ReactNode;
}

export interface HeroTrustedByProps {
  logos: TrustedByLogo[];
  label?: string;
  className?: string;
}
