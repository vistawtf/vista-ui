'use client';

import { useState } from 'react';
import {
  Navbar,
  Hero,
  Stats,
  FAQ,
  Footer,
  Badge,
} from '@vistawtf/ui';

const navLinks = [
  { href: '/landing', label: 'Research' },
  { href: '/services', label: 'Services' },
  { href: '/newsletter', label: 'Newsletter', active: true },
];

const faqItems = [
  {
    question: 'What is Emergent Stack?',
    answer:
      'Emergent Stack is a weekly newsletter tracking the intersection of AI systems, blockchain infrastructure, and software engineering. Each issue covers one big idea with enough depth to actually be useful.',
  },
  {
    question: 'How often does it ship?',
    answer:
      'Every Tuesday morning. Some weeks have a bonus Friday edition for breaking developments. You will never get more than two emails in a week.',
  },
  {
    question: 'Is it free?',
    answer:
      'The weekly newsletter is free. We have a paid tier for subscribers who want access to the full research archive, protocol breakdowns, and private community threads.',
  },
  {
    question: 'Can I read past issues before subscribing?',
    answer:
      'Yes — the archive is publicly accessible. Browse the last 6 months before deciding.',
  },
  {
    question: 'How do I unsubscribe?',
    answer:
      'One click from any email we send. No dark patterns, no re-confirm flows. Just gone.',
  },
];

