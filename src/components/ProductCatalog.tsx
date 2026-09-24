import React, { useState, useMemo } from 'react';
import { Search, Filter, ArrowUpRight, ShieldCheck, Check, Sparkles } from 'lucide-react';
import { PeptideProduct } from '../types/peptide';
import { PEPTIDES_DATA } from '../data/peptides';
import { ProductModal } from './ProductModal';

interface ProductCatalogProps {
  onInquire: (product: PeptideProduct) => void;
}

export const ProductCatalog: React.FC<ProductCatalogProps> = ({ onInquire }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [activeModalProduct, setActiveModalProduct] = useState<PeptideProduct | null>(null);

  const categories = [
    { id: 'all', label: 'All Compounds' },
    { id: 'tissue-repair', label: 'Tissue & Repair' },
    { id: 'metabolic', label: 'Metabolic Agonists' },
    { id: 'longevity', label: 'Longevity & Coenzymes' },
    { id: 'cellular', label: 'Cellular Matrix' },
    { id: 'solvents', label: 'Analytical Solvents' },
  ];

  const filteredProducts = useMemo(() => {
    return PEPTIDES_DATA.filter((item) => {
      const matchesCategory =
        selectedCategory === 'all' || item.category === selectedCategory;
      const query = searchQuery.toLowerCase().trim();
      const matchesSearch =
        !query ||
        item.name.toLowerCase().includes(query) ||
        (item.chemicalName && item.chemicalName.toLowerCase().includes(query)) ||
        item.casNumber.toLowerCase().includes(query) ||
        item.strength.toLowerCase().includes(query);

      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, searchQuery]);

  return (
    <section id="products" className="py-24 bg-[#0a0e14] relative border-t border-white/10">
      {/* Background Subtle Lab Matrix */}
      <div className="absolute inset-0 lab-dot-matrix opacity-20 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-10 border-b border-white/10">
          <div className="space-y-3 max-w-2xl">
            <div className="font-mono text-xs uppercase tracking-widest text-teal-400 font-semibold">
              Research Grade Inventory · Australian Dispatched
            </div>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-medium tracking-tight text-white">
              Analytical Peptide Catalogue
            </h2>
            <p className="text-sm sm:text-base text-slate-400 font-light leading-relaxed">
              Synthesized with solid-phase peptide synthesis (SPPS), lyophilized in borosilicate Type 1 glass, and accompanied by HPLC purity and Mass Spectrometry validation.
            </p>
          </div>

          <div className="text-left md:text-right space-y-1">
            <div className="font-mono text-xs text-slate-400">
              Standard: <span className="text-teal-300 font-semibold">≥ 99.0% Purity</span>
            </div>
            <div className="font-mono text-xs text-slate-500">
              Dispatched from Adelaide Hub
            </div>
          </div>
        </div>

        {/* Filter Bar & Search Input */}
        <div className="py-6 flex flex-col lg:flex-row items-stretch lg:items-center justify-between gap-4">
          
          {/* Interactive Category Segmented Tabs (Functional Buttons) */}
          <div className="flex items-center gap-1.5 overflow-x-auto pb-2 lg:pb-0 scrollbar-none">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-3.5 py-2 text-xs font-medium tracking-wide whitespace-nowrap rounded-sm transition-all cursor-pointer ${
                  selectedCategory === cat.id
                    ? 'bg-teal-400 text-[#07090d] font-semibold shadow-sm shadow-teal-500/20'
                    : 'bg-[#121820] text-slate-400 hover:text-white hover:bg-[#18212c] border border-white/5'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>

          {/* Search Bar */}
          <div className="relative w-full lg:w-72">
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search by peptide, CAS, strength..."
              className="w-full bg-[#101620] border border-white/10 rounded-sm py-2 pl-9 pr-3 text-xs text-slate-200 placeholder:text-slate-500 focus:outline-none focus:border-teal-400/80 transition-colors font-mono"
            />
            <Search className="w-3.5 h-3.5 text-slate-500 absolute left-3 top-1/2 -translate-y-1/2" />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-2.5 top-1/2 -translate-y-1/2 text-slate-500 hover:text-slate-300 text-xs font-mono"
              >
                Clear
              </button>
            )}
          </div>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 pt-4">
          {filteredProducts.map((product) => (
            <article
              key={product.id}
              className="group bg-[#0d1218] border border-white/10 hover:border-teal-500/40 rounded-md overflow-hidden flex flex-col transition-all duration-300 hover:shadow-xl hover:shadow-black/60 relative"
            >
              {/* Product Vial Image Header */}
              <div 
                className="relative aspect-[4/3] bg-[#070a0e] overflow-hidden cursor-pointer"
                onClick={() => setActiveModalProduct(product)}
              >
                <img
                  src={product.image}
                  alt={product.altText}
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                  referrerPolicy="no-referrer"
                />

                {/* Scrim Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#0d1218] via-transparent to-black/30 pointer-events-none" />

                {/* Analytical Badge Overlay (Clean, single-line text metadata) */}
                <div className="absolute top-3 left-3 right-3 flex items-center justify-between text-[11px] font-mono">
                  <span className="text-teal-300 font-semibold bg-[#070a0e]/90 px-2 py-0.5 rounded-sm border border-teal-500/30 backdrop-blur-sm">
                    {product.purity} HPLC
                  </span>
                  <span className="text-slate-400 bg-[#070a0e]/80 px-2 py-0.5 rounded-sm border border-white/10 backdrop-blur-sm">
                    {product.strength}
                  </span>
                </div>
              </div>

              {/* Card Body */}
              <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
                <div className="space-y-2">
                  {/* Clean unboxed category kicker without pill capsule */}
                  <div className="text-[11px] font-mono text-slate-400 uppercase tracking-wider">
                    {product.categoryLabel}
                  </div>

                  <h3 
                    onClick={() => setActiveModalProduct(product)}
                    className="font-display text-xl font-bold text-white group-hover:text-teal-200 transition-colors cursor-pointer"
                  >
                    {product.name}
                  </h3>

                  <p className="text-xs text-slate-400 line-clamp-2 leading-relaxed">
                    {product.description}
                  </p>
                </div>

                {/* Chemical Data Table - Zero-Pill Unboxed Text with Separators */}
                <div className="pt-3 border-t border-white/5 space-y-1.5 text-[11px] font-mono text-slate-400">
                  <div className="flex items-center justify-between">
                    <span className="text-slate-500">CAS Registry:</span>
                    <span className="text-slate-300 font-medium">{product.casNumber}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-slate-500">Molecular Mass:</span>
                    <span className="text-slate-300">{product.molecularWeight}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-slate-500">Format:</span>
                    <span className="text-slate-300 truncate max-w-[180px]">Lyophilized Solid</span>
                  </div>
                </div>

                {/* Card Actions */}
                <div className="pt-2 flex items-center gap-2">
                  <button
                    onClick={() => setActiveModalProduct(product)}
                    className="flex-1 py-2 text-xs font-medium text-slate-300 hover:text-white bg-[#141b24] hover:bg-[#1a232e] border border-white/10 rounded-sm transition-colors cursor-pointer"
                  >
                    Specs & COA
                  </button>

                  <button
                    onClick={() => onInquire(product)}
                    className="py-2 px-3 text-xs font-semibold tracking-wide uppercase bg-teal-400/90 hover:bg-teal-300 text-[#07090d] rounded-sm transition-colors flex items-center justify-center gap-1 cursor-pointer"
                    title="Inquire batch availability"
                  >
                    <span>Inquire</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Empty State */}
        {filteredProducts.length === 0 && (
          <div className="py-16 text-center space-y-3 bg-[#0c1117] border border-white/10 rounded-md my-6">
            <p className="text-sm font-mono text-slate-400">
              No matching peptides found for &ldquo;{searchQuery}&rdquo;.
            </p>
            <button
              onClick={() => {
                setSearchQuery('');
                setSelectedCategory('all');
              }}
              className="text-xs font-mono text-teal-400 underline hover:text-teal-300"
            >
              Reset filters and view all compounds
            </button>
          </div>
        )}

        {/* Bottom Catalog Note */}
        <div className="mt-12 p-4 bg-[#080c10] border border-white/10 rounded-sm flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-slate-400">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-teal-400" />
            <span>Need custom milligram vials or university batch reserves?</span>
          </div>
          <button
            onClick={() => onInquire(PEPTIDES_DATA[0])}
            className="text-teal-400 hover:text-teal-300 font-semibold underline underline-offset-4 cursor-pointer"
          >
            Contact Analytical Synthesis Team →
          </button>
        </div>

      </div>

      {/* Specifications & COA Detail Modal */}
      <ProductModal
        product={activeModalProduct}
        onClose={() => setActiveModalProduct(null)}
        onInquire={onInquire}
      />
    </section>
  );
};
