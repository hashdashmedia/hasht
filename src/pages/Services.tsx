import { Section } from '../components/Section';
import { PrimaryButton } from '../components/Button';
import { TrendingUp, Brain, Shield, Eye, CheckCircle2 } from 'lucide-react';

export function Services() {
  return (
    <div>
      <HeroSection />
      <ServiceDetailSection />
      <HowToWorkSection />
      <CTASection />
    </div>
  );
}

function HeroSection() {
  return (
    <section className="relative bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 py-20 md:py-32">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-4xl md:text-6xl font-bold text-gray-100 mb-6 tracking-wide">
          Services Built for Modern Brand Growth
        </h1>
        <p className="text-lg md:text-xl text-gray-300 leading-relaxed max-w-3xl mx-auto">
          We combine brand mentions, GEO optimization, and trust architecture into services that move real business metrics.
        </p>
      </div>
    </section>
  );
}

function ServiceDetailSection() {
  const services = [
    {
      icon: <TrendingUp className="w-10 h-10" />,
      title: "Brand Mention Amplification",
      description: "We identify where your buyers are, then systematically grow your presence across blogs, podcasts, communities, and curated platforms.",
      features: [
        "Mention mapping & gap analysis",
        "Outreach & placements",
        "Content collaboration strategy",
        "Brand mention tracking dashboard"
      ],
      gradient: "from-violet-500 to-purple-500"
    },
    {
      icon: <Brain className="w-10 h-10" />,
      title: "GEO (Generative Engine Optimization)",
      description: "We optimize how AI models see, understand, and reference your brand.",
      features: [
        "Brand entity definition & cleanup",
        "Knowledge graph structuring",
        "AI-optimized brand summaries & FAQs",
        "GEO reports on AI presence"
      ],
      gradient: "from-purple-500 to-sky-500"
    },
    {
      icon: <Shield className="w-10 h-10" />,
      title: "Brand Credibility Stack",
      description: "We build the assets that make you look instantly trustworthy.",
      features: [
        "Authority landing pages",
        "Case studies & proof assets",
        "Expert positioning & media bios",
        "Review & testimonial systems"
      ],
      gradient: "from-sky-500 to-violet-500"
    },
    {
      icon: <Eye className="w-10 h-10" />,
      title: "Reputation & Trust Management",
      description: "We monitor and improve how your brand is perceived in public and inside AI responses.",
      features: [
        "Sentiment analysis & repair",
        "Profile + listing optimization",
        "AI hallucination detection & fix plan",
        "Ongoing reputation monitoring"
      ],
      gradient: "from-violet-500 to-sky-500"
    }
  ];

  return (
    <Section className="bg-slate-950">
      <div className="max-w-6xl mx-auto space-y-16">
        {services.map((service, index) => (
          <div
            key={index}
            className="bg-slate-900/50 backdrop-blur-xl border border-white/10 rounded-2xl p-8 md:p-12 hover:border-violet-500/50 transition-all duration-300"
          >
            <div className="flex flex-col md:flex-row gap-8">
              <div className="flex-shrink-0">
                <div className={`w-20 h-20 rounded-2xl bg-gradient-to-br ${service.gradient} flex items-center justify-center text-white`}>
                  {service.icon}
                </div>
              </div>
              <div className="flex-1">
                <h3 className="text-2xl md:text-3xl font-bold text-gray-100 mb-4">
                  {service.title}
                </h3>
                <p className="text-lg text-gray-300 mb-6 leading-relaxed">
                  {service.description}
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {service.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-violet-400 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-400">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}

function HowToWorkSection() {
  const steps = [
    {
      number: "1",
      title: "Discovery Call",
      description: "We learn about your brand, goals, and current visibility challenges."
    },
    {
      number: "2",
      title: "Custom Proposal",
      description: "You receive a tailored growth plan with clear deliverables and timelines."
    },
    {
      number: "3",
      title: "Implementation",
      description: "We execute the strategy while keeping you informed with regular reports."
    }
  ];

  return (
    <Section
      title="How to Work With Us"
      subtitle="A simple, transparent process from start to finish"
      className="bg-gradient-to-b from-slate-950 to-slate-900"
    >
      <div className="max-w-4xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <div
              key={index}
              className="relative"
            >
              <div className="bg-slate-950/50 backdrop-blur-xl border border-white/10 rounded-2xl p-6 hover:border-violet-500/50 transition-all duration-300 hover:-translate-y-1">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-violet-500 to-sky-500 flex items-center justify-center mb-4">
                  <span className="text-xl font-bold text-white">{step.number}</span>
                </div>
                <h3 className="text-xl font-bold text-gray-100 mb-2">{step.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{step.description}</p>
              </div>
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-1/2 -right-4 w-8 h-0.5 bg-gradient-to-r from-violet-500 to-sky-500"></div>
              )}
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}

function CTASection() {
  return (
    <Section className="bg-slate-950">
      <div className="max-w-3xl mx-auto text-center bg-gradient-to-br from-violet-500/10 to-sky-500/10 border border-violet-500/20 rounded-2xl p-12">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-100 mb-4">
          Ready to Amplify Your Brand?
        </h2>
        <p className="text-lg text-gray-400 mb-8">
          Request a custom growth plan tailored to your brand's unique needs and goals.
        </p>
        <PrimaryButton>Request a Custom Growth Plan</PrimaryButton>
      </div>
    </Section>
  );
}
