import React, { useState } from 'react';
import { X, CheckCircle2, Send, Download, Mail, MessageSquare, ShieldCheck, ArrowRight } from 'lucide-react';
import { PeptideProduct } from '../types/peptide';
import { PEPTIDES_DATA } from '../data/peptides';

interface InstitutionalProcurementProps {
  isOpen: boolean;
  onClose: () => void;
  preselectedProduct?: PeptideProduct | null;
}

export const InstitutionalProcurement: React.FC<InstitutionalProcurementProps> = ({
  isOpen,
  onClose,
  preselectedProduct,
}) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    institution: '',
    phoneOrWhatsapp: '',
    inquiryType: 'batch-quote',
    selectedPeptide: preselectedProduct ? preselectedProduct.name : 'BPC-157',
    quantity: '5 vials',
    projectNotes: '',
    researchAgreement: false,
  });

  const [submitted, setSubmitted] = useState(false);
  const [referenceId, setReferenceId] = useState('');

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.researchAgreement) return;

    // Generate random realistic laboratory inquiry ID
    const randomRef = `APX-AU-${Math.floor(1000 + Math.random() * 9000)}`;
    setReferenceId(randomRef);
    setSubmitted(true);
  };

  const handleDownloadFullCatalog = () => {
    const catalogWindow = window.open('', '_blank');
    if (catalogWindow) {
      catalogWindow.document.write(`
        <!DOCTYPE html>
        <html>
          <head>
            <title>Apex Peptides Australia - 2026 Analytical Research Catalog</title>
            <style>
              body { font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif; padding: 40px; color: #1e293b; line-height: 1.5; font-size: 13px; }
              .header { border-bottom: 2px solid #0f172a; padding-bottom: 16px; margin-bottom: 24px; }
              .title { font-size: 24px; font-weight: bold; }
              table { width: 100%; border-collapse: collapse; margin-top: 20px; font-family: monospace; font-size: 12px; }
              th, td { border: 1px solid #cbd5e1; padding: 8px 12px; text-align: left; }
              th { background: #f1f5f9; }
              .disclaimer { margin-top: 30px; font-size: 11px; color: #64748b; border: 1px solid #e2e8f0; padding: 12px; }
            </style>
          </head>
          <body>
            <div class="header">
              <div class="title">APEX PEPTIDES AUSTRALIA</div>
              <div>Analytical Grade Peptides · Product Directory 2026</div>
              <div>Distribution Facility: Adelaide, South Australia | inquiries@apexpeptidesaustralia.com</div>
            </div>
            <table>
              <thead>
                <tr>
                  <th>Product</th>
                  <th>Strength</th>
                  <th>CAS Number</th>
                  <th>MW (g/mol)</th>
                  <th>Purity Target</th>
                  <th>Status</th>
                </tr>
              </thead>
              <tbody>
                ${PEPTIDES_DATA.map(p => `
                  <tr>
                    <td><strong>${p.name}</strong></td>
                    <td>${p.strength}</td>
                    <td>${p.casNumber}</td>
                    <td>${p.molecularWeight}</td>
                    <td>${p.purity}</td>
                    <td>Adelaide Stock</td>
                  </tr>
                `).join('')}
              </tbody>
            </table>
            <div class="disclaimer">
              <strong>LABORATORY RESEARCH USE ONLY:</strong> All listed compounds are manufactured and supplied solely for in-vitro analytical testing, biochemical assays, and laboratory experimentation. Not for human or animal consumption.
            </div>
            <script>window.print();</script>
          </body>
        </html>
      `);
      catalogWindow.document.close();
    }
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-md overflow-y-auto"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
    >
      <div
        className="relative w-full max-w-2xl bg-[#0c1117] border border-white/15 rounded-lg shadow-2xl overflow-hidden my-8 text-slate-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-white/10 bg-[#080c10]">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-teal-400" />
            <h3 className="font-display text-lg font-bold text-white tracking-tight">
              Institutional Inquiry & Batch Procurement
            </h3>
          </div>
          <button
            onClick={onClose}
            className="p-1 text-slate-400 hover:text-white rounded-sm"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {submitted ? (
          /* Confirmation Success State */
          <div className="p-8 text-center space-y-5">
            <div className="w-12 h-12 rounded-full bg-teal-500/20 border border-teal-500/40 text-teal-300 flex items-center justify-center mx-auto">
              <CheckCircle2 className="w-6 h-6" />
            </div>

            <div className="space-y-2">
              <h4 className="font-display text-2xl font-bold text-white">
                Inquiry Logged Successfully
              </h4>
              <p className="text-xs font-mono text-teal-400">
                Reference ID: {referenceId}
              </p>
              <p className="text-xs text-slate-400 max-w-md mx-auto leading-relaxed">
                Thank you, {formData.name}. Our Adelaide laboratory synthesis and logistics team will review your batch specifications and reply with a formal analytical quote and COA batch reserve within 2–4 hours.
              </p>
            </div>

            <div className="p-4 bg-[#080c10] border border-white/5 rounded text-left text-xs font-mono space-y-1 text-slate-300 max-w-md mx-auto">
              <div><strong>Compound:</strong> {formData.selectedPeptide} ({formData.quantity})</div>
              <div><strong>Institution:</strong> {formData.institution || 'Independent Research Laboratory'}</div>
              <div><strong>Dispatch:</strong> Express Tracked (Adelaide Facility)</div>
            </div>

            <div className="flex justify-center gap-3 pt-2">
              <button
                onClick={handleDownloadFullCatalog}
                className="px-4 py-2.5 bg-[#141c26] hover:bg-[#1a2533] text-xs font-mono text-slate-200 border border-white/10 rounded-sm flex items-center gap-2 cursor-pointer"
              >
                <Download className="w-3.5 h-3.5 text-teal-400" />
                <span>Print Official PDF Catalog</span>
              </button>
              <button
                onClick={onClose}
                className="px-5 py-2.5 bg-teal-400 hover:bg-teal-300 text-xs font-mono text-[#07090d] font-bold rounded-sm cursor-pointer"
              >
                Done
              </button>
            </div>
          </div>
        ) : (
          /* Form State */
          <form onSubmit={handleSubmit} className="p-6 sm:p-8 space-y-4 max-h-[78vh] overflow-y-auto">
            <p className="text-xs text-slate-400 leading-relaxed font-light">
              Submit your project details for formal institution invoicing, bulk pricing, or batch reservation. For urgent inquiries, direct WhatsApp desk and email correspondence are also active.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="space-y-1">
                <label className="text-xs font-mono text-slate-300">Contact / Investigator Name *</label>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder="e.g. Dr. Alex Mercer"
                  className="w-full bg-[#080c10] border border-white/10 rounded-sm p-2.5 text-xs text-white focus:outline-none focus:border-teal-400"
                />
              </div>

              <div className="space-y-1">
                <label className="text-xs font-mono text-slate-300">Institutional Email *</label>
                <input
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  placeholder="e.g. researcher@unimelb.edu.au"
                  className="w-full bg-[#080c10] border border-white/10 rounded-sm p-2.5 text-xs text-white focus:outline-none focus:border-teal-400"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="space-y-1">
                <label className="text-xs font-mono text-slate-300">Institution / Research Lab Name</label>
                <input
                  type="text"
                  value={formData.institution}
                  onChange={(e) => setFormData({ ...formData, institution: e.target.value })}
                  placeholder="e.g. Monash Bio-Analytical Lab"
                  className="w-full bg-[#080c10] border border-white/10 rounded-sm p-2.5 text-xs text-white focus:outline-none focus:border-teal-400"
                />
              </div>

              <div className="space-y-1">
                <label className="text-xs font-mono text-slate-300">Phone or WhatsApp</label>
                <input
                  type="text"
                  value={formData.phoneOrWhatsapp}
                  onChange={(e) => setFormData({ ...formData, phoneOrWhatsapp: e.target.value })}
                  placeholder="+61 400 000 000"
                  className="w-full bg-[#080c10] border border-white/10 rounded-sm p-2.5 text-xs text-white focus:outline-none focus:border-teal-400"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="space-y-1">
                <label className="text-xs font-mono text-slate-300">Peptide of Interest</label>
                <select
                  value={formData.selectedPeptide}
                  onChange={(e) => setFormData({ ...formData, selectedPeptide: e.target.value })}
                  className="w-full bg-[#080c10] border border-white/10 rounded-sm p-2.5 text-xs text-white focus:outline-none focus:border-teal-400"
                >
                  {PEPTIDES_DATA.map((p) => (
                    <option key={p.id} value={p.name}>
                      {p.name} ({p.strength})
                    </option>
                  ))}
                  <option value="Custom Synthesis">Custom Peptide Synthesis</option>
                </select>
              </div>

              <div className="space-y-1">
                <label className="text-xs font-mono text-slate-300">Estimated Quantity</label>
                <select
                  value={formData.quantity}
                  onChange={(e) => setFormData({ ...formData, quantity: e.target.value })}
                  className="w-full bg-[#080c10] border border-white/10 rounded-sm p-2.5 text-xs text-white focus:outline-none focus:border-teal-400"
                >
                  <option value="1-4 vials">Single / Evaluation (1–4 vials)</option>
                  <option value="5-10 vials">Standard Batch (5–10 vials)</option>
                  <option value="20-50 vials">Institutional Bulk (20–50 vials)</option>
                  <option value="100+ vials">Commercial Research Reserve (100+ vials)</option>
                </select>
              </div>
            </div>

            <div className="space-y-1">
              <label className="text-xs font-mono text-slate-300">Analytical Notes / In-Vitro Application</label>
              <textarea
                rows={2}
                value={formData.projectNotes}
                onChange={(e) => setFormData({ ...formData, projectNotes: e.target.value })}
                placeholder="Mention specific lot criteria, HPLC retention window, or cold-chain storage requisites..."
                className="w-full bg-[#080c10] border border-white/10 rounded-sm p-2.5 text-xs text-white focus:outline-none focus:border-teal-400"
              />
            </div>

            {/* Mandatory Agreement Checkbox */}
            <div className="p-3 bg-[#080c10] border border-white/10 rounded-sm flex items-start gap-2.5">
              <input
                type="checkbox"
                id="researchAgreement"
                required
                checked={formData.researchAgreement}
                onChange={(e) => setFormData({ ...formData, researchAgreement: e.target.checked })}
                className="mt-0.5 accent-teal-400"
              />
              <label htmlFor="researchAgreement" className="text-[11px] font-mono text-slate-300 cursor-pointer">
                <strong>Mandatory Research Attestation:</strong> I verify that all requested reagents are destined exclusively for in-vitro laboratory research, analytical testing, or education, and will NOT be administered to humans or animals.
              </label>
            </div>

            {/* Form Actions */}
            <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-3">
              <button
                type="button"
                onClick={handleDownloadFullCatalog}
                className="text-xs font-mono text-slate-400 hover:text-white flex items-center gap-1.5 cursor-pointer"
              >
                <Download className="w-3.5 h-3.5 text-teal-400" />
                <span>Download Full Directory (PDF)</span>
              </button>

              <div className="flex items-center gap-2 w-full sm:w-auto">
                <button
                  type="button"
                  onClick={onClose}
                  className="px-4 py-2 text-xs font-mono text-slate-400 hover:text-white cursor-pointer"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  disabled={!formData.researchAgreement}
                  className="flex-1 sm:flex-initial px-5 py-2.5 text-xs font-semibold tracking-wide uppercase text-[#07090d] bg-teal-400 hover:bg-teal-300 disabled:opacity-50 disabled:cursor-not-allowed rounded-sm transition-all flex items-center justify-center gap-2 cursor-pointer shadow-sm"
                >
                  <span>Transmit Inquiry</span>
                  <Send className="w-3 h-3" />
                </button>
              </div>
            </div>
          </form>
        )}
      </div>
    </div>
  );
};
