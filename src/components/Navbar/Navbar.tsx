'use client';

import React, { useState, useEffect, useCallback, createContext, useContext } from 'react';
import { Menu, X } from 'lucide-react';
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
              ? 'text-[var(--text-primary)] after:absolute after:bottom-[-2px] after:left-0 after:w-full after:h-[1.5px] after:bg-[var(--ultra-orange)] after:scale-x-100'
              : 'text-[var(--text-muted)] hover:text-[var(--text-primary)] after:absolute after:bottom-[-2px] after:left-0 after:w-full after:h-[1.5px] after:bg-[var(--ultra-orange)] after:scale-x-0 after:origin-left after:transition-transform after:duration-300'
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
        'hidden lg:inline-flex items-center justify-center px-5 py-2 text-[0.75rem] font-[var(--font-mono)] uppercase tracking-[0.06em] rounded-[3px] transition-all duration-200',
        isPrimary
          ? 'bg-[var(--ultra-orange)] text-white hover:bg-[var(--medium-orange)]'
          : 'border border-[var(--border)] text-[var(--text-primary)] hover:border-[var(--border-hover)] hover:bg-[var(--card-bg)]',
        className
      )}
    >
      {children}
    </a>
  );
}

function MobileMenu() {
  const { mobileOpen, setMobileOpen } = useNavbar();

  return (
    <>
      <button
        onClick={() => setMobileOpen(!mobileOpen)}
        className="lg:hidden inline-flex items-center justify-center w-10 h-10 border border-[var(--border)] rounded-[3px] text-[var(--text-primary)] transition-colors duration-200 hover:bg-[var(--card-bg)]"
        aria-label="Toggle menu"
        aria-expanded={mobileOpen}
      >
        {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
      </button>
    </>
  );
}

function MobileDropdown() {
  const { mobileOpen, setMobileOpen, links } = useNavbar();

  return (
    <div
      className={cn(
        'lg:hidden overflow-hidden transition-all duration-300 ease-[cubic-bezier(0.22,1,0.36,1)]',
        mobileOpen ? 'max-h-[400px] opacity-100 pb-5 pt-2' : 'max-h-0 opacity-0 pb-0 pt-0'
      )}
    >
      <div className="border-t border-[var(--border)] vista-container">
        <div className="flex flex-col gap-4 pt-4">
          {links.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={() => setMobileOpen(false)}
              className={cn(
                'text-[17px] py-1 transition-colors duration-200',
                item.active
                  ? 'text-[var(--ultra-orange)]'
                  : 'text-[var(--text-primary)] hover:text-[var(--ultra-orange)]'
              )}
            >
              {item.label}
            </a>
          ))}
        </div>
      </div>
    </div>
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
          'left-0 right-0 z-50 transition-all duration-500',
          sticky ? 'fixed top-0' : 'relative',
          scrolled
            ? 'bg-[var(--background)] border-b border-[var(--border)]'
            : 'bg-[var(--background)] border-b border-[var(--border)]',
          className
        )}
      >
        <div className="vista-container flex items-center justify-between h-14">
          {children}
        </div>
        <MobileDropdown />
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
  MobileDropdown,
});
