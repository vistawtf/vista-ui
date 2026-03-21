'use client';

import {
  Navbar,
  Hero,
  FeaturesGrid,
  Stats,
  FAQ,
  Footer,
  Badge,
} from '@vistawtf/ui';

const navLinks = [
  { href: '/landing', label: 'Research', active: true },
  { href: '/services', label: 'Services' },
  { href: '/newsletter', label: 'Newsletter' },
];

const features = [
  {
    number: '01',
    title: 'Protocol Intelligence',
    description:
      'Deep research on blockchain infrastructure, DeFi mechanics, and protocol economics tailored for the Latin American market.',
    href: '#',
  },
  {
    number: '02',
    title: 'AI Fundamentals',
    description:
      'Applied AI research covering LLM deployments, agent architectures, and machine learning systems for enterprise adoption.',
    href: '#',
  },
  {
    number: '03',
    title: 'Market Analysis',
    description:
      'Weekly intelligence on emerging crypto and AI trends — signal extraction from noise, delivered to your inbox.',
    href: '#',
  },
];

const faqItems = [
  {
    question: 'What makes Vista different from other crypto research firms?',
    answer:
      'Vista is built specifically for the Latin American context. We understand the regulatory environment, the local adoption curves, and the cultural nuances that global firms miss. Our research is actionable, not academic.',
  },
  {
    question: 'Who is Vista research for?',
    answer:
      'Founders, operators, and investors who are building or allocating capital in the blockchain and AI space across LATAM. If you need to understand what is actually happening versus what is being hyped, Vista is for you.',
  },
  {
    question: 'How often is new research published?',
    answer:
      'Our newsletter ships every week. Deep research reports drop monthly. Protocol breakdowns and market analysis are published as events warrant — we do not pad the calendar.',
  },
  {
    question: 'Is Vista content available in Spanish?',
    answer:
      'Yes. All research is available in both English and Spanish. Some community discussions and live sessions are Spanish-first.',
  },
];

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-[var(--background)]">
      <Navbar sticky>
        <Navbar.Logo src="https://placehold.co/120x32/111111/E4E2D8?text=VISTA" alt="Vista" href="/landing" />
        <Navbar.Links items={navLinks} />
        <div className="flex items-center gap-3">
          <Navbar.CTA href="/newsletter" variant="secondary">Subscribe</Navbar.CTA>
          <Navbar.CTA href="/services" variant="primary">Work with us</Navbar.CTA>
          <Navbar.MobileMenu />
        </div>
      </Navbar>

      <Hero>
        <Hero.Kicker>Blockchain + AI Research Collective — LATAM</Hero.Kicker>
        <Hero.Title>
          Where crypto meets intelligence
        </Hero.Title>
        <Hero.Subtitle>
          Vista is an independent research collective tracking blockchain protocols and AI systems across Latin America. No hype. No noise. Signal only.
        </Hero.Subtitle>
        <Hero.Actions>
          <a
            href="/newsletter"
            className="inline-flex items-center justify-center px-6 py-3 bg-[var(--ultra-orange)] text-white text-[0.8125rem] font-[var(--font-mono)] uppercase tracking-[0.06em] rounded-[3px] hover:bg-[var(--medium-orange)] transition-colors"
          >
            Read the Research →
          </a>
          <a
            href="/services"
            className="inline-flex items-center justify-center px-6 py-3 border border-[var(--border)] text-[var(--text-primary)] text-[0.8125rem] font-[var(--font-mono)] uppercase tracking-[0.06em] rounded-[3px] hover:border-[var(--border-hover)] hover:bg-[var(--card-bg)] transition-colors"
          >
            Our Services
          </a>
        </Hero.Actions>
      </Hero>

      <Stats>
        <Stats.Item value="2,400+" label="Research subscribers" />
        <Stats.Item value="48" label="Protocol reports published" />
        <Stats.Item value="12" label="Countries covered" />
        <Stats.Item value="38%" label="Average open rate" />
      </Stats>

      <FeaturesGrid title="what we research" columns={3}>
        {features.map((f) => (
          <FeaturesGrid.Item key={f.number} {...f} />
        ))}
      </FeaturesGrid>

      <FAQ title="common questions">
        {faqItems.map((item, i) => (
          <FAQ.Item key={i} question={item.question} answer={item.answer} />
        ))}
      </FAQ>

      <Footer>
        <Footer.CTA
          title="Join the research collective"
          ctaText="Subscribe Free"
          ctaHref="/newsletter"
          secondaryText="View Services"
          secondaryHref="/services"
        />
        <Footer.Columns>
          <Footer.Column
            title="Research"
            links={[
              { href: '#', label: 'Protocol Reports' },
              { href: '#', label: 'AI Intelligence' },
              { href: '#', label: 'Market Analysis' },
              { href: '#', label: 'Archive' },
            ]}
          />
          <Footer.Column
            title="Company"
            links={[
              { href: '#', label: 'About Vista' },
              { href: '/services', label: 'Services' },
              { href: '#', label: 'Team' },
              { href: '#', label: 'Press' },
            ]}
          />
          <Footer.Column
            title="Community"
            links={[
              { href: '#', label: 'Discord' },
              { href: '#', label: 'Twitter / X' },
              { href: '#', label: 'Telegram' },
              { href: '#', label: 'LinkedIn' },
            ]}
          />
          <Footer.Column
            title="Legal"
            links={[
              { href: '#', label: 'Privacy Policy' },
              { href: '#', label: 'Terms of Use' },
              { href: '#', label: 'Disclaimer' },
            ]}
          />
        </Footer.Columns>
        <Footer.Bottom copyright="© 2025 Vista Research Collective" socials={[]} />
      </Footer>
    </div>
  );
}
