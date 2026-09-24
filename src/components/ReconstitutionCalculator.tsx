import React, { useState } from 'react';
import { Calculator, Pipette, RefreshCw, CheckCircle2, AlertTriangle, ArrowRight } from 'lucide-react';

export const ReconstitutionCalculator: React.FC = () => {
  const [vialMg, setVialMg] = useState<number>(10);
  const [diluentMl, setDiluentMl] = useState<number>(2.0);
  const [doseMcg, setDoseMcg] = useState<number>(250);
  const [syringeType, setSyringeType] = useState<100 | 50 | 30>(100); // 100 units = 1ml, 50 units = 0.5ml, 30 units = 0.3ml

  // Calculated values
  const concentrationMgPerMl = vialMg > 0 && diluentMl > 0 ? vialMg / diluentMl : 0;
  const concentrationMcgPerMl = concentrationMgPerMl * 1000;
  const volumePerDoseMl = concentrationMcgPerMl > 0 ? doseMcg / concentrationMcgPerMl : 0;
  const volumePerDoseUl = volumePerDoseMl * 1000; // microliters
  const unitsOnU100 = volumePerDoseMl * 100; // U-100 syringe (100 units = 1mL)

  // Presets for quick lab setups
  const applyPreset = (mg: number, ml: number, mcg: number) => {
    setVialMg(mg);
    setDiluentMl(ml);
    setDoseMcg(mcg);
  };

  return (
    <section id="calculator" className="py-24 bg-[#0a0e14] relative border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="max-w-3xl space-y-4 mb-14">
          <div className="font-mono text-xs uppercase tracking-widest text-teal-400 font-semibold">
            Laboratory Tooling · Analytical Precision
          </div>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-medium tracking-tight text-white">
            Peptide Reconstitution Calculator
          </h2>
          <p className="text-base text-slate-400 font-light leading-relaxed">
            Determine precise solvent dilution volumes, resultant micromolar concentrations, and aliquot draw measurements for laboratory pipetting or analytical assay prep.
          </p>
        </div>

        {/* Quick Presets */}
        <div className="mb-8 flex flex-wrap items-center gap-2 text-xs font-mono">
          <span className="text-slate-500 mr-2">Research Presets:</span>
          <button
            onClick={() => applyPreset(10, 2, 250)}
            className="px-3 py-1.5 bg-[#121822] hover:bg-[#18212e] text-slate-300 hover:text-white border border-white/10 rounded-sm transition-colors cursor-pointer"
          >
            BPC-157 (10mg in 2mL, 250mcg dose)
          </button>
          <button
            onClick={() => applyPreset(10, 2.5, 500)}
            className="px-3 py-1.5 bg-[#121822] hover:bg-[#18212e] text-slate-300 hover:text-white border border-white/10 rounded-sm transition-colors cursor-pointer"
          >
            TB-500 (10mg in 2.5mL, 500mcg dose)
          </button>
          <button
            onClick={() => applyPreset(50, 5, 1000)}
            className="px-3 py-1.5 bg-[#121822] hover:bg-[#18212e] text-slate-300 hover:text-white border border-white/10 rounded-sm transition-colors cursor-pointer"
          >
            GHK-Cu (50mg in 5mL, 1000mcg dose)
          </button>
          <button
            onClick={() => applyPreset(500, 10, 50000)}
            className="px-3 py-1.5 bg-[#121822] hover:bg-[#18212e] text-slate-300 hover:text-white border border-white/10 rounded-sm transition-colors cursor-pointer"
          >
            NAD+ (500mg in 10mL)
          </button>
        </div>

        {/* Interactive Calculator Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Input Controls */}
          <div className="lg:col-span-6 bg-[#0d1218] border border-white/10 rounded-lg p-6 sm:p-8 space-y-6">
            <h3 className="font-display text-xl font-bold text-white tracking-tight border-b border-white/10 pb-4">
              Experimental Reconstitution Parameters
            </h3>

            {/* Input 1: Vial Peptide Mass (mg) */}
            <div className="space-y-2">
              <div className="flex justify-between text-xs font-mono">
                <label className="text-slate-300 font-medium">1. Peptide Vial Mass</label>
                <span className="text-teal-400 font-bold">{vialMg} mg</span>
              </div>
              <input
                type="range"
                min="1"
                max="100"
                step="1"
                value={vialMg}
                onChange={(e) => setVialMg(Number(e.target.value))}
                className="w-full accent-teal-400 bg-slate-800 cursor-pointer h-1.5 rounded-lg"
              />
              <div className="flex gap-2">
                {[5, 10, 15, 20, 50].map((mg) => (
                  <button
                    key={mg}
                    onClick={() => setVialMg(mg)}
                    className={`px-2 py-1 text-[11px] font-mono rounded-sm cursor-pointer transition-colors ${
                      vialMg === mg
                        ? 'bg-teal-400 text-[#07090d] font-bold'
                        : 'bg-[#141b24] text-slate-400 hover:text-white'
                    }`}
                  >
                    {mg}mg
                  </button>
                ))}
              </div>
            </div>

            {/* Input 2: Diluent Volume (mL of BAC water) */}
            <div className="space-y-2">
              <div className="flex justify-between text-xs font-mono">
                <label className="text-slate-300 font-medium">2. Bacteriostatic Water Added</label>
                <span className="text-teal-400 font-bold">{diluentMl.toFixed(1)} mL</span>
              </div>
              <input
                type="range"
                min="0.5"
                max="10"
                step="0.5"
                value={diluentMl}
                onChange={(e) => setDiluentMl(Number(e.target.value))}
                className="w-full accent-teal-400 bg-slate-800 cursor-pointer h-1.5 rounded-lg"
              />
              <div className="flex gap-2">
                {[1.0, 2.0, 2.5, 3.0, 5.0].map((ml) => (
                  <button
                    key={ml}
                    onClick={() => setDiluentMl(ml)}
                    className={`px-2 py-1 text-[11px] font-mono rounded-sm cursor-pointer transition-colors ${
                      diluentMl === ml
                        ? 'bg-teal-400 text-[#07090d] font-bold'
                        : 'bg-[#141b24] text-slate-400 hover:text-white'
                    }`}
                  >
                    {ml}mL
                  </button>
                ))}
              </div>
            </div>

            {/* Input 3: Desired Research Aliquot (mcg) */}
            <div className="space-y-2">
              <div className="flex justify-between text-xs font-mono">
                <label className="text-slate-300 font-medium">3. Desired Target Aliquot / Dose</label>
                <span className="text-teal-400 font-bold">{doseMcg} mcg</span>
              </div>
              <input
                type="range"
                min="50"
                max="2000"
                step="50"
                value={doseMcg}
                onChange={(e) => setDoseMcg(Number(e.target.value))}
                className="w-full accent-teal-400 bg-slate-800 cursor-pointer h-1.5 rounded-lg"
              />
              <div className="flex gap-2">
                {[100, 250, 500, 750, 1000].map((mcg) => (
                  <button
                    key={mcg}
                    onClick={() => setDoseMcg(mcg)}
                    className={`px-2 py-1 text-[11px] font-mono rounded-sm cursor-pointer transition-colors ${
                      doseMcg === mcg
                        ? 'bg-teal-400 text-[#07090d] font-bold'
                        : 'bg-[#141b24] text-slate-400 hover:text-white'
                    }`}
                  >
                    {mcg}mcg
                  </button>
                ))}
              </div>
            </div>

            {/* Syringe Type */}
            <div className="pt-2 border-t border-white/10 space-y-2">
              <label className="text-xs font-mono text-slate-400">Measurement Device Standard:</label>
              <div className="grid grid-cols-3 gap-2">
                <button
                  onClick={() => setSyringeType(100)}
                  className={`py-2 px-2 text-xs font-mono rounded-sm text-center transition-all cursor-pointer ${
                    syringeType === 100
                      ? 'bg-teal-500/20 text-teal-300 border border-teal-500/50 font-bold'
                      : 'bg-[#121820] text-slate-400 border border-white/5 hover:text-white'
                  }`}
                >
                  1.0 mL (100 units)
                </button>
                <button
                  onClick={() => setSyringeType(50)}
                  className={`py-2 px-2 text-xs font-mono rounded-sm text-center transition-all cursor-pointer ${
                    syringeType === 50
                      ? 'bg-teal-500/20 text-teal-300 border border-teal-500/50 font-bold'
                      : 'bg-[#121820] text-slate-400 border border-white/5 hover:text-white'
                  }`}
                >
                  0.5 mL (50 units)
                </button>
                <button
                  onClick={() => setSyringeType(30)}
                  className={`py-2 px-2 text-xs font-mono rounded-sm text-center transition-all cursor-pointer ${
                    syringeType === 30
                      ? 'bg-teal-500/20 text-teal-300 border border-teal-500/50 font-bold'
                      : 'bg-[#121820] text-slate-400 border border-white/5 hover:text-white'
                  }`}
                >
                  0.3 mL (30 units)
                </button>
              </div>
            </div>
          </div>

          {/* Computed Results Board */}
          <div className="lg:col-span-6 bg-[#070a0e] border border-teal-500/30 rounded-lg p-6 sm:p-8 space-y-6 shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-48 h-48 bg-teal-500/10 rounded-full blur-3xl pointer-events-none" />

            <div className="flex items-center justify-between border-b border-white/10 pb-4">
              <div>
                <span className="font-mono text-xs text-teal-400 uppercase tracking-widest font-semibold">
                  Analytical Solution Output
                </span>
                <h4 className="font-display text-2xl font-bold text-white tracking-tight mt-0.5">
                  Calculated Draw Volume
                </h4>
              </div>

              <div className="w-10 h-10 rounded-sm bg-teal-500/10 border border-teal-500/40 flex items-center justify-center text-teal-300">
                <Pipette className="w-5 h-5" />
              </div>
            </div>

            {/* Primary Result Card */}
            <div className="p-6 bg-[#0d131c] border border-teal-500/40 rounded-md text-center space-y-2">
              <div className="text-xs font-mono uppercase tracking-wider text-slate-400">
                Draw Target on Syringe / Pipette
              </div>
              <div className="font-mono text-5xl font-bold text-teal-300 tracking-tight">
                {unitsOnU100.toFixed(1)} <span className="text-2xl font-normal text-slate-400">Units</span>
              </div>
              <div className="text-xs font-mono text-slate-400 pt-1">
                Equivalent to <strong className="text-white">{volumePerDoseMl.toFixed(3)} mL</strong> ({volumePerDoseUl.toFixed(1)} &mu;L)
              </div>
            </div>

            {/* Detailed Metric Breakdown */}
            <div className="space-y-3 font-mono text-xs">
              <div className="p-3 bg-[#0a0f16] border border-white/5 rounded-sm flex items-center justify-between">
                <span className="text-slate-400">Final Vial Concentration:</span>
                <span className="text-white font-bold">{concentrationMgPerMl.toFixed(2)} mg/mL ({concentrationMcgPerMl.toLocaleString()} mcg/mL)</span>
              </div>

              <div className="p-3 bg-[#0a0f16] border border-white/5 rounded-sm flex items-center justify-between">
                <span className="text-slate-400">Total Doses in Vial:</span>
                <span className="text-white font-bold">{(vialMg * 1000 / doseMcg).toFixed(1)} aliquots</span>
              </div>

              <div className="p-3 bg-[#0a0f16] border border-white/5 rounded-sm flex items-center justify-between">
                <span className="text-slate-400">Recommended Storage Post-Recon:</span>
                <span className="text-teal-300">2°C to 8°C (Refrigerated)</span>
              </div>
            </div>

            {/* Syringe Visual Scale Indicator */}
            <div className="space-y-2 pt-2 border-t border-white/10">
              <div className="flex justify-between text-[11px] font-mono text-slate-400">
                <span>0</span>
                <span>25</span>
                <span>50</span>
                <span>75</span>
                <span>100 Units</span>
              </div>

              <div className="h-3 bg-[#111722] rounded-full overflow-hidden border border-white/10 relative">
                <div
                  className="h-full bg-gradient-to-r from-teal-500 to-teal-300 transition-all duration-300"
                  style={{ width: `${Math.min(100, Math.max(2, unitsOnU100))}%` }}
                />
              </div>
            </div>

            {/* Laboratory Handling Advisory */}
            <div className="p-3 bg-slate-900/60 border border-white/5 rounded text-[11px] font-mono text-slate-400 flex items-start gap-2">
              <AlertTriangle className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
              <span>
                Allow bacteriostatic water to slide gently down the interior vial glass wall. Avoid vigorous agitation or mechanical vortexing to prevent peptide denaturing.
              </span>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
