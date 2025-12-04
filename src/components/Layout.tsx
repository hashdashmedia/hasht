import { ReactNode } from 'react';
import { Navbar } from './Navbar';
import { Footer } from './Footer';

export function Layout({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen bg-slate-950 text-gray-100">
      <Navbar />
      <main>{children}</main>
      <Footer />
    </div>
  );
}
