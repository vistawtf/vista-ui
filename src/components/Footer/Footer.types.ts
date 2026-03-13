import type React from 'react';

export interface FooterLink {
  label: string;
  href: string;
}

export interface FooterSocial {
  icon: React.ReactNode;
  href: string;
  label: string;
}

export interface FooterProps {
  className?: string;
  children: React.ReactNode;
}

export interface FooterCTAProps {
  title: string;
  ctaText: string;
  ctaHref: string;
  secondaryText?: string;
  secondaryHref?: string;
  className?: string;
}

export interface FooterColumnsProps {
  className?: string;
  children: React.ReactNode;
}

export interface FooterColumnProps {
  title: string;
  links: FooterLink[];
  className?: string;
}

export interface FooterBottomProps {
  copyright: string;
  socials?: FooterSocial[];
  className?: string;
}
