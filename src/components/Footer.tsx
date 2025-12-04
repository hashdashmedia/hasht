import { Logo } from './Logo';
import { Link } from './Router';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-950 border-t border-white/5 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <Logo size="small" />
            <p className="text-sm text-gray-400 mt-4 max-w-xs">
              GEO-Optimized Brand Mentions & Credibility
            </p>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-gray-100 mb-4">Quick Links</h3>
            <div className="space-y-2">
              <Link to="/" className="block text-sm text-gray-400 hover:text-violet-400 transition-colors">
                Home
              </Link>
              <Link to="/about" className="block text-sm text-gray-400 hover:text-violet-400 transition-colors">
                About
              </Link>
              <Link to="/services" className="block text-sm text-gray-400 hover:text-violet-400 transition-colors">
                Services
              </Link>
              <Link to="/blog" className="block text-sm text-gray-400 hover:text-violet-400 transition-colors">
                Blog
              </Link>
            </div>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-gray-100 mb-4">Connect</h3>
            <p className="text-sm text-gray-400">
              Ready to make your brand unmissable?
            </p>
          </div>
        </div>

        <div className="pt-8 border-t border-white/5">
          <p className="text-sm text-gray-500 text-center">
            © {currentYear} MentionMasters. GEO-Optimized Brand Mentions & Credibility.
          </p>
        </div>
      </div>
    </footer>
  );
}
