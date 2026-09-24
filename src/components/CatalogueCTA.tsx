import React from 'react';
import { ArrowRight, Download, Mail, MessageSquare, ShieldAlert, Sparkles, Check } from 'lucide-react';
import { PEPTIDES_DATA } from '../data/peptides';

interface CatalogueCTAProps {
  onOpenInquiry: () => void;
}

export const CatalogueCTA: React.FC<CatalogueCTAProps> = ({ onOpenInquiry }) => {
  return (
    <section className="py-20 bg-[#070a0e] relative border-t border-white/10 overflow-hidden">
      {/* Background Accent Gradients */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-teal-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="bg-[#0b1016] border border-white/15 rounded-xl p-8 sm:p-12 lg:p-16 relative overflow-hidden shadow-2xl">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            <div className="lg:col-span-8 space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#121924] border border-white/10 rounded-sm text-[11px] font-mono text-teal-300">
                <span className="w-1.5 h-1.5 rounded-full bg-teal-400" />
                <span>ADELAIDE DISTRIBUTION HUB · SAME-DAY DISPATCH</span>
              </div>

              <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-medium tracking-tight text-white">
                Equip your laboratory with verified analytical standards.
              </h2>

              <p className="text-sm sm:text-base text-slate-400 font-light max-w-2xl leading-relaxed">
                Connect directly with Apex Peptides Australia for academic procurement, standing batch reservations, and custom synthesis. Receive full HPLC chromatograms and Mass Spectrometry confirmation with every order.
              </p>

              {/* Zero-Pill Unboxed Key Guarantees */}
              <div className="pt-2 flex flex-wrap items-center gap-x-6 gap-y-2 text-xs font-mono text-slate-300">
                <div className="flex items-center gap-1.5">
                  <Check className="w-3.5 h-3.5 text-teal-400" />
                  <span>≥ 99.0% Purity Guarantee</span>
                </div>
                <span className="text-slate-600 hidden sm:inline">·</span>
                <div className="flex items-center gap-1.5">
                  <Check className="w-3.5 h-3.5 text-teal-400" />
                  <span>Vacuum-Sealed Nitrogen Flush</span>
                </div>
                <span className="text-slate-600 hidden sm:inline">·</span>
                <div className="flex items-center gap-1.5">
                  <Check className="w-3.5 h-3.5 text-teal-400" />
                  <span>Express Domestic Courier</span>
                </div>
              </div>
            </div>

            {/* Right: Quick Action Buttons */}
            <div className="lg:col-span-4 flex flex-col gap-3">
              <button
                onClick={onOpenInquiry}
                className="w-full py-4 bg-teal-400 hover:bg-teal-300 text-[#07090d] text-xs font-semibold tracking-wider uppercase rounded-sm transition-all duration-200 flex items-center justify-center gap-2 shadow-lg shadow-teal-500/20 group cursor-pointer"
              >
                <span>Request Institutional Batch Quote</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
              </button>

              <a
                href="#products"
                className="w-full py-3.5 bg-[#141c26] hover:bg-[#1a2533] border border-white/10 text-xs font-mono text-slate-200 hover:text-white rounded-sm transition-colors text-center block"
              >
                Browse All Compounds ({PEPTIDES_DATA.length} Available)
              </a>

              {/* Direct Support Channels matching apexpeptidesaustralia.com */}
              <div className="pt-2 flex items-center justify-between text-[11px] font-mono text-slate-400 px-1">
                <span>Support: Email & WhatsApp</span>
                <span className="text-teal-400">Response &lt; 2h</span>
              </div>
            </div>

          </div>

          {/* Bottom Disclaimer */}
          <div className="mt-8 pt-6 border-t border-white/10 text-[11px] font-mono text-slate-500">
            <strong>LABORATORY RESEARCH USE ONLY:</strong> All products supplied by Apex Peptides Australia are non-sterile chemical compounds destined solely for in-vitro research and analytical testing by qualified scientific personnel. Not for human, veterinary, or clinical administration.
          </div>

        </div>

      </div>
    </section>
  );
};
