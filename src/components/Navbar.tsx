import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight, ShieldCheck, Microscope } from 'lucide-react';

interface NavbarProps {
  onOpenInquiry: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenInquiry }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-300 ${
        scrolled
          ? 'bg-[#080c11]/95 backdrop-blur-md border-b border-white/10 shadow-lg shadow-black/40'
          : 'bg-transparent border-b border-white/5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Zone 1: Single text element Brand mark (No adjacent pills or descriptors) */}
          <a
            href="#"
            className="flex items-center gap-3 group focus:outline-none focus-visible:ring-1 focus-visible:ring-teal-400"
          >
            {/* Custom stylized minimalist Apex chevron glyph */}
            <div className="w-8 h-8 rounded-sm bg-gradient-to-br from-teal-500/20 to-teal-900/40 border border-teal-500/40 flex items-center justify-center text-teal-300 font-mono text-sm font-semibold tracking-tighter group-hover:border-teal-400 transition-colors">
              ▲
            </div>
            <span className="font-display text-xl sm:text-2xl font-bold tracking-tight text-white group-hover:text-teal-200 transition-colors">
              Apex Peptides
            </span>
          </a>

          {/* Zone 2: 4-6 text navigation links with subtle hover underlines */}
          <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-300">
            <a
              href="#products"
              className="hover:text-white transition-colors relative py-1 hover:underline underline-offset-8 decoration-teal-500/60"
            >
              Research Catalogue
            </a>
            <a
              href="#quality"
              className="hover:text-white transition-colors relative py-1 hover:underline underline-offset-8 decoration-teal-500/60"
            >
              Analytical Quality
            </a>
            <a
              href="#coa"
              className="hover:text-white transition-colors relative py-1 hover:underline underline-offset-8 decoration-teal-500/60"
            >
              COA Verification
            </a>
            <a
              href="#calculator"
              className="hover:text-white transition-colors relative py-1 hover:underline underline-offset-8 decoration-teal-500/60"
            >
              Reconstitution Tool
            </a>
            <a
              href="#workflow"
              className="hover:text-white transition-colors relative py-1 hover:underline underline-offset-8 decoration-teal-500/60"
            >
              Fulfillment
            </a>
          </nav>

          {/* Zone 3: 1-2 primary actions */}
          <div className="hidden sm:flex items-center gap-4">
            <a
              href="#products"
              className="text-xs font-mono uppercase tracking-wider text-slate-400 hover:text-teal-300 transition-colors hidden lg:inline-block"
            >
              AU Dispatch · Adelaide
            </a>
            <button
              onClick={onOpenInquiry}
              className="px-4 py-2 text-xs font-semibold tracking-wide uppercase text-[#0b0f14] bg-teal-400 hover:bg-teal-300 rounded-sm transition-all duration-200 shadow-sm shadow-teal-500/20 active:scale-[0.98] whitespace-nowrap"
            >
              Institutional Inquiry
            </button>
          </div>

          {/* Mobile hamburger button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-slate-400 hover:text-white focus:outline-none focus-visible:ring-1 focus-visible:ring-teal-400"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile drop-down panel */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#0a0e14] border-b border-white/10 px-6 pt-4 pb-6 space-y-4">
          <nav className="flex flex-col space-y-3 text-sm font-medium text-slate-300">
            <a
              href="#products"
              onClick={() => setMobileMenuOpen(false)}
              className="hover:text-teal-300 py-1"
            >
              Research Catalogue
            </a>
            <a
              href="#quality"
              onClick={() => setMobileMenuOpen(false)}
              className="hover:text-teal-300 py-1"
            >
              Analytical Quality Standards
            </a>
            <a
              href="#coa"
              onClick={() => setMobileMenuOpen(false)}
              className="hover:text-teal-300 py-1"
            >
              COA Verification & HPLC
            </a>
            <a
              href="#calculator"
              onClick={() => setMobileMenuOpen(false)}
              className="hover:text-teal-300 py-1"
            >
              Reconstitution Tool
            </a>
            <a
              href="#workflow"
              onClick={() => setMobileMenuOpen(false)}
              className="hover:text-teal-300 py-1"
            >
              How It Works & Dispatch
            </a>
          </nav>
          <div className="pt-3 border-t border-white/10 flex flex-col gap-3">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenInquiry();
              }}
              className="w-full py-2.5 text-center text-xs font-semibold tracking-wide uppercase text-[#0b0f14] bg-teal-400 rounded-sm hover:bg-teal-300 transition-colors"
            >
              Institutional Inquiry
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
