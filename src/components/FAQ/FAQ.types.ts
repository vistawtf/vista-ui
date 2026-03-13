import type React from 'react';

export interface FAQProps {
  title?: string;
  /** If true, multiple items can be open simultaneously */
  allowMultiple?: boolean;
  className?: string;
  children: React.ReactNode;
}

export interface FAQItemProps {
  question: string;
  answer?: string;
  children?: React.ReactNode;
  defaultOpen?: boolean;
  className?: string;
}
