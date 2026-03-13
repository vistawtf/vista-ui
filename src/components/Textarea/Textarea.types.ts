import type React from 'react';

export type TextareaResize = 'none' | 'vertical' | 'both';

export interface TextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: string;
  error?: string;
  hint?: string;
  rows?: number;
  resize?: TextareaResize;
  className?: string;
}
