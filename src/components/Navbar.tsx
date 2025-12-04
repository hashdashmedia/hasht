import { Logo } from './Logo';
import { Link, useRouter } from './Router';
import { PrimaryButton } from './Button';
import { Menu, X } from 'lucide-react';
import { useState } from 'react';

export function Navbar() {
  const { currentPath } = useRouter();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { path: '/', label: 'Home' },
    { path: '/about', label: 'About' },
    { path: '/services', label: 'Services' },
    { path: '/blog', label: 'Blog' },
  ];

  return (
    <nav className="sticky top-0 z-50 bg-slate-950/80 backdrop-blur-lg border-b border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <Link to="/">
            <Logo />
          </Link>

          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`text-sm font-medium transition-colors duration-200 ${
                  currentPath === link.path
                    ? 'text-violet-400'
                    : 'text-gray-300 hover:text-violet-400'
                }`}
              >
                {link.label}
              </Link>
            ))}
            <PrimaryButton>Get Audit</PrimaryButton>
          </div>

          <button
            className="md:hidden text-gray-300 hover:text-violet-400"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {mobileMenuOpen && (
        <div className="md:hidden bg-slate-900 border-t border-white/5">
          <div className="px-4 py-6 space-y-4">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`block text-base font-medium transition-colors duration-200 ${
                  currentPath === link.path
                    ? 'text-violet-400'
                    : 'text-gray-300 hover:text-violet-400'
                }`}
                onClick={() => setMobileMenuOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <PrimaryButton className="w-full">Get Audit</PrimaryButton>
          </div>
        </div>
      )}
    </nav>
  );
}
