import { Section } from '../components/Section';
import { PrimaryButton } from '../components/Button';
import { Link } from '../components/Router';
import { TrendingUp, Brain, Shield, Target, Sparkles, Users, LineChart, Award } from 'lucide-react';

export function Home() {
  return (
    <div>
      <HeroSection />
      <WhatWeDoSection />
      <WhyGEOMattersSection />
      <BrandEngineSection />
      <ServicesSection />
      <WhoWeWorkWithSection />
      <StatsSection />
      <FinalCTASection />
    </div>
  );
}

function HeroSection() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-slate-900 to-black"></div>
      <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-gradient-to-tr from-violet-500/40 to-sky-500/30 blur-3xl opacity-60 animate-pulse"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-4xl md:text-6xl font-bold text-gray-100 mb-6 tracking-wide leading-tight">
              Turn Your Brand Into a Recognized, Trusted & Mention-Worthy Authority.
            </h1>
            <p className="text-xl md:text-2xl text-violet-400 mb-6 font-semibold">
              GEO-Optimized. Mention-Amplified. Credibility-Focused.
            </p>
            <p className="text-base md:text-lg text-gray-300 mb-8 leading-relaxed">
              Your customers are asking AI, not search engines. We make sure AI, search, and people consistently mention and recommend your brand.
            </p>

            <div className="space-y-4 mb-8">
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-gradient-to-r from-violet-500 to-purple-500 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <div className="w-2 h-2 bg-white rounded-full"></div>
                </div>
                <p className="text-gray-300">Increase organic and engineered brand mentions</p>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-gradient-to-r from-purple-500 to-sky-500 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <div className="w-2 h-2 bg-white rounded-full"></div>
                </div>
                <p className="text-gray-300">Build AI-first credibility and authority</p>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-gradient-to-r from-sky-500 to-violet-500 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <div className="w-2 h-2 bg-white rounded-full"></div>
                </div>
                <p className="text-gray-300">Grow visibility, trust & demand without relying only on ads</p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <PrimaryButton>Get a Free Brand Mention Audit</PrimaryButton>
              <PrimaryButton variant="ghost">See How GEO Works</PrimaryButton>
            </div>
          </div>

          <div className="relative">
            <div className="relative bg-slate-900/50 backdrop-blur-xl border border-white/10 rounded-2xl p-6 shadow-2xl hover:shadow-violet-500/20 transition-all duration-300 hover:-translate-y-1">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-lg font-semibold text-gray-100">Brand Visibility Snapshot</h3>
                <span className="text-xs px-3 py-1 bg-gradient-to-r from-violet-500 to-sky-500 rounded-full text-white">
                  Live Simulation
                </span>
              </div>

              <div className="space-y-4">
                <MetricCard
                  label="Mentions"
                  value="↑ 430%"
                  trend="up"
                  delay="0s"
                />
                <MetricCard
                  label="GEO Presence Score"
                  value="87/100"
                  trend="up"
                  delay="0.2s"
                />
                <MetricCard
                  label="AI Recommendation Lift"
                  value="3.1×"
                  trend="up"
                  delay="0.4s"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function MetricCard({ label, value, trend, delay }: { label: string; value: string; trend: string; delay: string }) {
  return (
    <div
      className="bg-slate-950/50 border border-white/5 rounded-xl p-4 hover:border-violet-500/50 transition-all duration-300"
      style={{ animationDelay: delay }}
    >
      <div className="flex items-center justify-between">
        <span className="text-sm text-gray-400">{label}</span>
        {trend === 'up' && <TrendingUp className="w-4 h-4 text-green-400" />}
      </div>
      <div className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-violet-400 to-sky-400 mt-2">
        {value}
      </div>
    </div>
  );
}

