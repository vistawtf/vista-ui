import Link from 'next/link';

const examples = [
  {
    title: 'SaaS Landing Page',
    href: '/landing',
    description:
      'Full landing page with Navbar, Hero, FeaturesGrid, Stats, FAQ, and Footer. The classic startup landing page.',
  },
  {
    title: 'Internal Tool',
    href: '/tool',
    description:
      'Dashboard-style layout with sidebar navigation, data tables, forms, badges, and stats widgets.',
  },
  {
    title: 'Pricing Page',
    href: '/pricing',
    description:
      'Clean pricing page with tier cards, feature comparison, FAQ section, and conversion-focused layout.',
  },
  {
    title: 'Blog / Content Site',
    href: '/blog',
    description:
      'Article listing with hero, card grid in the article variant, and content-focused typography.',
  },
];

export default function HomePage() {
  return (
    <main className="min-h-screen bg-[var(--background)]">
      <div className="vista-container pt-[140px] pb-24">
        <div className="max-w-[640px] mb-16">
          <span className="vista-text-label text-[var(--ultra-orange)] mb-4 block">
            @vistawtf/ui
          </span>
          <h1 className="vista-text-display text-[var(--foreground)] mb-4">
            Vista UI Demo
          </h1>
          <p className="text-[18px] text-[var(--muted)] leading-[1.6]">
            Production-ready components built on the Vista design system. Browse
            the example pages below to see every component in context.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {examples.map((ex) => (
            <Link
              key={ex.href}
              href={ex.href}
              className="group block p-8 border border-[var(--border)] rounded-[10px] bg-[var(--background)] hover:border-[var(--border-hover)] hover:bg-[var(--surface)] hover:-translate-y-[3px] hover:shadow-[0_4px_6px_-1px_rgba(0,0,0,0.04),0_10px_20px_-2px_rgba(0,0,0,0.06)] transition-all duration-[350ms] [transition-timing-function:cubic-bezier(0.16,1,0.3,1)] no-underline"
            >
              <h2 className="text-[1.25rem] font-medium text-[var(--foreground)] mb-2 group-hover:text-[var(--ultra-orange)] transition-colors">
                {ex.title}
              </h2>
              <p className="text-[0.875rem] text-[var(--muted)] leading-[1.6]">
                {ex.description}
              </p>
              <span className="inline-block mt-4 text-[13px] font-mono font-medium uppercase tracking-[0.05em] text-[var(--ultra-orange)]">
                View example →
              </span>
            </Link>
          ))}
        </div>
      </div>
    </main>
  );
}
