import type React from 'react';

export interface SelectOption {
  value: string;
  label: string;
}

export type SelectSize = 'sm' | 'md';

export interface SelectProps extends Omit<React.SelectHTMLAttributes<HTMLSelectElement>, 'size'> {
  label?: string;
  error?: string;
  options: SelectOption[];
  placeholder?: string;
  size?: SelectSize;
  className?: string;
}