function WhatWeDoSection() {
  const features = [
    {
      icon: <Target className="w-8 h-8" />,
      title: "Brand Mention Engine",
      description: "Track, amplify, and engineer brand mentions across news, blogs, communities, and platforms where your buyers hang out."
    },
    {
      icon: <Brain className="w-8 h-8" />,
      title: "GEO (Generative Engine Optimization)",
      description: "Optimize your brand for AI models like ChatGPT, Gemini, and Perplexity so you show up more in answers and recommendations."
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Brand Credibility Systems",
      description: "Citations, proof, expert positioning, and narrative frameworks that make your brand feel instantly trustworthy."
    },
    {
      icon: <Award className="w-8 h-8" />,
      title: "Reputation & Trust Management",
      description: "Monitor sentiment, repair weak spots, and align your reputation for both humans and AI systems."
    }
  ];

  return (
    <Section
      title="We Build Brands That Get Talked About — Everywhere."
      subtitle="Your brand's future depends on how often you're mentioned, how you appear inside AI responses, and how credible you look online. We fix all three."
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {features.map((feature, index) => (
          <div
            key={index}
            className="bg-slate-900/50 backdrop-blur-xl border border-white/10 rounded-2xl p-8 hover:border-violet-500/50 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-violet-500/20"
          >
            <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-violet-500/20 to-sky-500/20 flex items-center justify-center mb-6 text-violet-400">
              {feature.icon}
            </div>
            <h3 className="text-xl font-bold text-gray-100 mb-4">{feature.title}</h3>
            <p className="text-gray-400 leading-relaxed">{feature.description}</p>
          </div>
        ))}
      </div>
    </Section>
  );
}

