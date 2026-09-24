import React from 'react';
import { Package, Truck, ShieldCheck, CheckCircle2, ThermometerSnowflake, Clock } from 'lucide-react';
import packagingImg from '../assets/images/packaging_dispatch_1790265851232.jpg';

interface FulfillmentWorkflowProps {
  onInquire: () => void;
}

export const FulfillmentWorkflow: React.FC<FulfillmentWorkflowProps> = ({ onInquire }) => {
  const steps = [
    {
      num: '01',
      title: 'Compound Selection & Verification',
      desc: 'Browse our verified analytical catalog with explicit milligram masses, CAS registries, and published purity specifications.',
      tag: 'Analytical Assay Matched'
    },
    {
      num: '02',
      title: 'Hermetic Nitrogen Packaging',
      desc: 'Each borosilicate vial is sealed in an impermeable, moisture-barrier multi-layer foil pouch with desiccant to prevent oxidation during storage and transit.',
      tag: 'Moisture-Barrier Enclosure'
    },
    {
      num: '03',
      title: 'Express Adelaide Hub Dispatch',
      desc: 'Dispatched via premium tracked express courier from our South Australian facility directly to your institution or laboratory bench.',
      tag: 'Tracked & Insulated'
    },
    {
      num: '04',
      title: 'Traceability & Verification Support',
      desc: 'Receive batch-specific documentation, retention times, and direct technical correspondence via secure email or direct WhatsApp desk.',
      tag: 'ISO-17025 Traceable'
    }
  ];

  return (
    <section id="workflow" className="py-24 bg-[#080b0f] relative border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="max-w-3xl space-y-4 mb-16">
          <div className="font-mono text-xs uppercase tracking-widest text-teal-400 font-semibold">
            Fulfillment Protocol · Scientific Chain of Custody
          </div>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-medium tracking-tight text-white">
            How Australian Laboratories Order
          </h2>
          <p className="text-base text-slate-400 font-light leading-relaxed">
            From state-of-the-art analytical qualification to temperature-managed dispatch across Australia, our logistics protocol preserves peptide stability at every stage.
          </p>
        </div>

        {/* 4 Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {steps.map((step) => (
            <div
              key={step.num}
              className="p-6 bg-[#0c1016] border border-white/10 rounded-md flex flex-col justify-between space-y-4 hover:border-teal-500/30 transition-colors"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="font-mono text-sm font-bold text-teal-400">
                    {step.num}
                  </span>
                  <span className="text-[10px] font-mono text-slate-500 uppercase">
                    Apex Protocol
                  </span>
                </div>

                <h3 className="font-display text-lg font-semibold text-white">
                  {step.title}
                </h3>

                <p className="text-xs text-slate-400 leading-relaxed font-light">
                  {step.desc}
                </p>
              </div>

              <div className="pt-3 border-t border-white/5 text-[11px] font-mono text-teal-300">
                {step.tag}
              </div>
            </div>
          ))}
        </div>

        {/* Packaging Showcase Banner */}
        <div className="rounded-lg overflow-hidden border border-white/10 bg-[#0d1218] grid grid-cols-1 lg:grid-cols-12 items-center">
          
          <div className="lg:col-span-6 p-8 lg:p-12 space-y-6">
            <div className="space-y-2">
              <div className="font-mono text-xs uppercase tracking-wider text-teal-400 font-semibold">
                Packaging Engineering
              </div>
              <h3 className="font-display text-2xl sm:text-3xl font-bold text-white tracking-tight">
                Vacuum-Sealed Stability in Transit
              </h3>
            </div>

            <p className="text-xs sm:text-sm text-slate-400 leading-relaxed font-light">
              Peptides are vulnerable to moisture, ambient heat, and light exposure. Apex Peptides Australia ships each order in thick, multi-ply metallized barrier packaging with high-capacity desiccant inserts and discreet labeling to ensure arrival in pristine lyophilized condition.
            </p>

            <div className="grid grid-cols-2 gap-4 pt-2 text-xs font-mono">
              <div className="p-3 bg-[#080c10] border border-white/5 rounded-sm">
                <div className="text-slate-500 text-[10px]">DISPATCH ORIGIN</div>
                <div className="text-white font-semibold mt-0.5">Adelaide, SA</div>
              </div>
              <div className="p-3 bg-[#080c10] border border-white/5 rounded-sm">
                <div className="text-slate-500 text-[10px]">DOMESTIC COURIER</div>
                <div className="text-white font-semibold mt-0.5">Express Tracked</div>
              </div>
              <div className="p-3 bg-[#080c10] border border-white/5 rounded-sm">
                <div className="text-slate-500 text-[10px]">PACKAGING GRADE</div>
                <div className="text-white font-semibold mt-0.5">Vacuum Mylar Foil</div>
              </div>
              <div className="p-3 bg-[#080c10] border border-white/5 rounded-sm">
                <div className="text-slate-500 text-[10px]">DOCUMENTATION</div>
                <div className="text-white font-semibold mt-0.5">COA Included</div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-6 aspect-[4/3] sm:aspect-[16/10] relative">
            <img
              src={packagingImg}
              alt="Apex Peptides Australia vacuum-sealed moisture-proof research packaging"
              className="w-full h-full object-cover object-center"
              loading="lazy"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-[#0d1218] via-transparent to-transparent hidden lg:block" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0d1218] via-transparent to-transparent lg:hidden" />
          </div>

        </div>

      </div>
    </section>
  );
};
