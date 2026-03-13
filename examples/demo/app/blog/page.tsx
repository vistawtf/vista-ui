'use client';

import {
  Navbar,
  Hero,
  Card,
  Footer,
  SectionDivider,
} from '@vistawtf/ui';

const articles = [
  {
    title: 'Why We Built Our Own Inference Router',
    excerpt: 'Existing solutions handled the easy case. We needed something that could route 2M+ daily requests across 6 model providers with sub-10ms overhead.',
    category: 'Engineering',
    date: 'Mar 11, 2026',
    href: '#',
  },
  {
    title: 'The Hidden Cost of AI Downtime',
    excerpt: 'When your AI provider goes down, what happens to your users? We analyzed 50 production outages and found patterns most teams overlook.',
    category: 'Research',
    date: 'Mar 8, 2026',
    href: '#',
  },
  {
    title: 'Benchmarking Claude 4 vs GPT-5 for Agent Tasks',
    excerpt: 'We ran both models through 200 real-world agent scenarios — code review, customer support, data extraction. The results surprised us.',
    category: 'Benchmarks',
    date: 'Mar 5, 2026',
    href: '#',
  },
  {
    title: 'Building a Safety Layer Without Killing Latency',
    excerpt: 'Content filtering, PII detection, and output validation in under 5ms. Here is how our safety pipeline works at scale.',
    category: 'Engineering',
    date: 'Mar 1, 2026',
    href: '#',
  },
  {
    title: 'How Stripe Uses Aura for Payment Fraud Detection',
    excerpt: 'A deep dive into how Stripe deployed 12 specialized agents through Aura to catch fraudulent transactions in real-time.',
    category: 'Case Study',
    date: 'Feb 26, 2026',
    href: '#',
  },
  {
    title: 'Open-Sourcing the Aura Orchestration Engine',
    excerpt: 'Today we are releasing the core routing and orchestration engine under the Apache 2.0 license. Here is what it includes and why we did it.',
    category: 'Announcement',
    date: 'Feb 20, 2026',
    href: '#',
  },
];

export default function BlogPage() {
  return (
    <div className="min-h-screen">
      <Navbar sticky>
        <Navbar.Logo src="/aura-logo.svg" alt="Aura" href="/" />
        <Navbar.Links
          items={[
            { label: 'Features', href: '/landing#features' },
            { label: 'Pricing', href: '/pricing' },
            { label: 'Blog', href: '/blog', active: true },
            { label: 'Docs', href: '#' },
          ]}
        />
        <Navbar.CTA href="#" variant="primary">
          Get Started
        </Navbar.CTA>
        <Navbar.MobileMenu />
      </Navbar>

      <Hero
        kicker="Blog"
        title="Engineering and research updates"
        subtitle="Technical deep dives, benchmarks, and product updates from the Aura team."
      />

      <SectionDivider />

      <section className="vista-section bg-[var(--background)]">
        <div className="vista-container">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {articles.map((article, i) => (
              <Card
                key={i}
                variant="article"
                title={article.title}
                excerpt={article.excerpt}
                category={article.category}
                date={article.date}
                href={article.href}
              />
            ))}
          </div>
        </div>
      </section>

      <SectionDivider />

      <Footer>
        <Footer.CTA
          title="Stay in the loop."
          ctaText="Subscribe to updates"
          ctaHref="#"
        />
        <Footer.Columns>
          <Footer.Column
            title="Product"
            links={[
              { label: 'Features', href: '/landing#features' },
              { label: 'Pricing', href: '/pricing' },
              { label: 'Documentation', href: '#' },
            ]}
          />
          <Footer.Column
            title="Company"
            links={[
              { label: 'About', href: '#' },
              { label: 'Blog', href: '/blog' },
              { label: 'Careers', href: '#' },
            ]}
          />
        </Footer.Columns>
        <Footer.Bottom copyright="© 2026 Aura Technologies" />
      </Footer>
    </div>
  );
}