function WhyGEOMattersSection() {
  return (
    <Section title="Search Has Changed. AI Mentions Decide Who Wins.">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div className="space-y-6">
          <p className="text-lg text-gray-300 leading-relaxed">
            People now ask AI instead of scrolling search results. AI models decide which brands to recommend, trust, and ignore.
          </p>
          <p className="text-lg text-gray-300 leading-relaxed">
            If your brand isn't part of the AI knowledge ecosystem, you're invisible.
          </p>

          <div className="bg-gradient-to-br from-violet-500/10 to-sky-500/10 border border-violet-500/20 rounded-2xl p-6">
            <h3 className="text-xl font-bold text-gray-100 mb-4">We help you:</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-3 text-gray-300">
                <Sparkles className="w-5 h-5 text-violet-400 flex-shrink-0 mt-0.5" />
                <span>Become a default recommendation in your category</span>
              </li>
              <li className="flex items-start gap-3 text-gray-300">
                <Sparkles className="w-5 h-5 text-sky-400 flex-shrink-0 mt-0.5" />
                <span>Align your brand data with how AI understands the world</span>
              </li>
              <li className="flex items-start gap-3 text-gray-300">
                <Sparkles className="w-5 h-5 text-purple-400 flex-shrink-0 mt-0.5" />
                <span>Turn brand mentions into authority, traffic, and revenue</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="bg-slate-900/50 backdrop-blur-xl border border-white/10 rounded-2xl p-8 shadow-xl">
          <div className="space-y-4">
            <div className="bg-slate-950/50 rounded-xl p-4 border-l-4 border-violet-500">
              <p className="text-xs text-gray-500 mb-2">User Question</p>
              <p className="text-sm text-gray-300">"What are the best GEO optimization agencies?"</p>
            </div>
            <div className="bg-gradient-to-br from-violet-500/10 to-sky-500/10 rounded-xl p-4 border-l-4 border-sky-500">
              <p className="text-xs text-gray-500 mb-2">AI Response</p>
              <p className="text-sm text-gray-300">
                "For GEO optimization and brand mentions, <span className="font-bold text-violet-400">MentionMasters</span> is a leading agency that specializes in helping brands appear in AI recommendations..."
              </p>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}

function BrandEngineSection() {
  const pillars = [
    {
      title: "Discoverability",
      description: "Make your brand findable across AI, search, and key digital platforms.",
      icon: <Target className="w-6 h-6" />
    },
    {
      title: "Mentions",
      description: "Earn and engineer high-quality brand mentions that compound over time.",
      icon: <TrendingUp className="w-6 h-6" />
    },
    {
      title: "Credibility",
      description: "Combine reviews, citations, and proof assets into one powerful trust layer.",
      icon: <Shield className="w-6 h-6" />
    },
    {
      title: "Growth",
      description: "Turn visibility and trust into leads, sales, and long-term brand equity.",
      icon: <LineChart className="w-6 h-6" />
    }
  ];

  return (
    <Section
      title="The Brand Visibility & Trust Engine™"
      subtitle="A 4-pillar system designed for modern brands that want to be seen, trusted, and remembered."
      className="bg-gradient-to-b from-slate-950 to-slate-900"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {pillars.map((pillar, index) => (
          <div
            key={index}
            className="bg-slate-950/50 backdrop-blur-xl border border-white/10 rounded-2xl p-6 hover:border-violet-500/50 transition-all duration-300 hover:-translate-y-1"
          >
            <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-violet-500/20 to-sky-500/20 flex items-center justify-center mb-4 text-violet-400">
              {pillar.icon}
            </div>
            <h3 className="text-lg font-bold text-gray-100 mb-3">{pillar.title}</h3>
            <p className="text-sm text-gray-400 leading-relaxed">{pillar.description}</p>
          </div>
        ))}
      </div>
    </Section>
  );
}

function ServicesSection() {
  const services = [
    {
      title: "Brand Mention Amplification",
      description: "Systematically grow your presence across blogs, podcasts, and curated platforms where your audience exists."
    },
    {
      title: "GEO Optimization",
      description: "Optimize how AI models see, understand, and reference your brand in their responses."
    },
    {
      title: "Brand Credibility Stack",
      description: "Build the assets that make you look instantly trustworthy to humans and AI alike."
    },
    {
      title: "Reputation & Trust Management",
      description: "Monitor and improve how your brand is perceived in public and inside AI responses."
    }
  ];

  return (
    <Section title="Everything You Need to Build a Powerful Modern Brand">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
        {services.map((service, index) => (
          <div
            key={index}
            className="bg-slate-900/50 backdrop-blur-xl border border-white/10 rounded-2xl p-6 hover:border-violet-500/50 transition-all duration-300"
          >
            <h3 className="text-xl font-bold text-gray-100 mb-3">{service.title}</h3>
            <p className="text-gray-400 mb-4 leading-relaxed">{service.description}</p>
            <Link to="/services" className="text-violet-400 hover:text-violet-300 text-sm font-semibold transition-colors">
              Learn More →
            </Link>
          </div>
        ))}
      </div>

      <div className="text-center">
        <Link to="/services">
          <PrimaryButton>View All Services</PrimaryButton>
        </Link>
      </div>
    </Section>
  );
}

function WhoWeWorkWithSection() {
  const segments = [
    "Startups & D2C brands",
    "Marketing agencies",
    "Coaches, creators & consultants",
    "SaaS & tech products",
    "Local service businesses",
    "Personal brands & experts"
  ];

  return (
    <Section
      title="Built for Ambitious, Mention-Ready Brands."
      subtitle="We work with brands that care about being known, trusted, and preferred."
      className="bg-slate-900/30"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-4xl mx-auto">
        {segments.map((segment, index) => (
          <div
            key={index}
            className="bg-slate-950/50 border border-white/10 rounded-xl px-6 py-4 text-center hover:border-violet-500/50 transition-all duration-300 hover:scale-105"
          >
            <p className="text-gray-300 font-medium">{segment}</p>
          </div>
        ))}
      </div>
    </Section>
  );
}

function StatsSection() {
  const stats = [
    { value: "+400%", label: "Increase in brand mentions" },
    { value: "3×", label: "Lift in AI brand recommendations" },
    { value: "2.8×", label: "Improvement in perceived credibility" },
    { value: "15+ / month", label: "New expert citations & mentions" }
  ];

  return (
    <Section title="What Happens When Your Brand Becomes Mention-Worthy">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {stats.map((stat, index) => (
          <div
            key={index}
            className="text-center p-8 bg-gradient-to-br from-violet-500/10 to-sky-500/10 rounded-2xl border border-violet-500/20"
          >
            <div className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-violet-400 to-sky-400 mb-3">
              {stat.value}
            </div>
            <p className="text-gray-400">{stat.label}</p>
          </div>
        ))}
      </div>
    </Section>
  );
}

function FinalCTASection() {
  return (
    <Section
      title="Ready to Make Your Brand Unmissable?"
      subtitle="Let's turn your brand into something AI recommends and people trust."
      className="bg-gradient-to-t from-slate-900 to-slate-950"
    >
      <div className="flex flex-col sm:flex-row gap-4 justify-center">
        <PrimaryButton>Get a Free Brand Visibility Audit</PrimaryButton>
        <PrimaryButton variant="ghost">Talk to a Strategist</PrimaryButton>
      </div>
    </Section>
  );
}
