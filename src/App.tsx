import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { ProductCatalog } from './components/ProductCatalog';
import { QualityStandards } from './components/QualityStandards';
import { ReconstitutionCalculator } from './components/ReconstitutionCalculator';
import { FulfillmentWorkflow } from './components/FulfillmentWorkflow';
import { CatalogueCTA } from './components/CatalogueCTA';
import { InstitutionalProcurement } from './components/InstitutionalProcurement';
import { Footer } from './components/Footer';
import { PeptideProduct } from './types/peptide';

export default function App() {
  const [inquiryModalOpen, setInquiryModalOpen] = useState(false);
  const [selectedProductForInquiry, setSelectedProductForInquiry] = useState<PeptideProduct | null>(null);

  const handleOpenInquiry = (product?: PeptideProduct) => {
    setSelectedProductForInquiry(product || null);
    setInquiryModalOpen(true);
  };

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#07090d] text-slate-100 flex flex-col font-body selection:bg-teal-500/20 selection:text-teal-200">
      {/* Navigation */}
      <Navbar onOpenInquiry={() => handleOpenInquiry()} />

      {/* Main Content Area */}
      <main className="flex-1">
        {/* Cinematic Scroll-Linked Hero */}
        <Hero
          onExploreClick={() => scrollToSection('products')}
          onQualityClick={() => scrollToSection('quality')}
        />

        {/* Real Product Catalogue with Filter & Quick Inspection */}
        <ProductCatalog onInquire={(product) => handleOpenInquiry(product)} />

        {/* Quality Standards & Interactive COA Inspector */}
        <QualityStandards />

        {/* Interactive Lab Reconstitution Tool */}
        <ReconstitutionCalculator />

        {/* Fulfillment & Cold-Chain Workflow */}
        <FulfillmentWorkflow onInquire={() => handleOpenInquiry()} />

        {/* Strong Catalogue CTA */}
        <CatalogueCTA onOpenInquiry={() => handleOpenInquiry()} />
      </main>

      {/* Footer */}
      <Footer onOpenInquiry={() => handleOpenInquiry()} />

      {/* Institutional Procurement & Inquiry Modal */}
      <InstitutionalProcurement
        isOpen={inquiryModalOpen}
        onClose={() => setInquiryModalOpen(false)}
        preselectedProduct={selectedProductForInquiry}
      />
    </div>
  );
}
