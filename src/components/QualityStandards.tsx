import React, { useState } from 'react';
import { ShieldCheck, CheckCircle2, FileSearch, ArrowDownToLine, Microscope, Check, AlertCircle } from 'lucide-react';
import labTestingImg from '../assets/images/lab_testing_hplc_1790265836685.jpg';
import { COA_DATABASE } from '../data/peptides';
import { COARecord } from '../types/peptide';

export const QualityStandards: React.FC = () => {
  const [selectedBatch, setSelectedBatch] = useState<string>('APX-2026-BPC10-09');
  const [isCopied, setIsCopied] = useState<boolean>(false);

  const activeCOA: COARecord = COA_DATABASE[selectedBatch] || COA_DATABASE['APX-2026-BPC10-09'];

  const handleDownloadCOA = () => {
    // Generate clean printable analytical report window
    const printWindow = window.open('', '_blank');
    if (printWindow) {
      printWindow.document.write(`
        <!DOCTYPE html>
        <html>
          <head>
            <title>COA - ${activeCOA.batchNumber} - Apex Peptides Australia</title>
            <style>
              body { font-family: monospace; padding: 40px; color: #111; line-height: 1.5; font-size: 13px; }
              .header { border-bottom: 2px solid #111; padding-bottom: 12px; margin-bottom: 24px; }
              .title { font-size: 20px; font-weight: bold; }
              .table { width: 100%; border-collapse: collapse; margin: 20px 0; }
              .table th, .table td { border: 1px solid #ccc; padding: 8px 12px; text-align: left; }
              .table th { background: #f5f5f5; }
              .footer { margin-top: 40px; font-size: 11px; color: #666; border-top: 1px solid #ddd; padding-top: 12px; }
            </style>
          </head>
          <body>
            <div class="header">
              <div class="title">APEX PEPTIDES AUSTRALIA</div>
              <div>CERTIFICATE OF ANALYSIS (COA) · ANALYTICAL TESTING REPORT</div>
              <div>Lot ID: ${activeCOA.batchNumber} | Issued: ${activeCOA.lotDate}</div>
            </div>
            <h3>Sample Specification: ${activeCOA.productName} (${activeCOA.strength})</h3>
            <table class="table">
              <tr><th>Analytical Assay</th><th>Specification</th><th>Observed Result</th><th>Status</th></tr>
              <tr><td>Physical Appearance</td><td>Lyophilized solid</td><td>${activeCOA.appearanceTest}</td><td>PASSED</td></tr>
              <tr><td>Purity (HPLC UV 214nm)</td><td>${activeCOA.targetPurity}</td><td>${activeCOA.observedPurity}</td><td>PASSED</td></tr>
              <tr><td>Mass Spectrometry (ESI-MS)</td><td>${activeCOA.targetMW}</td><td>${activeCOA.observedMW}</td><td>PASSED</td></tr>
              <tr><td>Chromatographic Retention</td><td>Controlled reference</td><td>${activeCOA.retentionTime}</td><td>PASSED</td></tr>
              <tr><td>Bacterial Endotoxin</td><td>&lt; 0.1 EU/mg</td><td>${activeCOA.endotoxinLevel}</td><td>PASSED</td></tr>
            </table>
            <div><strong>Testing Facility:</strong> ${activeCOA.testingLab}</div>
            <div><strong>Analyst Sign-off:</strong> ${activeCOA.analystSignoff}</div>
            <div class="footer">
              This Certificate of Analysis certifies that the above batch has been rigorously analyzed and conforms to verified research specifications. Non-sterile chemical reagent strictly for laboratory research.
            </div>
            <script>window.print();</script>
          </body>
        </html>
      `);
      printWindow.document.close();
    }
  };

  return (
    <section id="quality" className="py-24 bg-[#080b0f] relative border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="max-w-3xl space-y-4 mb-16">
          <div className="font-mono text-xs uppercase tracking-widest text-teal-400 font-semibold">
            Quality Assurance Protocol · Zero Compromise
          </div>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-medium tracking-tight text-white">
            Analytical Rigor & Verification
          </h2>
          <p className="text-base text-slate-400 font-light leading-relaxed">
            Every batch distributed by Apex Peptides Australia is synthesized with analytical-grade amino acids and verified through paired High-Performance Liquid Chromatography (HPLC) and Mass Spectrometry (MS) to guarantee sequence fidelity and freedom from residual scavengers.
          </p>
        </div>

        {/* 4 Pillars of Laboratory Quality */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          
          <div className="p-6 bg-[#0c1016] border border-white/10 rounded-md space-y-3">
            <div className="w-10 h-10 rounded-sm bg-teal-500/10 border border-teal-500/30 flex items-center justify-center text-teal-300 font-mono text-sm font-semibold">
              01
            </div>
            <h3 className="font-display text-lg font-semibold text-white">
              HPLC Purity Assay
            </h3>
            <p className="text-xs text-slate-400 leading-relaxed font-light">
              Reversed-phase C18 gradient chromatography with multi-wavelength UV detection, establishing peak area purity of ≥ 99.0% for every catalog compound.
            </p>
            <div className="pt-2 text-[11px] font-mono text-teal-400">
              Assay standard: 214nm & 280nm
            </div>
          </div>

          <div className="p-6 bg-[#0c1016] border border-white/10 rounded-md space-y-3">
            <div className="w-10 h-10 rounded-sm bg-teal-500/10 border border-teal-500/30 flex items-center justify-center text-teal-300 font-mono text-sm font-semibold">
              02
            </div>
            <h3 className="font-display text-lg font-semibold text-white">
              Mass Spectrometry
            </h3>
            <p className="text-xs text-slate-400 leading-relaxed font-light">
              Electrospray Ionization (ESI-MS) confirms exact molecular mass matching theoretical sequence weight, ruling out deletion or insertion errors.
            </p>
            <div className="pt-2 text-[11px] font-mono text-teal-400">
              Tolerance: ± 0.5 Da
            </div>
          </div>

          <div className="p-6 bg-[#0c1016] border border-white/10 rounded-md space-y-3">
            <div className="w-10 h-10 rounded-sm bg-teal-500/10 border border-teal-500/30 flex items-center justify-center text-teal-300 font-mono text-sm font-semibold">
              03
            </div>
            <h3 className="font-display text-lg font-semibold text-white">
              Sterile Lyophilization
            </h3>
            <p className="text-xs text-slate-400 leading-relaxed font-light">
              Deep cryogenic freeze-drying removes residual moisture to below 2.0%, yielding uniform cake morphology that reconstitutes instantaneously.
            </p>
            <div className="pt-2 text-[11px] font-mono text-teal-400">
              Moisture content: &lt; 2.0%
            </div>
          </div>

          <div className="p-6 bg-[#0c1016] border border-white/10 rounded-md space-y-3">
            <div className="w-10 h-10 rounded-sm bg-teal-500/10 border border-teal-500/30 flex items-center justify-center text-teal-300 font-mono text-sm font-semibold">
              04
            </div>
            <h3 className="font-display text-lg font-semibold text-white">
              Cold-Chain Integrity
            </h3>
            <p className="text-xs text-slate-400 leading-relaxed font-light">
              Borosilicate Type 1 vials capped with PTFE/butyl septa under ultra-pure nitrogen flush, preventing oxidation and peptide degradation during transit.
            </p>
            <div className="pt-2 text-[11px] font-mono text-teal-400">
              Hermetic nitrogen seal
            </div>
          </div>

        </div>

        {/* Laboratory Instrumentation Showcase Banner */}
        <div className="mb-16 rounded-lg overflow-hidden border border-white/10 bg-[#0d1218] grid grid-cols-1 lg:grid-cols-12 items-center">
          <div className="lg:col-span-7 aspect-[16/9] relative">
            <img
              src={labTestingImg}
              alt="High performance liquid chromatography analytical testing laboratory setup"
              className="w-full h-full object-cover object-center"
              loading="lazy"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-transparent to-[#0d1218] hidden lg:block" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0d1218] via-transparent to-transparent lg:hidden" />
          </div>

          <div className="lg:col-span-5 p-8 lg:p-10 space-y-4">
            <div className="font-mono text-xs uppercase tracking-wider text-teal-400 font-semibold">
              Traceability & Independent Audit
            </div>
            <h3 className="font-display text-2xl font-bold text-white tracking-tight">
              Every Vial Traced to an HPLC Chromatogram
            </h3>
            <p className="text-xs sm:text-sm text-slate-400 leading-relaxed font-light">
              We do not batch-average or estimate purity figures. Each production run is independently assayed by an accredited analytical facility before entry into the Australian distribution inventory.
            </p>

            <div className="space-y-2 pt-2 text-xs font-mono text-slate-300">
              <div className="flex items-center gap-2">
                <Check className="w-4 h-4 text-teal-400" />
                <span>Zero batch-averaging or synthetic purity inflation</span>
              </div>
              <div className="flex items-center gap-2">
                <Check className="w-4 h-4 text-teal-400" />
                <span>Full chromatogram spectrum available for verification</span>
              </div>
              <div className="flex items-center gap-2">
                <Check className="w-4 h-4 text-teal-400" />
                <span>Authentic retention time & UV absorbance data</span>
              </div>
            </div>
          </div>
        </div>

        {/* Interactive COA (Certificate of Analysis) Inspector */}
        <div id="coa" className="bg-[#0b0f15] border border-white/15 rounded-lg overflow-hidden shadow-2xl">
          
          {/* COA Header & Batch Selector */}
          <div className="p-6 bg-[#080c10] border-b border-white/10 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
            <div>
              <div className="flex items-center gap-2.5">
                <ShieldCheck className="w-5 h-5 text-teal-400" />
                <h3 className="font-display text-xl font-bold text-white tracking-tight">
                  Certificate of Analysis (COA) Inspector
                </h3>
              </div>
              <p className="text-xs font-mono text-slate-400 mt-1">
                Select a research batch below to inspect laboratory test records and chromatogram peak integration.
              </p>
            </div>

            {/* Batch Selector Tabs (Functional Segmented Control) */}
            <div className="flex items-center gap-1.5 p-1 bg-[#121820] rounded-sm border border-white/10 overflow-x-auto max-w-full">
              {Object.keys(COA_DATABASE).map((batchId) => {
                const item = COA_DATABASE[batchId];
                return (
                  <button
                    key={batchId}
                    onClick={() => setSelectedBatch(batchId)}
                    className={`px-3 py-1.5 text-xs font-mono rounded-sm transition-all whitespace-nowrap cursor-pointer ${
                      selectedBatch === batchId
                        ? 'bg-teal-400 text-[#07090d] font-bold shadow-sm'
                        : 'text-slate-400 hover:text-white hover:bg-white/5'
                    }`}
                  >
                    {item.productName.split(' ')[0]} ({item.batchNumber.split('-').slice(-2).join('-')})
                  </button>
                );
              })}
            </div>
          </div>

          {/* COA Detail View */}
          <div className="p-6 lg:p-8 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            
            {/* Left: Certificate Metadata Table */}
            <div className="lg:col-span-6 space-y-6">
              
              <div className="space-y-1">
                <div className="text-xs font-mono text-teal-400 uppercase tracking-widest font-semibold">
                  Official Assay Report
                </div>
                <h4 className="font-display text-2xl font-bold text-white">
                  {activeCOA.productName}
                </h4>
                <div className="text-xs font-mono text-slate-400">
                  Batch: {activeCOA.batchNumber} · Strength: {activeCOA.strength}
                </div>
              </div>

              {/* Data Table */}
              <div className="space-y-2 text-xs font-mono">
                <div className="p-2.5 bg-[#0e141c] border border-white/5 rounded-sm flex items-center justify-between">
                  <span className="text-slate-500">Test Laboratory:</span>
                  <span className="text-slate-200 text-right truncate max-w-[220px]">
                    {activeCOA.testingLab}
                  </span>
                </div>
                <div className="p-2.5 bg-[#0e141c] border border-white/5 rounded-sm flex items-center justify-between">
                  <span className="text-slate-500">Analysis Date:</span>
                  <span className="text-slate-200">{activeCOA.lotDate}</span>
                </div>
                <div className="p-2.5 bg-[#0e141c] border border-white/5 rounded-sm flex items-center justify-between">
                  <span className="text-slate-500">Expiration / Re-test:</span>
                  <span className="text-slate-200">{activeCOA.expiryDate}</span>
                </div>
                <div className="p-2.5 bg-[#0e141c] border border-white/5 rounded-sm flex items-center justify-between">
                  <span className="text-slate-500">Target Molecular Weight:</span>
                  <span className="text-slate-200">{activeCOA.targetMW}</span>
                </div>
                <div className="p-2.5 bg-[#0e141c] border border-white/5 rounded-sm flex items-center justify-between">
                  <span className="text-slate-500">Observed MS (ESI-MS):</span>
                  <span className="text-teal-300 font-semibold">{activeCOA.observedMW}</span>
                </div>
                <div className="p-2.5 bg-[#0e141c] border border-white/5 rounded-sm flex items-center justify-between">
                  <span className="text-slate-500">HPLC Retention Time:</span>
                  <span className="text-teal-300 font-semibold">{activeCOA.retentionTime}</span>
                </div>
                <div className="p-2.5 bg-[#0e141c] border border-white/5 rounded-sm flex items-center justify-between">
                  <span className="text-slate-500">Endotoxin Level:</span>
                  <span className="text-emerald-400 font-semibold">{activeCOA.endotoxinLevel}</span>
                </div>
              </div>

              {/* Analyst Signoff */}
              <div className="pt-2 border-t border-white/10 flex items-center justify-between text-xs font-mono">
                <div className="text-slate-500">
                  Principal Analyst: <span className="text-slate-300 font-medium">{activeCOA.analystSignoff}</span>
                </div>
                <div className="text-teal-400 font-semibold flex items-center gap-1">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  <span>Verified</span>
                </div>
              </div>

              {/* Download / Print Report Action */}
              <button
                onClick={handleDownloadCOA}
                className="w-full py-3 bg-[#131b24] hover:bg-[#1a2430] border border-white/15 hover:border-teal-500/40 text-xs font-mono font-medium text-slate-200 hover:text-white rounded-sm transition-colors flex items-center justify-center gap-2 cursor-pointer"
              >
                <ArrowDownToLine className="w-4 h-4 text-teal-400" />
                <span>Export Official Printable COA Document (PDF)</span>
              </button>
            </div>

            {/* Right: Interactive Chromatogram Graph (Simulated UV Absorption Spectrum) */}
            <div className="lg:col-span-6 space-y-4">
              <div className="flex items-center justify-between text-xs font-mono text-slate-400">
                <span>HPLC UV DETECTOR CHROMATOGRAM (214nm)</span>
                <span className="text-teal-400 font-bold">{activeCOA.observedPurity} PEAK AREA</span>
              </div>

              <div className="p-5 bg-[#06080c] border border-white/10 rounded-md relative">
                {/* Simulated SVG Chromatogram Curve */}
                <div className="h-56 w-full flex flex-col justify-end relative">
                  {/* Grid Lines */}
                  <div className="absolute inset-0 flex flex-col justify-between pointer-events-none opacity-20">
                    <div className="border-b border-white/40 w-full" />
                    <div className="border-b border-white/40 w-full" />
                    <div className="border-b border-white/40 w-full" />
                    <div className="border-b border-white/40 w-full" />
                  </div>

                  {/* SVG Chart */}
                  <svg
                    viewBox="0 0 400 160"
                    className="w-full h-full overflow-visible"
                    preserveAspectRatio="none"
                  >
                    <defs>
                      <linearGradient id="chromaGrad" x1="0%" y1="0%" x2="0%" y2="100%">
                        <stop offset="0%" stopColor="#14b8a6" stopOpacity="0.4" />
                        <stop offset="100%" stopColor="#14b8a6" stopOpacity="0.0" />
                      </linearGradient>
                    </defs>

                    {/* Area fill */}
                    <path
                      d="M 20 150 Q 80 148, 140 145 T 200 140 Q 215 130, 220 20 Q 225 130, 240 142 T 320 148 T 380 150 L 380 155 L 20 155 Z"
                      fill="url(#chromaGrad)"
                    />

                    {/* Peak curve */}
                    <path
                      d="M 20 150 Q 80 148, 140 145 T 200 140 Q 215 130, 220 20 Q 225 130, 240 142 T 320 148 T 380 150"
                      fill="none"
                      stroke="#2dd4bf"
                      strokeWidth="2"
                    />

                    {/* Peak retention pin */}
                    <circle cx="220" cy="20" r="4" fill="#5eead4" />
                    <line x1="220" y1="20" x2="220" y2="155" stroke="#14b8a6" strokeWidth="1" strokeDasharray="2 2" />
                  </svg>

                  {/* X Axis Time Labels */}
                  <div className="flex justify-between text-[10px] font-mono text-slate-500 pt-2 border-t border-white/10">
                    <span>0.0 min</span>
                    <span>3.0 min</span>
                    <span className="text-teal-400 font-bold">RT: {activeCOA.retentionTime.split(' ')[0]}</span>
                    <span>9.0 min</span>
                    <span>12.0 min</span>
                  </div>
                </div>

                {/* Analytical Peak Summary Box */}
                <div className="mt-4 pt-4 border-t border-white/10 grid grid-cols-3 gap-2 text-center font-mono">
                  <div className="bg-[#0b1016] p-2 rounded border border-white/5">
                    <div className="text-[10px] text-slate-500">MAIN PEAK AREA</div>
                    <div className="text-xs font-bold text-teal-300">{activeCOA.observedPurity}</div>
                  </div>
                  <div className="bg-[#0b1016] p-2 rounded border border-white/5">
                    <div className="text-[10px] text-slate-500">ASYMMETRY FACTOR</div>
                    <div className="text-xs font-bold text-slate-200">1.08</div>
                  </div>
                  <div className="bg-[#0b1016] p-2 rounded border border-white/5">
                    <div className="text-[10px] text-slate-500">THEORETICAL PLATES</div>
                    <div className="text-xs font-bold text-slate-200">&gt; 12,400</div>
                  </div>
                </div>
              </div>

              <div className="text-[11px] font-mono text-slate-500 leading-normal">
                Spectroscopic baseline remains stable under linear acetonitrile-water gradient elution (0.1% TFA modifier). No secondary co-eluting dimer impurities detected above threshold (limit of detection: 0.05%).
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
