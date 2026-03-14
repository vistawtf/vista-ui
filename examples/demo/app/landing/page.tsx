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

/* ────────────── Icons ────────────── */

function BrainIcon() {
  return (
    <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M9.5 2A2.5 2.5 0 0 1 12 4.5v15a2.5 2.5 0 0 1-4.96-.46 2.5 2.5 0 0 1-2.96-3.08 3 3 0 0 1-.34-5.58 2.5 2.5 0 0 1 1.32-4.24 2.5 2.5 0 0 1 1.98-3A2.5 2.5 0 0 1 9.5 2Z"/>
      <path d="M14.5 2A2.5 2.5 0 0 0 12 4.5v15a2.5 2.5 0 0 0 4.96-.46 2.5 2.5 0 0 0 2.96-3.08 3 3 0 0 0 .34-5.58 2.5 2.5 0 0 0-1.32-4.24 2.5 2.5 0 0 0-1.98-3A2.5 2.5 0 0 0 14.5 2Z"/>
    </svg>
  );
}

function MegaphoneIcon() {
  return (
    <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="m3 11 19-9-9 19-2-8-8-2z"/>
    </svg>
  );
}

function TrendingIcon() {
  return (
    <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="22 7 13.5 15.5 8.5 10.5 2 17"/>
      <polyline points="16 7 22 7 22 13"/>
    </svg>
  );
}

function GlobeIcon() {
  return (
    <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="10"/>
      <path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"/>
      <path d="M2 12h20"/>
    </svg>
  );
}

function BookOpenIcon() {
  return (
    <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/>
      <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/>
    </svg>
  );
}

function UsersIcon() {
  return (
    <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/>
      <circle cx="9" cy="7" r="4"/>
      <path d="M22 21v-2a4 4 0 0 0-3-3.87"/>
      <path d="M16 3.13a4 4 0 0 1 0 7.75"/>
    </svg>
  );
}


function XIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" fill="currentColor" />
    </svg>
  );
}

function SubstackIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
      <path d="M22.539 8.242H1.46V5.406h21.08v2.836zM1.46 10.812V24L12 18.11 22.54 24V10.812H1.46zM22.54 0H1.46v2.836h21.08V0z" fill="currentColor" />
    </svg>
  );
}

function TelegramIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
      <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z" fill="currentColor" />
    </svg>
  );
}

/* ────────────── Decorative shape components ────────────── */

function RingShape({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 200 200"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx="100" cy="100" r="90" stroke="#FF5233" strokeWidth="1.5" />
      <circle cx="100" cy="100" r="70" stroke="#FF5233" strokeWidth="0.75" strokeDasharray="4 6" />
      <circle cx="100" cy="100" r="50" stroke="#FF5233" strokeWidth="0.5" />
    </svg>
  );
}


/* ────────────── Newsletter section (inline — no @vistawtf/ui equivalent) ────────────── */

