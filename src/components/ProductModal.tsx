import React from 'react';
import { X, CheckCircle2, ShieldCheck, Download, ExternalLink, FileText, ArrowRight } from 'lucide-react';
import { PeptideProduct, COARecord } from '../types/peptide';
import { COA_DATABASE } from '../data/peptides';

interface ProductModalProps {
  product: PeptideProduct | null;
  onClose: () => void;
  onInquire: (product: PeptideProduct) => void;
}

export const ProductModal: React.FC<ProductModalProps> = ({
  product,
  onClose,
  onInquire,
}) => {
  if (!product) return null;

  const coa: COARecord | undefined = COA_DATABASE[product.batchNumber];

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-md overflow-y-auto"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
    >
      <div
        className="relative w-full max-w-3xl bg-[#0c1117] border border-white/15 rounded-lg shadow-2xl overflow-hidden my-8 text-slate-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header bar */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-white/10 bg-[#090d12]">
          <div className="flex items-center gap-3">
            <span className="font-mono text-xs text-teal-400 font-semibold tracking-wider uppercase">
              Analytical Specification Sheet
            </span>
            <span className="text-slate-600">/</span>
            <span className="font-mono text-xs text-slate-400">
              {product.batchNumber}
            </span>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 text-slate-400 hover:text-white rounded-sm hover:bg-white/5 transition-colors"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal body */}
        <div className="p-6 sm:p-8 space-y-6 max-h-[75vh] overflow-y-auto">
          {/* Top Product Overview */}
          <div className="grid grid-cols-1 sm:grid-cols-12 gap-6 items-start">
            <div className="sm:col-span-4 rounded-md overflow-hidden border border-white/10 bg-[#070a0e] aspect-[4/3] relative">
              <img
                src={product.image}
                alt={product.altText}
                className="w-full h-full object-cover object-center"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent pointer-events-none" />
              <div className="absolute bottom-2 left-2 right-2 text-[10px] font-mono text-teal-300">
                Purity: {product.purity} (HPLC)
              </div>
            </div>

            <div className="sm:col-span-8 space-y-3">
              <div>
                <h3 className="font-display text-2xl font-bold text-white tracking-tight">
                  {product.name}
                </h3>
                <p className="text-xs font-mono text-slate-400">
                  {product.chemicalName || product.name}
                </p>
              </div>

              {/* Zero-Pill Unboxed Metadata Line */}
              <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-xs text-slate-300 font-mono py-1 border-y border-white/5">
                <span>Strength: <strong className="text-white">{product.strength}</strong></span>
                <span className="text-slate-600">·</span>
                <span>CAS: <strong className="text-white">{product.casNumber}</strong></span>
                <span className="text-slate-600">·</span>
                <span>MW: <strong className="text-white">{product.molecularWeight}</strong></span>
              </div>

              <p className="text-xs text-slate-400 leading-relaxed">
                {product.description}
              </p>
            </div>
          </div>

          {/* Technical Specifications Table */}
          <div className="space-y-2">
            <h4 className="font-mono text-xs uppercase tracking-wider text-slate-400 font-semibold">
              Chemical & Analytical Characterization
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs font-mono">
              <div className="p-3 bg-[#080c10] border border-white/5 rounded-sm flex justify-between">
                <span className="text-slate-500">Molecular Formula:</span>
                <span className="text-slate-200">{product.molecularFormula}</span>
              </div>
              <div className="p-3 bg-[#080c10] border border-white/5 rounded-sm flex justify-between">
                <span className="text-slate-500">Physical Appearance:</span>
                <span className="text-slate-200">{product.appearance}</span>
              </div>
              <div className="p-3 bg-[#080c10] border border-white/5 rounded-sm flex justify-between">
                <span className="text-slate-500">Storage Parameter:</span>
                <span className="text-slate-200">{product.storage}</span>
              </div>
              <div className="p-3 bg-[#080c10] border border-white/5 rounded-sm flex justify-between">
                <span className="text-slate-500">HPLC Retention Time:</span>
                <span className="text-teal-400 font-semibold">{product.retentionTimeMinutes} min</span>
              </div>
            </div>

            {product.sequence && (
              <div className="p-3 bg-[#080c10] border border-white/5 rounded-sm text-xs font-mono">
                <div className="text-slate-500 mb-1">Primary Amino Acid Sequence:</div>
                <div className="text-teal-200 break-words font-semibold tracking-wide">
                  {product.sequence}
                </div>
              </div>
            )}
          </div>

          {/* COA Batch Traceability */}
          {coa && (
            <div className="p-4 bg-teal-950/20 border border-teal-500/30 rounded-md space-y-3">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-teal-400" />
                  <span className="font-mono text-xs font-semibold text-teal-300 uppercase tracking-wider">
                    Verified Certificate of Analysis on File
                  </span>
                </div>
                <span className="text-[11px] font-mono text-slate-400">
                  Lot: {coa.batchNumber}
                </span>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 text-xs font-mono pt-1">
                <div>
                  <div className="text-slate-500 text-[10px]">OBSERVED PURITY</div>
                  <div className="text-teal-300 font-bold">{coa.observedPurity}</div>
                </div>
                <div>
                  <div className="text-slate-500 text-[10px]">ANALYSIS DATE</div>
                  <div className="text-slate-200">{coa.lotDate}</div>
                </div>
                <div>
                  <div className="text-slate-500 text-[10px]">ENDOTOXIN</div>
                  <div className="text-slate-200">{coa.endotoxinLevel}</div>
                </div>
                <div>
                  <div className="text-slate-500 text-[10px]">SIGN-OFF</div>
                  <div className="text-slate-200 truncate">{coa.analystSignoff.split(',')[0]}</div>
                </div>
              </div>
            </div>
          )}

          {/* Laboratory Research Disclaimer */}
          <div className="text-[11px] text-slate-500 bg-black/40 p-3 rounded border border-white/5 font-mono">
            <strong>NOTICE:</strong> This product is sold strictly for in-vitro research and laboratory analytical use only. It is not intended for human consumption, clinical treatment, diagnostic testing, or veterinary applications. Reconstitution must be carried out under sterile laminar flow hoods by qualified personnel.
          </div>
        </div>

        {/* Footer Actions */}
        <div className="px-6 py-4 bg-[#090d12] border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-3">
          <div className="text-xs font-mono text-slate-400">
            Adelaide Express Australian Dispatch Available
          </div>

          <div className="flex items-center gap-3 w-full sm:w-auto">
            <button
              onClick={onClose}
              className="px-4 py-2 text-xs font-medium text-slate-400 hover:text-white rounded-sm hover:bg-white/5 transition-colors cursor-pointer"
            >
              Close
            </button>
            <button
              onClick={() => {
                onInquire(product);
                onClose();
              }}
              className="flex-1 sm:flex-initial px-5 py-2.5 text-xs font-semibold tracking-wide uppercase text-[#07090d] bg-teal-400 hover:bg-teal-300 rounded-sm transition-all duration-200 shadow-sm flex items-center justify-center gap-2 cursor-pointer"
            >
              <span>Procure / Inquire Batch</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
