import { Section } from '../components/Section';
import { Link } from '../components/Router';
import { Calendar, ArrowRight } from 'lucide-react';

export function Blog() {
  return (
    <div>
      <HeroSection />
      <BlogPostsSection />
    </div>
  );
}

function HeroSection() {
  return (
    <section className="relative bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 py-20 md:py-32">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-4xl md:text-6xl font-bold text-gray-100 mb-6 tracking-wide">
          Insights on GEO, Brand Mentions & Modern Brand Building
        </h1>
        <p className="text-lg md:text-xl text-gray-300 leading-relaxed max-w-3xl mx-auto">
          Deep dives, playbooks, and frameworks for brands that want to be mentioned more — by people and by AI.
        </p>
      </div>
    </section>
  );
}

function BlogPostsSection() {
  const posts = [
    {
      title: "What Is Generative Engine Optimization (GEO)?",
      description: "A comprehensive guide to understanding GEO and why it's the future of brand visibility in an AI-first world.",
      date: "December 1, 2024",
      category: "GEO Fundamentals"
    },
    {
      title: "How Brand Mentions Influence AI Recommendations",
      description: "Discover the science behind how AI models learn about brands and why mentions matter more than ever.",
      date: "November 28, 2024",
      category: "AI & Mentions"
    },
    {
      title: "From SEO to GEO: A New Playbook for 2025",
      description: "The complete transition guide for brands moving from traditional SEO strategies to GEO-first approaches.",
      date: "November 25, 2024",
      category: "Strategy"
    },
    {
      title: "Designing a Brand Knowledge Graph for AI Models",
      description: "Learn how to structure your brand data so AI models can accurately understand and recommend you.",
      date: "November 22, 2024",
      category: "Technical GEO"
    },
    {
      title: "The Brand Trust Stack: Proof, Mentions & Authority",
      description: "Build a comprehensive trust architecture that makes your brand instantly credible to humans and AI.",
      date: "November 19, 2024",
      category: "Credibility"
    },
    {
      title: "How to Audit Your Brand's AI Presence",
      description: "A step-by-step framework for evaluating how your brand appears in AI-generated responses and recommendations.",
      date: "November 16, 2024",
      category: "Audit & Analysis"
    }
  ];

  return (
    <Section className="bg-slate-950">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post, index) => (
            <article
              key={index}
              className="bg-slate-900/50 backdrop-blur-xl border border-white/10 rounded-2xl overflow-hidden hover:border-violet-500/50 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-violet-500/20"
            >
              <div className="h-48 bg-gradient-to-br from-violet-500/20 to-sky-500/20 flex items-center justify-center">
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-violet-500 to-sky-500 flex items-center justify-center">
                  <span className="text-2xl font-bold text-white">{index + 1}</span>
                </div>
              </div>

              <div className="p-6">
                <div className="flex items-center gap-4 mb-4">
                  <span className="text-xs px-3 py-1 bg-violet-500/20 text-violet-400 rounded-full">
                    {post.category}
                  </span>
                </div>

                <h3 className="text-xl font-bold text-gray-100 mb-3 leading-tight">
                  {post.title}
                </h3>

                <p className="text-sm text-gray-400 mb-4 leading-relaxed">
                  {post.description}
                </p>

                <div className="flex items-center justify-between pt-4 border-t border-white/5">
                  <div className="flex items-center gap-2 text-xs text-gray-500">
                    <Calendar className="w-4 h-4" />
                    <span>{post.date}</span>
                  </div>

                  <Link
                    to="#"
                    className="flex items-center gap-2 text-sm font-semibold text-violet-400 hover:text-violet-300 transition-colors"
                  >
                    Read Article
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </Section>
  );
}