function NewsletterSection() {
  return (
    <section
      id="newsletter"
      className="relative w-full py-24 md:py-32 bg-[#111111] text-[#E4E2D8] overflow-hidden"
    >
      {/* Background decoration */}
      <div
        className="absolute inset-0 opacity-30"
        style={{
          background:
            'radial-gradient(ellipse 80% 60% at 80% 50%, rgba(255,82,51,0.15) 0%, transparent 70%)',
        }}
        aria-hidden="true"
      />

      {/* Grid lines on dark bg */}
      <div className="absolute inset-0 max-w-[1200px] mx-auto pointer-events-none" aria-hidden="true">
        <div className="absolute left-6 md:left-16 top-0 bottom-0 w-px bg-white/[0.04]" />
        <div className="absolute right-6 md:right-16 top-0 bottom-0 w-px bg-white/[0.04]" />
      </div>

      <div className="relative z-10 max-w-[1200px] mx-auto px-6 md:px-16">
        <div className="max-w-[640px]">
          {/* Kicker */}
          <div className="flex items-center gap-3 mb-6">
            <span className="text-[11px] font-semibold uppercase tracking-[0.12em] text-[#999999] font-mono">
              EMERGENT STACK · ETH LATAM
            </span>
            <span className="bg-white/[0.08] border border-white/[0.15] rounded-full px-3 py-1 text-[13px] font-semibold text-[#E4E2D8]">
              10k+ subscribers
            </span>
          </div>

          {/* Headline */}
          <h2
            className="font-medium text-[#E4E2D8] leading-tight mb-6"
            style={{ fontSize: 'clamp(1.75rem, 4vw, 2.75rem)', letterSpacing: '-0.02em' }}
          >
            Less scrolling.{' '}
            <span style={{ color: '#FF5233' }}>More signal.</span>
            <br />
            The blockchain + AI newsletter for builders.
          </h2>

          {/* Bullets */}
          <ul className="mb-8 space-y-2 text-[#E4E2D8]/80 text-[15px] md:text-base">
            {[
              'Curated signals, without the noise.',
              'Built for operators shipping across LatAm.',
              'Read in minutes, relevant all week.',
            ].map((item) => (
              <li key={item} className="flex items-start gap-2">
                <span className="text-[#FF5233] mt-[2px] text-[18px] leading-none">›</span>
                {item}
              </li>
            ))}
          </ul>

          {/* Form */}
          <form
            className="flex flex-col sm:flex-row gap-3 max-w-[560px]"
            onSubmit={(e) => e.preventDefault()}
          >
            <input
              type="email"
              className="flex-1 min-h-[52px] px-5 bg-white/[0.08] border border-white/[0.15] rounded-[3px] text-[#EDEDED] text-[15px] placeholder:text-[#999999] focus:outline-none focus:border-[#FF5233] transition-colors"
              placeholder="you@company.com"
              required
            />
            <button
              type="submit"
              className="h-[52px] px-6 bg-[#FF5233] text-white rounded-[3px] text-[13px] font-semibold uppercase tracking-wider hover:bg-[#E64A2E] transition-colors duration-200 whitespace-nowrap"
            >
              Subscribe →
            </button>
          </form>

          <p className="mt-4 text-[13px] text-white/40">
            A collaboration between <span className="text-[#FF5233]">vista</span> and arco.lat
          </p>
        </div>
      </div>
    </section>
  );
}

/* ────────────── Projects section ────────────── */

const projects = [
  {
    name: 'OpenClaw Starter Pack',
    tag: 'Open Source',
    tagColor: '#B2FF59',
    description:
      'A complete AI agent setup kit. Deploy your own personal AI in 20 minutes — no PhD required. Covers OpenClaw config, skills, memory, and Telegram integration.',
    href: 'https://vistawtf.github.io/openclaw-easy-setup/',
    status: 'Live',
  },
  {
    name: 'Emergent Stack',
    tag: 'Newsletter',
    tagColor: '#FF5233',
    description:
      'Weekly blockchain + AI intelligence for builders in LatAm. Co-produced with arco.lat and backed by ETH LatAm. 10k+ subscribers and growing.',
    href: '#newsletter',
    status: 'Active',
  },
  {
    name: 'Vista Research',
    tag: 'Research',
    tagColor: '#448AFF',
    description:
      'Deep-dive reports on emerging protocols, AI infrastructure, and tokenomics. Built for investors and founders who need signal without the noise.',
    href: '#',
    status: 'Ongoing',
  },
];

function ProjectCard({
  project,
}: {
  project: (typeof projects)[0];
}) {
  return (
    <div className="relative flex flex-col h-full p-8 border border-[#E4E2D8] rounded-[3px] bg-[#FAFAFA] transition-all duration-300 hover:-translate-y-1 hover:border-[#FF5233] hover:shadow-[0_8px_24px_rgba(0,0,0,0.06)] group">
      {/* Tag */}
      <div className="flex items-center justify-between mb-4">
        <span
          className="text-[10px] font-semibold uppercase tracking-[0.1em] px-2 py-1 rounded-[2px] font-mono"
          style={{
            color: project.tagColor === '#B2FF59' ? '#3a5a00' : project.tagColor === '#448AFF' ? '#1a3a80' : '#FF5233',
            background:
              project.tagColor === '#B2FF59'
                ? 'rgba(178,255,89,0.15)'
                : project.tagColor === '#448AFF'
                ? 'rgba(68,138,255,0.1)'
                : 'rgba(255,82,51,0.08)',
            border: `1px solid ${project.tagColor}33`,
          }}
        >
          {project.tag}
        </span>
        <span className="text-[10px] font-mono text-[#999] uppercase tracking-wider">
          <span className="inline-block w-[6px] h-[6px] rounded-full bg-[#4CAF50] mr-1.5 align-middle" />
          {project.status}
        </span>
      </div>

      {/* Title */}
      <h3 className="text-[22px] font-medium text-[#111] mb-3 group-hover:text-[#FF5233] transition-colors">
        {project.name}
      </h3>

      {/* Description */}
      <p className="text-[14px] text-[#575757] leading-relaxed flex-1 mb-5">
        {project.description}
      </p>

      {/* CTA */}
      <a
        href={project.href}
        target={project.href.startsWith('http') ? '_blank' : undefined}
        rel={project.href.startsWith('http') ? 'noopener noreferrer' : undefined}
        className="inline-flex items-center text-[12px] font-mono font-semibold uppercase tracking-[0.06em] text-[#FF5233] hover:gap-2 transition-all"
      >
        Explore →
      </a>
    </div>
  );
}

