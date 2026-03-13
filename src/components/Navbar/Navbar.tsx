'use client';

import React, { useState, useEffect, useCallback, createContext, useContext } from 'react';
import { cn } from '../../utils/cn';
import type {
  NavbarProps,
  NavbarLogoProps,
  NavbarLinksProps,
  NavbarCTAProps,
  NavLinkItem,
} from './Navbar.types';

/* ────────────── context ────────────── */

interface NavbarContextValue {
  scrolled: boolean;
  mobileOpen: boolean;
  setMobileOpen: (open: boolean) => void;
  links: NavLinkItem[];
  setLinks: (items: NavLinkItem[]) => void;
}

const NavbarContext = createContext<NavbarContextValue>({
  scrolled: false,
  mobileOpen: false,
  setMobileOpen: () => {},
  links: [],
  setLinks: () => {},
});

const useNavbar = () => useContext(NavbarContext);

/* ────────────── sub-components ────────────── */

function Logo({ src, alt, href = '/', className }: NavbarLogoProps) {
  return (
    <a href={href} className={cn('inline-flex items-center h-8 shrink-0', className)}>
      <img src={src} alt={alt} className="h-5 w-auto" />
    </a>
  );
}

function Links({ items, className }: NavbarLinksProps) {
  const { setLinks } = useNavbar();

  useEffect(() => {
    setLinks(items);
  }, [items, setLinks]);

  return (
    <nav className={cn('hidden lg:flex items-center gap-6', className)}>
      {items.map((item) => (
        <a
          key={item.href}
          href={item.href}
          className={cn(
            'relative vista-text-body-sm transition-colors duration-200 pb-[2px]',
            item.active
              ? 'text-[var(--foreground)] after:absolute after:bottom-[-2px] after:left-0 after:w-full after:h-[1.5px] after:bg-[var(--ultra-orange)] after:scale-x-100'
              : 'text-[var(--muted)] hover:text-[var(--foreground)] after:absolute after:bottom-[-2px] after:left-0 after:w-full after:h-[1.5px] after:bg-[var(--ultra-orange)] after:scale-x-0 after:origin-left after:transition-transform after:duration-300'
          )}
        >
          {item.label}
        </a>
      ))}
    </nav>
  );
}

function CTA({ href, variant = 'primary', className, children }: NavbarCTAProps) {
  const isPrimary = variant === 'primary';
  return (
    <a
      href={href}
      className={cn(
        'hidden lg:inline-flex items-center justify-center px-5 py-2 vista-text-body-sm font-medium tracking-[0.02em] rounded-[3px] transition-all duration-200',
        isPrimary
          ? 'bg-[var(--ultra-orange)] text-white hover:bg-[var(--medium-orange)] hover:-translate-y-[1px] hover:shadow-[0_4px_12px_rgba(255,82,51,0.25)]'
          : 'border border-[var(--border)] text-[var(--foreground)] hover:border-[var(--border-hover)] hover:bg-[var(--surface-hover)]',
        className
      )}
    >
      {children}
    </a>
  );
}

function MobileMenu() {
  const { mobileOpen, setMobileOpen, links } = useNavbar();

  return (
    <>
      {/* Hamburger */}
      <button
        className="lg:hidden flex flex-col justify-center items-center w-8 h-8 gap-[5px] cursor-pointer"
        onClick={() => setMobileOpen(!mobileOpen)}
        aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
        aria-expanded={mobileOpen}
      >
        <span
          className={cn(
            'block w-5 h-[1.5px] bg-[var(--foreground)] transition-all duration-300',
            mobileOpen && 'rotate-45 translate-y-[6.5px]'
          )}
        />
        <span
          className={cn(
            'block w-5 h-[1.5px] bg-[var(--foreground)] transition-all duration-300',
            mobileOpen && 'opacity-0'
          )}
        />
        <span
          className={cn(
            'block w-5 h-[1.5px] bg-[var(--foreground)] transition-all duration-300',
            mobileOpen && '-rotate-45 -translate-y-[6.5px]'
          )}
        />
      </button>

      {/* Overlay */}
      <div
        className="vista-mobile-overlay"
        data-open={mobileOpen}
        aria-hidden={!mobileOpen}
      >
        <nav className="flex flex-col items-center justify-center h-full gap-8 px-6">
          {links.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={() => setMobileOpen(false)}
              className={cn(
                'text-2xl font-medium transition-colors duration-200',
                item.active
                  ? 'text-[var(--ultra-orange)]'
                  : 'text-[var(--foreground)] hover:text-[var(--ultra-orange)]'
              )}
            >
              {item.label}
            </a>
          ))}
        </nav>
      </div>
    </>
  );
}

/* ────────────── main component ────────────── */

function NavbarRoot({ sticky = true, className, children }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [links, setLinksState] = useState<NavLinkItem[]>([]);

  const setLinks = useCallback((items: NavLinkItem[]) => {
    setLinksState(items);
  }, []);

  useEffect(() => {
    if (!sticky) return;

    let rafId: number | null = null;
    const update = () => {
      setScrolled(window.scrollY > 50);
      rafId = null;
    };
    const onScroll = () => {
      if (rafId !== null) return;
      rafId = window.requestAnimationFrame(update);
    };

    update();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', onScroll);
      if (rafId !== null) window.cancelAnimationFrame(rafId);
    };
  }, [sticky]);

  return (
    <NavbarContext.Provider value={{ scrolled, mobileOpen, setMobileOpen, links, setLinks }}>
      <header
        className={cn(
          'left-0 right-0 z-50 flex items-center transition-all duration-500',
          sticky ? 'fixed top-0' : 'relative',
          scrolled
            ? 'h-14 bg-[var(--background)]/80 backdrop-blur-xl border-b border-[var(--border)]/50 shadow-sm'
            : 'h-14 bg-transparent border-b border-transparent',
          className
        )}
      >
        <div className="vista-container flex items-center justify-between">
          {children}
        </div>
      </header>
    </NavbarContext.Provider>
  );
}

/* ────────────── compound export ────────────── */

export const Navbar = Object.assign(NavbarRoot, {
  Logo,
  Links,
  CTA,
  MobileMenu,
});
