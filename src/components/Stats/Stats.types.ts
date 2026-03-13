import type React from 'react';

export interface StatsProps {
  className?: string;
  children: React.ReactNode;
}

export interface StatsItemProps {
  value: string;
  label: string;
  className?: string;
}
