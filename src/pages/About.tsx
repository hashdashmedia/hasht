import { Section } from '../components/Section';
import { PrimaryButton } from '../components/Button';
import { Target, Lightbulb, Rocket, Users } from 'lucide-react';

export function About() {
  return (
    <div>
      <HeroSection />
      <MissionSection />
      <PhilosophySection />
      <HowWeWorkSection />
      <TeamSection />
      <CTASection />
    </div>
  );
}

function HeroSection() {
  return (
    <section className="relative bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 py-20 md:py-32">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-4xl md:text-6xl font-bold text-gray-100 mb-6 tracking-wide">
          About MentionMasters
        </h1>
        <p className="text-lg md:text-xl text-gray-300 leading-relaxed max-w-3xl mx-auto">
          We're a GEO and brand mention agency built for the age of AI-first discovery. Traditional SEO is no longer enough — the brands that win are the ones AI chooses to mention.
        </p>
      </div>
    </section>
  );
}

function MissionSection() {
  return (
    <Section
      title="Our Mission"
      className="bg-slate-950"
    >
      <div className="max-w-4xl mx-auto">
        <div className="bg-gradient-to-br from-violet-500/10 to-sky-500/10 border border-violet-500/20 rounded-2xl p-8 md:p-12">
          <div className="flex items-start gap-4 mb-6">
            <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-violet-500 to-sky-500 flex items-center justify-center flex-shrink-0">
              <Target className="w-8 h-8 text-white" />
            </div>
            <div>
              <p className="text-xl md:text-2xl text-gray-100 leading-relaxed">
                To make credible brands impossible to ignore — by aligning how they appear in search, social, and AI models.
              </p>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}

function PhilosophySection() {
  const principles = [
    "Mentions > clicks",
    "Credibility compounds",
    "AI is the new distribution layer",
    "Brand is a data problem and a story problem"
  ];

  return (
    <Section
      title="Our Philosophy"
      subtitle="The principles that guide everything we do"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
        {principles.map((principle, index) => (
          <div
            key={index}
            className="bg-slate-900/50 backdrop-blur-xl border border-white/10 rounded-2xl p-6 hover:border-violet-500/50 transition-all duration-300 hover:-translate-y-1"
          >
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-violet-500/20 to-sky-500/20 flex items-center justify-center flex-shrink-0">
                <Lightbulb className="w-6 h-6 text-violet-400" />
              </div>
              <p className="text-lg font-semibold text-gray-100">{principle}</p>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}

function HowWeWorkSection() {
  const steps = [
    {
      number: "01",
      title: "Audit",
      description: "Brand mentions + GEO + credibility score",
      details: "We analyze your current brand presence across AI models, search engines, and digital platforms. You'll get a comprehensive visibility score and actionable insights."
    },
    {
      number: "02",
      title: "Blueprint",
      description: "Visibility & Trust Engine™ rollout plan",
      details: "We create a custom strategy that maps exactly how to increase your brand mentions, optimize for AI recommendations, and build unshakeable credibility."
    },
    {
      number: "03",
      title: "Execution",
      description: "Content, mentions, citations, reputation",
      details: "We implement the plan with precision — creating content, securing mentions, building citations, and managing your reputation across all channels."
    }
  ];

  return (
    <Section
      title="How We Work"
      subtitle="A proven process that transforms brand visibility"
      className="bg-gradient-to-b from-slate-950 to-slate-900"
    >
      <div className="max-w-5xl mx-auto space-y-8">
        {steps.map((step, index) => (
          <div
            key={index}
            className="bg-slate-950/50 backdrop-blur-xl border border-white/10 rounded-2xl p-8 hover:border-violet-500/50 transition-all duration-300"
          >
            <div className="flex flex-col md:flex-row gap-6">
              <div className="flex-shrink-0">
                <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-violet-500 to-sky-500 flex items-center justify-center">
                  <span className="text-3xl font-bold text-white">{step.number}</span>
                </div>
              </div>
              <div className="flex-1">
                <h3 className="text-2xl font-bold text-gray-100 mb-2">{step.title}</h3>
                <p className="text-violet-400 font-semibold mb-3">{step.description}</p>
                <p className="text-gray-400 leading-relaxed">{step.details}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}

function TeamSection() {
  const team = [
    {
      role: "Head of GEO Strategy",
      description: "Specializes in optimizing brand presence across AI models and generative engines."
    },
    {
      role: "Brand Narrative Architect",
      description: "Crafts compelling brand stories that resonate with both humans and AI systems."
    },
    {
      role: "Mention & Credibility Specialist",
      description: "Engineers brand mentions and builds trust signals across digital platforms."
    }
  ];

  return (
    <Section
      title="Who's Behind MentionMasters"
      subtitle="A team of strategists, storytellers, and technical experts"
    >
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
        {team.map((member, index) => (
          <div
            key={index}
            className="bg-slate-900/50 backdrop-blur-xl border border-white/10 rounded-2xl p-6 hover:border-violet-500/50 transition-all duration-300 hover:-translate-y-1"
          >
            <div className="w-16 h-16 rounded-full bg-gradient-to-br from-violet-500/20 to-sky-500/20 flex items-center justify-center mb-4">
              <Users className="w-8 h-8 text-violet-400" />
            </div>
            <h3 className="text-lg font-bold text-gray-100 mb-2">{member.role}</h3>
            <p className="text-sm text-gray-400 leading-relaxed">{member.description}</p>
          </div>
        ))}
      </div>
    </Section>
  );
}

function CTASection() {
  return (
    <Section className="bg-gradient-to-t from-slate-900 to-slate-950">
      <div className="max-w-3xl mx-auto text-center">
        <div className="mb-8">
          <Rocket className="w-16 h-16 mx-auto text-violet-400 mb-4" />
          <h2 className="text-3xl md:text-4xl font-bold text-gray-100 mb-4">
            Ready to Transform Your Brand?
          </h2>
          <p className="text-lg text-gray-400">
            Let's discuss how we can make your brand unmissable in the age of AI.
          </p>
        </div>
        <PrimaryButton>Book a Strategy Call</PrimaryButton>
      </div>
    </Section>
  );
}
