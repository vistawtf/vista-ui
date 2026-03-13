'use client';

import React, { useState, useCallback, createContext, useContext } from 'react';
import { cn } from '../../utils/cn';
import type { FAQProps, FAQItemProps } from './FAQ.types';

/* ────────────── context ────────────── */

interface FAQContextValue {
  openIndex: number | null;
  openIndices: Set<number>;
  allowMultiple: boolean;
  toggle: (index: number) => void;
  register: () => number;
}

const FAQContext = createContext<FAQContextValue>({
  openIndex: null,
  openIndices: new Set(),
  allowMultiple: false,
  toggle: () => {},
  register: () => 0,
});

/* ────────────── FAQ Item ────────────── */

function Item({ question, answer, children, defaultOpen = false, className }: FAQItemProps) {
  const { openIndex, openIndices, allowMultiple, toggle, register } = useContext(FAQContext);
  const [index] = useState(() => register());
  const isOpen = allowMultiple ? openIndices.has(index) : openIndex === index;

  // Handle default open on mount
  React.useEffect(() => {
    if (defaultOpen) {
      toggle(index);
    }
    // Only run on mount
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className={cn('border-b border-[var(--border)]', className)}>
      <button
        className="w-full flex items-center justify-between py-5 text-left cursor-pointer group"
        onClick={() => toggle(index)}
        aria-expanded={isOpen}
      >
        <span className="text-[1rem] font-medium text-[var(--foreground)] pr-4">{question}</span>
        <svg
          width="20"
          height="20"
          className={cn(
            'w-5 h-5 text-[var(--muted)] shrink-0 transition-transform duration-300 [transition-timing-function:cubic-bezier(0.16,1,0.3,1)]',
            isOpen && 'rotate-45'
          )}
          viewBox="0 0 20 20"
          fill="none"
        >
          <path d="M10 4v12M4 10h12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        </svg>
      </button>
      <div
        className="vista-faq-content"
        data-open={isOpen}
        role="region"
      >
        <div>
          <div className="pb-5 text-[0.9375rem] leading-[1.6] text-[var(--muted)]">
            {children || answer}
          </div>
        </div>
      </div>
    </div>
  );
}

/* ────────────── FAQ Root ────────────── */

function FAQRoot({ title, allowMultiple = false, className, children }: FAQProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const [openIndices, setOpenIndices] = useState<Set<number>>(new Set());
  const counterRef = React.useRef(0);

  const register = useCallback(() => {
    return counterRef.current++;
  }, []);

  const toggle = useCallback(
    (index: number) => {
      if (allowMultiple) {
        setOpenIndices((prev) => {
          const next = new Set(prev);
          if (next.has(index)) {
            next.delete(index);
          } else {
            next.add(index);
          }
          return next;
        });
      } else {
        setOpenIndex((prev) => (prev === index ? null : index));
      }
    },
    [allowMultiple]
  );

  return (
    <FAQContext.Provider value={{ openIndex, openIndices, allowMultiple, toggle, register }}>
      <section className={cn('vista-section bg-[var(--background)]', className)}>
        <div className="vista-container max-w-[800px]">
          {title && (
            <h2 className="text-[36px] md:text-[48px] font-medium leading-tight text-[var(--foreground)] lowercase mb-12">
              {title}
            </h2>
          )}
          <div className="border-t border-[var(--border)]">
            {children}
          </div>
        </div>
      </section>
    </FAQContext.Provider>
  );
}

export const FAQ = Object.assign(FAQRoot, {
  Item,
});
