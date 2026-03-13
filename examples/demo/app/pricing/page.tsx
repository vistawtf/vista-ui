'use client';

import {
  Navbar,
  Hero,
  Card,
  FAQ,
  Footer,
  SectionDivider,
} from '@vistawtf/ui';

export default function PricingPage() {
  return (
    <div className="min-h-screen">
      <Navbar sticky>
        <Navbar.Logo src="/aura-logo.svg" alt="Aura" href="/" />
        <Navbar.Links
          items={[
            { label: 'Features', href: '/landing#features' },
            { label: 'Pricing', href: '/pricing', active: true },
            { label: 'Blog', href: '/blog' },
            { label: 'Docs', href: '#' },
          ]}
        />
        <Navbar.CTA href="#" variant="primary">
          Get Started
        </Navbar.CTA>
        <Navbar.MobileMenu />
      </Navbar>

      <Hero
        kicker="Pricing"
        title="Simple, transparent pricing"
        subtitle="Start free. Scale as you grow. No hidden fees, no per-seat charges. You only pay for what you use."
      />

      <SectionDivider />

      <section className="vista-section bg-[var(--background)]">
        <div className="vista-container">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-[960px] mx-auto">
            <Card
              variant="pricing"
              plan="Free"
              price="$0"
              period="/mo"
              features={[
                '10,000 requests/month',
                '2 active agents',
                'Community support',
                'Basic analytics',
                '100ms latency SLA',
              ]}
              ctaText="Start Free"
              ctaHref="#"
            />
            <Card
              variant="pricing"
              plan="Pro"
              price="$49"
              period="/mo"
              highlighted
              features={[
                '500,000 requests/month',
                'Unlimited agents',
                'Priority support',
                'Advanced analytics',
                '50ms latency SLA',
                'Custom model endpoints',
                'Webhook integrations',
              ]}
              ctaText="Start Pro Trial"
              ctaHref="#"
            />
            <Card
              variant="pricing"
              plan="Enterprise"
              price="Custom"
              features={[
                'Unlimited requests',
                'Unlimited agents',
                'Dedicated support engineer',
                'Custom SLA',
                'Self-hosted option',
                'SSO / SAML',
                'Audit logs',
                'SOC 2 compliance',
              ]}
              ctaText="Contact Sales"
              ctaHref="#"
            />
          </div>
        </div>
      </section>

      <SectionDivider />

      <FAQ title="pricing questions">
        <FAQ.Item
          question="Can I switch plans anytime?"
          answer="Yes. Upgrade or downgrade at any time. Changes take effect at the start of the next billing cycle. If you upgrade mid-cycle, you'll get pro-rated access immediately."
        />
        <FAQ.Item
          question="What happens if I exceed my request limit?"
          answer="We won't cut you off. Requests beyond your plan limit are charged at $0.001 each. You'll get an email when you hit 80% and 100% of your limit."
        />
        <FAQ.Item
          question="Is there a startup discount?"
          answer="Yes. If you've raised less than $5M and are less than 3 years old, you qualify for 50% off Pro for 12 months. Email us with your details."
        />
        <FAQ.Item
          question="Do you offer annual billing?"
          answer="Annual billing gives you 2 months free (pay for 10, get 12). Available on Pro and Enterprise plans."
        />
      </FAQ>

      <Footer>
        <Footer.CTA
          title="Ready to start building?"
          ctaText="Get Started Free"
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
