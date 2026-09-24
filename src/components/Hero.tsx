import React, { useEffect, useState, useRef } from 'react';
import { ArrowDown, ShieldAlert, Sparkles, CheckCircle2, ChevronRight } from 'lucide-react';
import heroVialsImg from '../assets/images/hero_apex_vials_1790265787650.jpg';

interface HeroProps {
  onExploreClick: () => void;
  onQualityClick: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onExploreClick, onQualityClick }) => {
  const [scrollY, setScrollY] = useState(0);
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (heroRef.current) {
        const rect = heroRef.current.getBoundingClientRect();
        // Calculate scroll progress within hero section
        const progress = Math.max(0, Math.min(1, -rect.top / (rect.height || 1)));
        setScrollY(progress);
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Compute subtle cinematic camera shifts based on scroll progression
  // Rotation subtle tilt: -1.5deg to 2deg
  // Translation subtle pan: 0px to 40px
  // Subtle scale: 1.0 to 1.05
  const subtleRotate = scrollY * 2.5;
  const subtleScale = 1 + scrollY * 0.06;
  const subtleTranslateY = scrollY * -30;
  const headlineOpacity = Math.max(0.4, 1 - scrollY * 0.8);

  return (
    <section
      ref={heroRef}
      className="relative min-h-screen flex flex-col justify-between pt-24 pb-12 overflow-hidden bg-[#07090d]"
    >
      {/* Background Laboratory Grid & Ambient Lighting */}
      <div className="absolute inset-0 lab-grid opacity-30 pointer-events-none" />
      
      {/* Precision Laboratory Crosshair & Alignment Markers */}
      <div className="absolute top-28 left-8 hidden lg:flex flex-col text-[10px] font-mono text-slate-500/70 select-none pointer-events-none space-y-1">
        <span>LOC: 34.9285° S, 138.6007° E</span>
        <span>SYS: HPLC / ESI-MS PURITY PROTOCOL</span>
        <span>REF: ISO-17025 ACCREDITED PIPELINE</span>
      </div>

      <div className="absolute top-28 right-8 hidden lg:flex flex-col items-end text-[10px] font-mono text-slate-500/70 select-none pointer-events-none space-y-1">
        <span>BATCH VERIFICATION: REAL-TIME</span>
        <span>PURITY THRESHOLD: ≥ 99.0%</span>
        <span>STATUS: DISPATCH READY</span>
      </div>

      {/* Main Content Container */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full z-10 my-auto py-8">
        
        {/* Compliance Notice Banner (Mandatory Laboratory Research Use Note) */}
        <div className="mb-8 max-w-xl">
          <div className="inline-flex items-center gap-2.5 px-3 py-1.5 bg-slate-900/80 border border-slate-700/60 rounded-sm text-xs text-slate-300">
            <span className="w-1.5 h-1.5 rounded-full bg-teal-400 animate-pulse" />
            <span className="font-mono text-[11px] text-teal-300 uppercase tracking-wider font-medium">
              Laboratory Research Use Only
            </span>
            <span className="text-slate-500">|</span>
            <span className="text-slate-400 text-[11px] hidden sm:inline">
              Strictly for in-vitro research and analytical testing
            </span>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Left Column: Editorial Headline & Research Narrative */}
          <div 
            className="lg:col-span-6 space-y-6 transition-opacity duration-300"
            style={{ opacity: headlineOpacity }}
          >
            <div className="space-y-4">
              <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-medium tracking-tight text-white leading-[1.12] text-balance">
                Precision for the <br />
                <span className="italic font-normal text-teal-200">pursuit of discovery.</span>
              </h1>
              
              <p className="text-base sm:text-lg text-slate-400 font-light leading-relaxed max-w-xl">
                Apex Peptides Australia provides high-purity, analytical-grade lyophilized peptides to biomedical laboratories, university researchers, and scientific institutions across Australia. Each batch is subjected to independent HPLC and Mass Spectrometry validation.
              </p>
            </div>

            {/* Specification Metrics - Zero-Pill Unboxed Text */}
            <div className="pt-2 pb-2 border-y border-white/10 flex flex-wrap items-center gap-x-6 gap-y-2 text-xs text-slate-400 font-mono">
              <div className="flex items-center gap-2">
                <span className="text-white font-semibold">≥ 99.0%</span>
                <span className="text-slate-500">Target Purity</span>
              </div>
              <span className="text-slate-600 hidden sm:inline">/</span>
              <div className="flex items-center gap-2">
                <span className="text-white font-semibold">HPLC & MS</span>
                <span className="text-slate-500">COA Certified</span>
              </div>
              <span className="text-slate-600 hidden sm:inline">/</span>
              <div className="flex items-center gap-2">
                <span className="text-white font-semibold">Adelaide</span>
                <span className="text-slate-500">Express AU Dispatch</span>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2">
              <button
                onClick={onExploreClick}
                className="px-6 py-3.5 bg-teal-400 hover:bg-teal-300 text-[#07090d] text-sm font-semibold tracking-wide uppercase rounded-sm transition-all duration-200 flex items-center justify-center gap-2 shadow-lg shadow-teal-500/15 group cursor-pointer"
              >
                <span>Explore Products</span>
                <ChevronRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
              </button>

              <button
                onClick={onQualityClick}
                className="px-6 py-3.5 bg-[#0f151e] hover:bg-[#151d29] text-slate-200 hover:text-white border border-white/15 hover:border-teal-500/40 text-sm font-medium tracking-wide rounded-sm transition-all duration-200 flex items-center justify-center gap-2 cursor-pointer"
              >
                <span>View Quality Standards</span>
              </button>
            </div>

            {/* Legal Notice Text */}
            <p className="text-[11px] text-slate-500 leading-normal max-w-lg">
              *All products supplied by Apex Peptides Australia are non-sterile chemical compounds destined solely for in-vitro research use by qualified scientific personnel. Not for human, veterinary, or clinical use.
            </p>
          </div>

          {/* Right Column: Commercial Photorealistic Vials Showcase with Scroll Perspective Shift */}
          <div className="lg:col-span-6 relative">
            <div 
              className="relative mx-auto rounded-lg overflow-hidden border border-white/10 shadow-2xl shadow-black/80 transition-transform duration-700 ease-out"
              style={{
                transform: `perspective(1200px) rotateX(${subtleRotate}deg) translateY(${subtleTranslateY}px) scale(${subtleScale})`,
                transformStyle: 'preserve-3d',
              }}
            >
              {/* Photorealistic Commercial Vials Image */}
              <div className="relative aspect-[16/10] sm:aspect-[16/9] w-full bg-[#0a0e14]">
                <img
                  src={heroVialsImg}
                  alt="Apex Peptides Australia analytical research vials in precision studio lighting"
                  className="w-full h-full object-cover object-center"
                  loading="eager"
                  referrerPolicy="no-referrer"
                />

                {/* Subtle Cinematic Vignette & Edge Shadow */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#07090d] via-transparent to-black/30 pointer-events-none" />
                <div className="absolute inset-0 ring-1 ring-inset ring-white/10 pointer-events-none" />
              </div>

              {/* In-Frame Research Spec Overlay */}
              <div className="absolute bottom-0 inset-x-0 p-4 sm:p-5 bg-gradient-to-t from-[#07090d]/95 via-[#07090d]/80 to-transparent backdrop-blur-[2px] flex items-center justify-between border-t border-white/10">
                <div className="space-y-0.5">
                  <div className="text-xs font-medium text-white tracking-wide">
                    Borosilicate Type 1 Analytical Vials
                  </div>
                  <div className="text-[11px] text-slate-400 font-mono">
                    Crimped Aluminum-PTFE Barrier · Nitrogen Flushed
                  </div>
                </div>
                <div className="text-right">
                  <div className="text-xs font-mono text-teal-400 font-semibold">
                    LOT APX-2026
                  </div>
                  <div className="text-[10px] text-slate-500 uppercase tracking-wider">
                    Purity: ≥ 99.2%
                  </div>
                </div>
              </div>
            </div>

            {/* Subtle Laboratory Backdrop Elements */}
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-teal-500/5 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute -top-6 -left-6 w-32 h-32 bg-teal-600/5 rounded-full blur-3xl pointer-events-none" />
          </div>

        </div>
      </div>

      {/* Hero Bottom Bar: Scroll Indicator & Australian Dispatch Anchor */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full z-10 pt-6 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500 font-mono">
        <div className="flex items-center gap-4">
          <span className="text-slate-400">RESEARCH COMMUNITY DIRECT</span>
          <span>·</span>
          <span>AUSTRALIAN OWNED & OPERATED</span>
        </div>

        <button
          onClick={onExploreClick}
          className="flex items-center gap-2 hover:text-teal-300 transition-colors cursor-pointer group"
          aria-label="Scroll to product catalogue"
        >
          <span className="text-slate-400 group-hover:text-teal-300">SCROLL TO CATALOGUE</span>
          <ArrowDown className="w-3.5 h-3.5 text-teal-400 animate-bounce" />
        </button>
      </div>
    </section>
  );
};