function ProjectsSection() {
  return (
    <section id="projects" className="relative bg-[#FAFAFA] py-[clamp(80px,10vh,120px)]">
      <GridLines />
      <div className="relative z-10 max-w-[1200px] mx-auto px-6 md:px-16">
        {/* Header */}
        <div className="mb-12">
          <p className="text-[11px] font-semibold uppercase tracking-[0.12em] text-[#999999] font-mono mb-3">
            What we ship
          </p>
          <h2
            className="font-medium text-[#111111] lowercase"
            style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', letterSpacing: '-0.02em', lineHeight: 1.1 }}
          >
            our projects
          </h2>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {projects.map((p) => (
            <ProjectCard key={p.name} project={p} />
          ))}
        </div>
      </div>
    </section>
  );
}

/* ────────────── Community section ────────────── */

function CommunitySection() {
  return (
    <section id="community" className="relative bg-[#111111] py-[clamp(80px,10vh,120px)] overflow-hidden">
      {/* Subtle radial glow */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] rounded-full opacity-10 pointer-events-none"
        style={{ background: 'radial-gradient(ellipse, #FF5233 0%, transparent 70%)' }}
        aria-hidden="true"
      />

      <div className="relative z-10 max-w-[1200px] mx-auto px-6 md:px-16">
        {/* Header */}
        <div className="max-w-[640px] mb-12">
          <p className="text-[11px] font-semibold uppercase tracking-[0.12em] text-[#666] font-mono mb-3">
            La comunidad
          </p>
          <h2
            className="font-medium text-[#E4E2D8] lowercase mb-4"
            style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', letterSpacing: '-0.02em', lineHeight: 1.1 }}
          >
            blockchain en español
          </h2>
          <p className="text-[15px] md:text-[17px] text-[#888] leading-relaxed">
            Vista anchors the largest Spanish-language blockchain + AI community in LatAm.
            Whether you&apos;re a developer, researcher, or investor — there&apos;s a seat at the table.
          </p>
        </div>

        {/* Community pillars */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-0 border border-white/[0.08] rounded-[3px]">
          {[
            {
              icon: <UsersIcon />,
              title: 'Open Community',
              description:
                'Join thousands of builders, investors, and researchers on Telegram. Real conversations, no hype.',
              cta: 'Join Telegram →',
              href: 'https://t.me/vistawtf',
            },
            {
              icon: <BookOpenIcon />,
              title: 'Curated Learning',
              description:
                'Guides, threads, and research in Spanish. We make the frontier accessible for LatAm builders.',
              cta: 'Read the blog →',
              href: '#',
            },
            {
              icon: <GlobeIcon />,
              title: 'LatAm Network',
              description:
                'From Buenos Aires to Mexico City to Madrid — Vista connects the Spanish-speaking Web3 ecosystem.',
              cta: 'Our events →',
              href: '#',
            },
          ].map((item, i) => (
            <div
              key={item.title}
              className={`flex flex-col p-8 md:p-10 ${i < 2 ? 'border-b md:border-b-0 md:border-r border-white/[0.08]' : ''}`}
            >
              <div className="text-[#FF5233] mb-6 [&>svg]:w-10 [&>svg]:h-10 [&>svg]:stroke-[1.5]">
                {item.icon}
              </div>
              <h3 className="text-[18px] font-medium text-[#E4E2D8] mb-3">{item.title}</h3>
              <p className="text-[14px] text-[#888] leading-relaxed flex-1 mb-5">{item.description}</p>
              <a
                href={item.href}
                target={item.href.startsWith('http') ? '_blank' : undefined}
                rel={item.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                className="inline-flex items-center text-[12px] font-mono font-semibold uppercase tracking-[0.06em] text-[#FF5233] hover:opacity-70 transition-opacity"
              >
                {item.cta}
              </a>
            </div>
          ))}
        </div>

        {/* Social proof numbers */}
        <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-10 pt-10 border-t border-white/[0.08]">
          {[
            { value: '10k+', label: 'Newsletter subscribers' },
            { value: '5k+', label: 'Telegram members' },
            { value: '3+', label: 'Years building' },
            { value: 'LATAM', label: 'First community' },
          ].map((stat) => (
            <div key={stat.label}>
              <div
                className="font-medium text-[#E4E2D8] tabular-nums"
                style={{ fontSize: 'clamp(1.75rem, 3vw, 2.5rem)', letterSpacing: '-0.03em', lineHeight: 1 }}
              >
                {stat.value}
              </div>
              <div className="mt-2 text-[13px] text-[#666]">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ────────────── Page ────────────── */

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-[#FAFAFA]">
      {/* ── Navbar ── */}
      <Navbar sticky>
        <Navbar.Logo src="/vista-logo.svg" alt="Vista" href="/" />
        <Navbar.Links
          items={[
            { label: 'Services', href: '#services' },
            { label: 'Projects', href: '#projects' },
            { label: 'Community', href: '#community' },
            { label: 'Newsletter', href: '#newsletter' },
          ]}
        />
        <Navbar.CTA href="#newsletter" variant="primary">
          Subscribe
        </Navbar.CTA>
        <Navbar.MobileMenu />
      </Navbar>

      {/* ── Hero ── */}
      <div className="relative bg-[#FFFFFF] overflow-hidden" style={{ minHeight: '680px' }}>
        {/* Decorative background — positioned relative to this wrapper, right side only */}
        <div
          className="hidden md:block absolute pointer-events-none select-none"
          aria-hidden="true"
          style={{ top: '80px', right: '-60px', width: '400px', height: '400px' }}
        >
          <RingShape className="w-full h-full opacity-50" />
        </div>

        <Hero>
        <Hero.Kicker>Research · AI · Blockchain</Hero.Kicker>
        <Hero.Title>
          <span
            style={{
              textDecorationLine: 'underline',
              textDecorationColor: '#FF5233',
              textDecorationThickness: '2px',
              textUnderlineOffset: '0.20em',
            }}
          >
            vista
          </span>{' '}
          investigates
          <br />
          the future of the
          <br />
          internet
        </Hero.Title>
        <Hero.Subtitle>
          A research hub for builders, investors, and explorers in blockchain and AI.
        </Hero.Subtitle>
        <Hero.Actions>
          <Button variant="primary" size="lg" asChild>
            <a href="#newsletter">Subscribe</a>
          </Button>
          <Button variant="secondary" size="lg" asChild>
            <a href="#services">See what we do →</a>
          </Button>
        </Hero.Actions>
        <Hero.TrustedBy
          label="Trusted by"
          logos={[
            { src: '/placeholder-logo-1.svg', alt: 'ApeCo', width: 92, height: 24, href: 'https://apechain.com' },
            { src: '/placeholder-logo-2.svg', alt: 'Obol', width: 64, height: 24, href: 'https://obol.org' },
            { src: '/placeholder-logo-3.svg', alt: 'Arco', width: 78, height: 24, href: 'https://arco.lat' },
          ]}
        />
        </Hero>
      </div>
      


      <SectionDivider />

      {/* ── Services ── */}
      <section id="services" className="relative">
        <GridLines />
        <FeaturesGrid title="what we do" columns={3}>
          <FeaturesGrid.Item
            number="01"
            icon={<BrainIcon />}
            title="AI Training"
            description="Custom AI models trained on your data. Fine-tuning LLMs, building agent systems, and deploying AI infrastructure that actually ships."
            href="#"
          />
          <FeaturesGrid.Item
            number="02"
            icon={<MegaphoneIcon />}
            title="Marketing Campaigns"
            description="Research-backed strategies that cut through the noise. We run campaigns for protocols, startups, and research teams who want real reach."
            href="#"
          />
          <FeaturesGrid.Item
            number="03"
            icon={<TrendingIcon />}
            title="Protocol Growth"
            description="Growth for blockchain protocols: community building, tokenomics design, ecosystem expansion, and LatAm market entry."
            href="#"
          />
        </FeaturesGrid>
      </section>

      <SectionDivider />

      {/* ── Stats ── */}
      <Stats>
        <Stats.Item value="10k+" label="Newsletter subscribers" />
        <Stats.Item value="5k+" label="Community members" />
        <Stats.Item value="3+" label="Years of research" />
        <Stats.Item value="LATAM" label="First mover" />
      </Stats>

      <SectionDivider />

      {/* ── Newsletter ── */}
      <NewsletterSection />

      {/* ── Projects ── */}
      <ProjectsSection />

      <SectionDivider />

      {/* ── Community ── */}
      <CommunitySection />

      <SectionDivider />

      {/* ── FAQ ── */}
      <section id="faq" className="relative">
        <GridLines />
        <FAQ title="common questions">
          <FAQ.Item
            question="What exactly does Vista do?"
            answer="Vista is a research collective at the intersection of blockchain and AI. We publish weekly intelligence (Emergent Stack newsletter), run growth campaigns for protocols, train custom AI systems, and anchor the largest Spanish-language Web3 community in LatAm."
          />
          <FAQ.Item
            question="Who is the newsletter for?"
            answer="Builders, investors, and operators who work at the intersection of blockchain and AI — especially those building in or for LatAm. We write in English and Spanish depending on the content."
          />
          <FAQ.Item
            question="How can we work with Vista?"
            answer="Reach out via the contact link in the footer. We work with protocols on growth strategy, with startups on AI systems, and with research teams on content and distribution."
          />
          <FAQ.Item
            question="What is OpenClaw Starter Pack?"
            answer="It's our open-source kit for setting up a personal AI agent in under 20 minutes. Built on OpenClaw, it gives non-technical users a working AI assistant with memory, skills, and Telegram integration — out of the box."
          />
          <FAQ.Item
            question="Is Vista's community only in Spanish?"
            answer="Our Telegram community and a significant chunk of our content is in Spanish, serving the LatAm ecosystem. We also publish in English. The goal is to make frontier knowledge accessible regardless of language."
          />
        </FAQ>
      </section>

      <SectionDivider />

      {/* ── Footer ── */}
      <Footer>
        <Footer.CTA
          title="Build something useful with Vista."
          ctaText="Work with Vista →"
          ctaHref="mailto:hola@vista.wtf"
          secondaryText="Learn more"
          secondaryHref="#"
        />
        <Footer.Columns>
          <Footer.Column
            title="Vista"
            links={[
              { label: 'Services', href: '#services' },
              { label: 'Projects', href: '#projects' },
              { label: 'Community', href: '#community' },
              { label: 'Newsletter', href: '#newsletter' },
            ]}
          />
          <Footer.Column
            title="Research"
            links={[
              { label: 'Emergent Stack', href: '#newsletter' },
              { label: 'Vista Blog', href: '#' },
              { label: 'OpenClaw Starter Pack', href: 'https://vistawtf.github.io/openclaw-easy-setup/' },
              { label: 'GitHub', href: 'https://github.com/vistawtf' },
            ]}
          />
          <Footer.Column
            title="Community"
            links={[
              { label: 'Telegram', href: 'https://t.me/vistawtf' },
              { label: 'Twitter / X', href: 'https://x.com/vistawtf' },
              { label: 'Substack', href: 'https://vistawtf.substack.com' },
              { label: 'ETH LatAm', href: 'https://ethlatam.org' },
            ]}
          />
          <Footer.Column
            title="Contact"
            links={[
              { label: 'hola@vista.wtf', href: 'mailto:hola@vista.wtf' },
              { label: 'Work with us', href: 'mailto:hola@vista.wtf' },
              { label: 'Press', href: 'mailto:hola@vista.wtf' },
            ]}
          />
        </Footer.Columns>
        <Footer.Bottom
          copyright="© 2026 Vista"
          socials={[
            {
              label: 'X (Twitter)',
              href: 'https://x.com/vistawtf',
              icon: <XIcon className="w-5 h-5" />,
            },
            {
              label: 'Substack',
              href: 'https://vistawtf.substack.com',
              icon: <SubstackIcon className="w-5 h-5" />,
            },
            {
              label: 'Telegram',
              href: 'https://t.me/vistawtf',
              icon: <TelegramIcon className="w-5 h-5" />,
            },
          ]}
        />
      </Footer>
    </div>
  );
}
