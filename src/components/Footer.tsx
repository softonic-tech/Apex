import React from 'react';
import { ShieldAlert, Mail, MapPin } from 'lucide-react';

interface FooterProps {
  onOpenInquiry: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenInquiry }) => {
  return (
    <footer className="bg-[#05070a] border-t border-white/10 text-slate-400 text-xs">
      {/* Compliance Notice Block */}
      <div className="border-b border-white/5 bg-[#07090d] py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-start gap-3">
            <ShieldAlert className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
            <div className="space-y-1 font-mono text-[11px] leading-relaxed text-slate-400">
              <p className="font-semibold text-slate-300 uppercase tracking-wider">
                Australian Research Compliance & Scientific Use Declaration
              </p>
              <p>
                All products distributed by <strong>Apex Peptides Australia</strong> are strictly intended for in-vitro laboratory research, biological and chemical assays, analytical calibration, and academic experimentation. They are <strong>NOT FOR HUMAN OR ANIMAL CONSUMPTION</strong>, medical therapy, cosmetic application, or clinical diagnosis. Possession and handling should be restricted to qualified research professionals in controlled scientific environments.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer Links */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          
          {/* Brand Info */}
          <div className="space-y-3">
            <div className="flex items-center gap-2">
              <span className="text-teal-400 font-mono">▲</span>
              <span className="font-display text-lg font-bold text-white tracking-tight">
                Apex Peptides
              </span>
            </div>
            <p className="text-slate-500 font-light leading-relaxed">
              Australian supplier of research-grade peptides, analytical reference standards, and laboratory reconstitution reagents.
            </p>
            <div className="font-mono text-[11px] text-slate-400 flex items-center gap-1.5 pt-1">
              <MapPin className="w-3.5 h-3.5 text-teal-400" />
              <span>Distribution Center: Adelaide, South Australia</span>
            </div>
          </div>

          {/* Catalog Categories */}
          <div className="space-y-2">
            <div className="font-mono text-xs uppercase tracking-wider text-slate-300 font-semibold">
              Research Compounds
            </div>
            <ul className="space-y-1.5 font-mono text-slate-400">
              <li><a href="#products" className="hover:text-teal-300 transition-colors">BPC-157 (10mg)</a></li>
              <li><a href="#products" className="hover:text-teal-300 transition-colors">TB-500 (10mg)</a></li>
              <li><a href="#products" className="hover:text-teal-300 transition-colors">GHK-Cu Copper Complex</a></li>
              <li><a href="#products" className="hover:text-teal-300 transition-colors">NAD+ (500mg & 1000mg)</a></li>
              <li><a href="#products" className="hover:text-teal-300 transition-colors">Retatrutide & Tirzepatide</a></li>
              <li><a href="#products" className="hover:text-teal-300 transition-colors">Bacteriostatic Water (30ml)</a></li>
            </ul>
          </div>

          {/* Quality & Methodology */}
          <div className="space-y-2">
            <div className="font-mono text-xs uppercase tracking-wider text-slate-300 font-semibold">
              Analytical Rigor
            </div>
            <ul className="space-y-1.5 font-mono text-slate-400">
              <li><a href="#quality" className="hover:text-teal-300 transition-colors">HPLC Purity Testing</a></li>
              <li><a href="#quality" className="hover:text-teal-300 transition-colors">Mass Spectrometry (ESI-MS)</a></li>
              <li><a href="#coa" className="hover:text-teal-300 transition-colors">Batch COA Verification</a></li>
              <li><a href="#calculator" className="hover:text-teal-300 transition-colors">Reconstitution Tool</a></li>
              <li><a href="#workflow" className="hover:text-teal-300 transition-colors">Cold-Chain Packaging</a></li>
            </ul>
          </div>

          {/* Contact & Support */}
          <div className="space-y-2">
            <div className="font-mono text-xs uppercase tracking-wider text-slate-300 font-semibold">
              Laboratory Desk
            </div>
            <p className="text-slate-400">
              Direct institutional procurement and batch reserve inquiries:
            </p>
            <div className="pt-1">
              <button
                onClick={onOpenInquiry}
                className="w-full py-2 bg-[#121924] hover:bg-[#18212e] text-teal-300 border border-white/10 rounded-sm font-mono text-xs transition-colors text-center cursor-pointer"
              >
                Inquire Batch / Pricing
              </button>
            </div>
            <div className="pt-2 text-[11px] font-mono text-slate-500 space-y-1">
              <div>Customer Desk: Email & WhatsApp</div>
              <div>Dispatch Hours: Mon–Fri, 8:00–17:00 ACST</div>
            </div>
          </div>

        </div>

        {/* Bottom Copyright & Zero-Pill Status */}
        <div className="mt-12 pt-6 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] font-mono text-slate-500">
          <div>
            &copy; {new Date().getFullYear()} Apex Peptides Australia. All rights reserved.
          </div>
          <div className="flex items-center gap-4">
            <a href="#products" className="hover:text-slate-400 transition-colors">Analytical Catalogue</a>
            <span>·</span>
            <a href="#quality" className="hover:text-slate-400 transition-colors">Quality Standards</a>
            <span>·</span>
            <a href="#workflow" className="hover:text-slate-400 transition-colors">AU Dispatch</a>
          </div>
        </div>
      </div>
    </footer>
  );
};
