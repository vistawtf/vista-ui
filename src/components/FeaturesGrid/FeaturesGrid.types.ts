import type React from 'react';

export interface FeaturesGridProps {
  title?: string;
  columns?: 2 | 3 | 4;
  className?: string;
  children: React.ReactNode;
}

export interface FeaturesGridItemProps {
  number?: string;
  icon?: React.ReactNode;
  title: string;
  description: string;
  href?: string;
  className?: string;
}
