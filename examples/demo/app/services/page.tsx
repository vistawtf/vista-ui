'use client';

import {
  Navbar,
  SectionHeader,
  FeaturesGrid,
  Stats,
  FAQ,
  Footer,
} from '@vistawtf/ui';

const navLinks = [
  { href: '/landing', label: 'Research' },
  { href: '/services', label: 'Services', active: true },
  { href: '/newsletter', label: 'Newsletter' },
];

const faqItems = [
  {
    question: 'Who is Vista Growth for?',
    answer:
      'Blockchain protocols, AI startups, and Web3 projects that need to grow meaningfully — not just chase vanity metrics. We work with teams that have product-market fit and need to accelerate distribution.',
  },
  {
    question: 'What does an engagement typically look like?',
    answer:
      'We start with a 2-week discovery sprint: market positioning, competitive audit, and growth diagnosis. From there we run focused 90-day growth cycles with clear KPIs. We are operators, not consultants — we execute alongside your team.',
  },
  {
    question: 'Do you work with early-stage projects?',
    answer:
      'Selectively. For pre-product teams, we focus on AI training data strategy and model fine-tuning infrastructure — areas where early decisions compound. Post-launch, we layer in marketing and protocol growth.',
  },
  {
    question: 'What markets do you cover?',
    answer:
      'Primary focus is Latin America — Mexico, Brazil, Colombia, Argentina, Chile. We have network in the US and European markets for cross-border expansion strategies.',
  },
  {
    question: 'How do I start a conversation?',
    answer:
      'Fill out the brief intake form below. We review every submission and respond within 48 hours. If there is a fit, we schedule a 30-minute discovery call.',
  },
];

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-[var(--background)]">
      <Navbar sticky>
        <Navbar.Logo src="https://placehold.co/120x32/111111/E4E2D8?text=VISTA" alt="Vista" href="/landing" />
        <Navbar.Links items={navLinks} />
        <div className="flex items-center gap-3">
          <Navbar.CTA href="/newsletter" variant="secondary">Newsletter</Navbar.CTA>
          <Navbar.CTA href="#contact" variant="primary">Get in touch</Navbar.CTA>
          <Navbar.MobileMenu />
        </div>
      </Navbar>

      {/* Hero */}
      <section className="relative bg-[var(--background)] overflow-hidden">
        <div className="vista-container" style={{ paddingTop: '160px', paddingBottom: '80px' }}>
          <div className="max-w-[680px]">
            <SectionHeader label="Services" className="mb-8 max-w-[200px]" />
            <h1 className="vista-text-display text-[var(--text-primary)] mb-5">
              We help you grow in the right direction
            </h1>
            <p className="text-[18px] md:text-[22px] text-[var(--text-muted)] leading-[1.5] max-w-[520px]">
              Vista Growth is the operating arm of the Vista collective. We provide AI training, marketing strategy, and protocol growth services for blockchain and AI companies expanding in LATAM.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 mt-9">
              <a
                href="#contact"
                className="inline-flex items-center justify-center px-6 py-3 bg-[var(--ultra-orange)] text-white text-[0.8125rem] font-[var(--font-mono)] uppercase tracking-[0.06em] rounded-[3px] hover:bg-[var(--medium-orange)] transition-colors"
              >
                Start a project
              </a>
              <a
                href="/landing"
                className="inline-flex items-center justify-center px-6 py-3 border border-[var(--border)] text-[var(--text-primary)] text-[0.8125rem] font-[var(--font-mono)] uppercase tracking-[0.06em] rounded-[3px] hover:border-[var(--border-hover)] hover:bg-[var(--card-bg)] transition-colors"
              >
                View Research
              </a>
            </div>
          </div>
        </div>
      </section>

      <Stats>
        <Stats.Item value="35+" label="Protocols advised" />
        <Stats.Item value="$180M+" label="Capital raised by clients" />
        <Stats.Item value="12" label="LATAM markets" />
        <Stats.Item value="94%" label="Client retention rate" />
      </Stats>

      <FeaturesGrid title="what we do" columns={3}>
        <FeaturesGrid.Item
          number="01"
          title="AI Training"
          description="Custom dataset curation, model fine-tuning, and AI infrastructure consulting. We help teams build proprietary AI capabilities — not just wrap GPT-4."
          href="#contact"
        />
        <FeaturesGrid.Item
          number="02"
          title="Marketing Strategy"
          description="Go-to-market for blockchain and AI products in LATAM. Community building, content strategy, growth loops, and conversion optimization — built for crypto-native audiences."
          href="#contact"
        />
        <FeaturesGrid.Item
          number="03"
          title="Protocol Growth"
          description="TVL growth, liquidity strategy, validator recruitment, ecosystem grants, and tokenomics advisory. We know how DeFi protocols actually grow."
          href="#contact"
        />
      </FeaturesGrid>

      {/* Process section */}
      <section className="vista-section bg-[var(--background)]">
        <div className="vista-container">
          <SectionHeader label="How we work" className="mb-12" />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-[900px]">
            {[
              {
                step: '01',
                title: 'Discovery Sprint',
                desc: '2-week deep audit of your positioning, competition, and growth levers. No fluff, just diagnosis.',
              },
              {
                step: '02',
                title: '90-Day Growth Cycles',
                desc: 'Focused execution against agreed KPIs. We embed with your team and move fast.',
              },
              {
                step: '03',
                title: 'Weekly Reviews',
                desc: 'Every week: what worked, what did not, and what we are adjusting. Full transparency.',
              },
              {
                step: '04',
                title: 'Quarterly Strategy',
                desc: 'Zoom out every quarter. Revisit positioning, set new targets, calibrate the roadmap.',
              },
            ].map((item) => (
              <div
                key={item.step}
                className="p-8 border border-[var(--border)] rounded-[3px] bg-[var(--background)] hover:border-[var(--border-hover)] hover:bg-[var(--card-bg)] transition-all duration-300"
              >
                <span className="text-[0.6875rem] font-[var(--font-mono)] uppercase tracking-[0.08em] text-[var(--text-muted)] mb-3 block">
                  Step {item.step}
                </span>
                <h3 className="text-[1.0625rem] font-medium text-[var(--text-primary)] mb-2">{item.title}</h3>
                <p className="text-[0.875rem] leading-[1.6] text-[var(--text-muted)]">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section id="contact" className="vista-section bg-[var(--card-bg)]">
        <div className="vista-container max-w-[600px]">
          <SectionHeader label="Get in touch" className="mb-10" />
          <h2 className="text-[32px] md:text-[42px] font-medium text-[var(--text-primary)] lowercase mb-6">
            ready to build something?
          </h2>
          <p className="text-[1rem] text-[var(--text-muted)] leading-[1.6] mb-8">
            Tell us about your project. We respond within 48 hours.
          </p>
          <form className="flex flex-col gap-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <input
                type="text"
                placeholder="Your name"
                className="h-11 px-4 text-[0.9375rem] bg-[var(--background)] border border-[var(--border)] rounded-[3px] text-[var(--text-primary)] placeholder:text-[var(--text-muted)] focus:outline-none focus:border-[var(--ultra-orange)] transition-all"
              />
              <input
                type="email"
                placeholder="your@email.com"
                className="h-11 px-4 text-[0.9375rem] bg-[var(--background)] border border-[var(--border)] rounded-[3px] text-[var(--text-primary)] placeholder:text-[var(--text-muted)] focus:outline-none focus:border-[var(--ultra-orange)] transition-all"
              />
            </div>
            <input
              type="text"
              placeholder="Project name / URL"
              className="h-11 px-4 text-[0.9375rem] bg-[var(--background)] border border-[var(--border)] rounded-[3px] text-[var(--text-primary)] placeholder:text-[var(--text-muted)] focus:outline-none focus:border-[var(--ultra-orange)] transition-all"
            />
            <select className="h-11 px-4 text-[0.9375rem] bg-[var(--background)] border border-[var(--border)] rounded-[3px] text-[var(--text-secondary)] focus:outline-none focus:border-[var(--ultra-orange)] transition-all appearance-none">
              <option value="">Service you need</option>
              <option value="ai-training">AI Training</option>
              <option value="marketing">Marketing Strategy</option>
              <option value="protocol-growth">Protocol Growth</option>
              <option value="all">All of the above</option>
            </select>
            <textarea
              rows={4}
              placeholder="Tell us about your project and goals..."
              className="px-4 py-3 text-[0.9375rem] bg-[var(--background)] border border-[var(--border)] rounded-[3px] text-[var(--text-primary)] placeholder:text-[var(--text-muted)] focus:outline-none focus:border-[var(--ultra-orange)] transition-all resize-y"
            />
            <button
              type="submit"
              className="self-start px-8 py-3 bg-[var(--ultra-orange)] text-white text-[0.8125rem] font-[var(--font-mono)] uppercase tracking-[0.06em] rounded-[3px] hover:bg-[var(--medium-orange)] transition-colors"
            >
              Send Inquiry
            </button>
          </form>
        </div>
      </section>

      <FAQ title="common questions">
        {faqItems.map((item, i) => (
          <FAQ.Item key={i} question={item.question} answer={item.answer} />
        ))}
      </FAQ>

      <Footer>
        <Footer.CTA
          title="Let's build something great together"
          ctaText="Start a Project"
          ctaHref="#contact"
          secondaryText="View Research"
          secondaryHref="/landing"
        />
        <Footer.Columns>
          <Footer.Column
            title="Services"
            links={[
              { href: '#', label: 'AI Training' },
              { href: '#', label: 'Marketing Strategy' },
              { href: '#', label: 'Protocol Growth' },
              { href: '#contact', label: 'Get in Touch' },
            ]}
          />
          <Footer.Column
            title="Vista"
            links={[
              { href: '/landing', label: 'Research' },
              { href: '/newsletter', label: 'Newsletter' },
              { href: '#', label: 'About' },
              { href: '#', label: 'Team' },
            ]}
          />
          <Footer.Column
            title="Markets"
            links={[
              { href: '#', label: 'Mexico' },
              { href: '#', label: 'Brazil' },
              { href: '#', label: 'Colombia' },
              { href: '#', label: 'Argentina' },
            ]}
          />
          <Footer.Column
            title="Legal"
            links={[
              { href: '#', label: 'Privacy Policy' },
              { href: '#', label: 'Terms of Service' },
            ]}
          />
        </Footer.Columns>
        <Footer.Bottom copyright="© 2025 Vista Growth · Part of Vista Collective" socials={[]} />
      </Footer>
    </div>
  );
}
