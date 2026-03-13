import type React from 'react';

export interface NavLinkItem {
  label: string;
  href: string;
  active?: boolean;
}

export interface NavbarProps {
  sticky?: boolean;
  className?: string;
  children?: React.ReactNode;
}

export interface NavbarLogoProps {
  src: string;
  alt: string;
  href?: string;
  className?: string;
}

export interface NavbarLinksProps {
  items: NavLinkItem[];
  className?: string;
}

export interface NavbarCTAProps {
  href: string;
  variant?: 'primary' | 'secondary';
  className?: string;
  children: React.ReactNode;
}

export interface NavbarMobileMenuProps {
  className?: string;
}
