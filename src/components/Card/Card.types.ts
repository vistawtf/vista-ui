import type React from 'react';

export type CardVariant = 'service' | 'article' | 'value' | 'pricing';

export interface CardBaseProps {
  variant: CardVariant;
  className?: string;
}

export interface ServiceCardProps extends CardBaseProps {
  variant: 'service';
  number?: string;
  icon?: React.ReactNode;
  title: string;
  description: string;
  href?: string;
}

export interface ArticleCardProps extends CardBaseProps {
  variant: 'article';
  image?: string;
  category?: string;
  date?: string;
  title: string;
  excerpt?: string;
  href?: string;
}

export interface ValueCardProps extends CardBaseProps {
  variant: 'value';
  title: string;
  description: string;
}

export interface PricingCardProps extends CardBaseProps {
  variant: 'pricing';
  plan: string;
  price: string;
  period?: string;
  features: string[];
  ctaText?: string;
  ctaHref?: string;
  highlighted?: boolean;
}

export type CardProps =
  | ServiceCardProps
  | ArticleCardProps
  | ValueCardProps
  | PricingCardProps;