export default function NewsletterPage() {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) setSubmitted(true);
  };

  return (
    <div className="min-h-screen bg-[var(--background)]">
      <Navbar sticky>
        <Navbar.Logo src="https://placehold.co/120x32/111111/E4E2D8?text=VISTA" alt="Vista" href="/landing" />
        <Navbar.Links items={navLinks} />
        <div className="flex items-center gap-3">
          <Navbar.CTA href="/landing" variant="secondary">Research</Navbar.CTA>
          <Navbar.CTA href="/services" variant="primary">Work with us</Navbar.CTA>
          <Navbar.MobileMenu />
        </div>
      </Navbar>

      {/* Hero — newsletter focused */}
      <section className="relative bg-[var(--background)] overflow-hidden">
        <div className="vista-container" style={{ paddingTop: '160px', paddingBottom: '80px' }}>
          <div className="max-w-[600px]">
            <span className="vista-text-label text-[var(--text-muted)] mb-4 block">
              Weekly Intelligence — Free
            </span>
            <h1 className="vista-text-display text-[var(--text-primary)] mb-4">
              Emergent Stack
            </h1>
            <p className="text-[18px] md:text-[22px] text-[var(--text-muted)] leading-[1.5] mb-8 max-w-[480px]">
              One big idea every week. AI systems, blockchain protocols, and the engineering patterns that matter. 10,000+ readers, 35% open rate.
            </p>

            {submitted ? (
              <div className="flex items-center gap-3 p-4 border border-[var(--border)] rounded-[3px] bg-[var(--card-bg)]">
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" className="text-[var(--ultra-orange)] shrink-0">
                  <path d="M4 10l4.5 4.5L16 7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                <span className="text-[0.9375rem] text-[var(--text-primary)]">
                  You are on the list. First issue arrives Tuesday.
                </span>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-[480px]">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="your@email.com"
                  required
                  className="flex-1 h-11 px-4 text-[0.9375rem] bg-[var(--card-bg)] border border-[var(--border)] rounded-[3px] text-[var(--text-primary)] placeholder:text-[var(--text-muted)] focus:outline-none focus:border-[var(--ultra-orange)] focus:shadow-[0_0_0_3px_rgba(255,82,51,0.1)] transition-all"
                />
                <button
                  type="submit"
                  className="h-11 px-6 bg-[var(--ultra-orange)] text-white text-[0.8125rem] font-[var(--font-mono)] uppercase tracking-[0.06em] rounded-[3px] hover:bg-[var(--medium-orange)] transition-colors whitespace-nowrap"
                >
                  Subscribe Free
                </button>
              </form>
            )}

            <p className="mt-3 text-[0.75rem] text-[var(--text-muted)]">
              No spam. Unsubscribe in one click.
            </p>
          </div>
        </div>
      </section>

      <Stats>
        <Stats.Item value="10k+" label="Active subscribers" />
        <Stats.Item value="35%" label="Average open rate" />
        <Stats.Item value="156" label="Issues published" />
        <Stats.Item value="4.8★" label="Reader rating" />
      </Stats>

      {/* Recent issues preview */}
      <section className="vista-section bg-[var(--background)]">
        <div className="vista-container">
          <h2 className="text-[32px] md:text-[42px] font-medium text-[var(--text-primary)] lowercase mb-10">
            recent issues
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {[
              {
                issue: '#156',
                title: 'Why Ethereum L2s are eating L1 revenue',
                date: 'Jan 21, 2025',
                tag: 'Blockchain',
              },
              {
                issue: '#155',
                title: 'Mixture of Experts: the architecture that changed LLMs',
                date: 'Jan 14, 2025',
                tag: 'AI Systems',
              },
              {
                issue: '#154',
                title: 'Agentic frameworks and the context window problem',
                date: 'Jan 7, 2025',
                tag: 'AI Systems',
              },
            ].map((item) => (
              <a
                key={item.issue}
                href="#"
                className="group block p-6 border border-[var(--border)] rounded-[3px] bg-[var(--background)] hover:border-[var(--border-hover)] hover:bg-[var(--card-bg)] transition-all duration-300"
              >
                <div className="flex items-center gap-2 mb-3">
                  <span className="text-[0.625rem] font-[var(--font-mono)] uppercase tracking-[0.08em] text-[var(--ultra-orange)] px-2 py-[3px] border border-[rgba(255,82,51,0.2)] rounded-[3px] bg-[rgba(255,82,51,0.04)]">
                    {item.tag}
                  </span>
                  <span className="text-[0.75rem] text-[var(--text-muted)]">{item.date}</span>
                </div>
                <h3 className="text-[0.9375rem] font-medium leading-[1.4] text-[var(--text-primary)] mb-4">
                  {item.title}
                </h3>
                <span className="text-[0.75rem] font-[var(--font-mono)] uppercase tracking-[0.06em] text-[var(--text-muted)] group-hover:text-[var(--ultra-orange)] transition-colors">
                  Read issue {item.issue} →
                </span>
              </a>
            ))}
          </div>
        </div>
      </section>

      <FAQ title="about the newsletter">
        {faqItems.map((item, i) => (
          <FAQ.Item key={i} question={item.question} answer={item.answer} />
        ))}
      </FAQ>

      <Footer>
        <Footer.CTA
          title="Weekly intelligence, zero noise"
          ctaText="Subscribe Free"
          ctaHref="#"
          secondaryText="View Archive"
          secondaryHref="#"
        />
        <Footer.Columns>
          <Footer.Column
            title="Newsletter"
            links={[
              { href: '#', label: 'Archive' },
              { href: '#', label: 'Paid Access' },
              { href: '#', label: 'About' },
            ]}
          />
          <Footer.Column
            title="Topics"
            links={[
              { href: '#', label: 'AI Systems' },
              { href: '#', label: 'Blockchain' },
              { href: '#', label: 'Engineering' },
            ]}
          />
          <Footer.Column
            title="Vista"
            links={[
              { href: '/landing', label: 'Research' },
              { href: '/services', label: 'Services' },
              { href: '#', label: 'Team' },
            ]}
          />
          <Footer.Column
            title="Legal"
            links={[
              { href: '#', label: 'Privacy Policy' },
              { href: '#', label: 'Terms of Use' },
            ]}
          />
        </Footer.Columns>
        <Footer.Bottom copyright="© 2025 Emergent Stack · A Vista publication" socials={[]} />
      </Footer>
    </div>
  );
}
