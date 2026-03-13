'use client';

import {
  Navbar,
  Hero,
  FeaturesGrid,
  Stats,
  FAQ,
  Footer,
  Button,
  GridLines,
  SectionDivider,
} from '@vistawtf/ui';

function BrainIcon() {
  return (
    <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M9.5 2a2.5 2.5 0 0 1 2.5 2.5v0a2.5 2.5 0 0 1-2.5 2.5h0A2.5 2.5 0 0 1 7 4.5v0A2.5 2.5 0 0 1 9.5 2z" />
      <path d="M14.5 2a2.5 2.5 0 0 1 2.5 2.5v0a2.5 2.5 0 0 1-2.5 2.5" />
      <path d="M6 7.5A2.5 2.5 0 0 0 3.5 10v0A2.5 2.5 0 0 0 6 12.5" />
      <path d="M18 7.5a2.5 2.5 0 0 1 2.5 2.5v0a2.5 2.5 0 0 1-2.5 2.5" />
      <path d="M6 12.5a2.5 2.5 0 0 0-2.5 2.5v0A2.5 2.5 0 0 0 6 17.5" />
      <path d="M18 12.5a2.5 2.5 0 0 1 2.5 2.5v0a2.5 2.5 0 0 1-2.5 2.5" />
      <path d="M9.5 17a2.5 2.5 0 0 0-2.5 2.5v0A2.5 2.5 0 0 0 9.5 22h5a2.5 2.5 0 0 0 2.5-2.5v0a2.5 2.5 0 0 0-2.5-2.5" />
      <path d="M12 2v20" />
    </svg>
  );
}

function ShieldIcon() {
  return (
    <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
    </svg>
  );
}

function ZapIcon() {
  return (
    <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
    </svg>
  );
}

export default function LandingPage() {
  return (
    <div className="min-h-screen">
      <Navbar sticky>
        <Navbar.Logo src="/aura-logo.svg" alt="Aura" href="/" />
        <Navbar.Links
          items={[
            { label: 'Features', href: '#features' },
            { label: 'Pricing', href: '/pricing' },
            { label: 'Blog', href: '/blog' },
            { label: 'About', href: '#' },
          ]}
        />
        <Navbar.CTA href="#subscribe" variant="primary">
          Get Early Access
        </Navbar.CTA>
        <Navbar.MobileMenu />
      </Navbar>

      <Hero>
        <Hero.Kicker>AI Infrastructure</Hero.Kicker>
        <Hero.Title>
          Ship AI features <u style={{ textDecorationColor: 'var(--ultra-orange)', textDecorationThickness: '2px', textUnderlineOffset: '0.2em' }}>faster</u>
        </Hero.Title>
        <Hero.Subtitle>
          Aura gives your team a unified platform for building, deploying, and monitoring AI agents. From prototype to production in days, not months.
        </Hero.Subtitle>
        <Hero.Actions>
          <Button variant="primary" size="lg">
            Start Building Free
          </Button>
          <Button variant="secondary" size="lg">
            See it in action →
          </Button>
        </Hero.Actions>
        <Hero.TrustedBy
          label="Trusted by engineering teams at"
          logos={[
            { src: '/placeholder-logo-1.svg', alt: 'Vercel', width: 92, height: 24 },
            { src: '/placeholder-logo-2.svg', alt: 'Stripe', width: 64, height: 24 },
            { src: '/placeholder-logo-3.svg', alt: 'Linear', width: 78, height: 24 },
          ]}
        />
      </Hero>

      <SectionDivider />

      <section id="features" className="relative">
        <GridLines />
        <FeaturesGrid title="what we do" columns={3}>
          <FeaturesGrid.Item
            number="01"
            icon={<BrainIcon />}
            title="AI Orchestration"
            description="Route prompts to the right model. Chain agents together. Handle fallbacks and retries automatically."
            href="#"
          />
          <FeaturesGrid.Item
            number="02"
            icon={<ShieldIcon />}
            title="Safety Layer"
            description="Built-in content filtering, PII detection, and output validation. Compliance-ready from day one."
            href="#"
          />
          <FeaturesGrid.Item
            number="03"
            icon={<ZapIcon />}
            title="Edge Inference"
            description="Deploy models closer to your users. Sub-100ms latency for real-time applications."
            href="#"
          />
        </FeaturesGrid>
      </section>

      <SectionDivider />

      <Stats>
        <Stats.Item value="10k+" label="Active developers" />
        <Stats.Item value="99.9%" label="Uptime SLA" />
        <Stats.Item value="<50ms" label="Median latency" />
        <Stats.Item value="2M+" label="Daily inferences" />
      </Stats>

      <SectionDivider />

      <FAQ title="common questions">
        <FAQ.Item
          question="What models does Aura support?"
          answer="Aura works with all major model providers — OpenAI, Anthropic, Google, Mistral, and any OpenAI-compatible endpoint. You can also bring your own fine-tuned models."
        />
        <FAQ.Item
          question="How does pricing work?"
          answer="We charge based on inference volume, not seats. Free tier includes 10k requests/month. Pay-as-you-go starts at $0.001 per request after that."
        />
        <FAQ.Item
          question="Can I self-host?"
          answer="Yes. Aura Cloud is our managed offering, but the core orchestration engine is open-source. Deploy it in your own VPC with our Helm charts."
        />
        <FAQ.Item question="How is this different from LangChain?">
          <p>LangChain is a framework for building LLM applications. Aura is infrastructure — it handles the operational side: routing, caching, rate limiting, monitoring, and failover. They complement each other well; many teams use LangChain on top of Aura.</p>
        </FAQ.Item>
        <FAQ.Item
          question="Do you offer enterprise support?"
          answer="Yes. Enterprise plans include dedicated support, custom SLAs, SSO/SAML, audit logs, and priority access to new features. Contact us for details."
        />
      </FAQ>

      <Footer>
        <Footer.CTA
          title="Build something real with Aura."
          ctaText="Get Early Access"
          ctaHref="#subscribe"
          secondaryText="Read the docs"
          secondaryHref="#"
        />
        <Footer.Columns>
          <Footer.Column
            title="Product"
            links={[
              { label: 'Features', href: '#features' },
              { label: 'Pricing', href: '/pricing' },
              { label: 'Documentation', href: '#' },
              { label: 'Changelog', href: '#' },
            ]}
          />
          <Footer.Column
            title="Company"
            links={[
              { label: 'About', href: '#' },
              { label: 'Blog', href: '/blog' },
              { label: 'Careers', href: '#' },
              { label: 'Contact', href: '#' },
            ]}
          />
          <Footer.Column
            title="Resources"
            links={[
              { label: 'GitHub', href: '#' },
              { label: 'Discord', href: '#' },
              { label: 'Status', href: '#' },
              { label: 'Security', href: '#' },
            ]}
          />
          <Footer.Column
            title="Legal"
            links={[
              { label: 'Privacy', href: '#' },
              { label: 'Terms', href: '#' },
              { label: 'DPA', href: '#' },
            ]}
          />
        </Footer.Columns>
        <Footer.Bottom copyright="© 2026 Aura Technologies" />
      </Footer>
    </div>
  );
}
