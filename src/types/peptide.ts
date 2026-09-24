export interface PeptideProduct {
  id: string;
  name: string;
  chemicalName?: string;
  strength: string;
  category: 'tissue-repair' | 'metabolic' | 'longevity' | 'cellular' | 'solvents';
  categoryLabel: string;
  casNumber: string;
  molecularFormula: string;
  molecularWeight: string;
  sequence?: string;
  appearance: string;
  purity: string;
  hplcTested: boolean;
  msVerified: boolean;
  inStock: boolean;
  leadTime: string;
  image: string;
  altText: string;
  description: string;
  storage: string;
  batchNumber: string;
  retentionTimeMinutes: number;
}

export interface COARecord {
  batchNumber: string;
  productName: string;
  strength: string;
  lotDate: string;
  expiryDate: string;
  appearanceTest: string;
  targetPurity: string;
  observedPurity: string;
  targetMW: string;
  observedMW: string;
  hplcPeakArea: string;
  retentionTime: string;
  endotoxinLevel: string;
  testingLab: string;
  analystSignoff: string;
  chromatogramPoints: { time: number; absorbance: number }[];
}

export interface ReconstitutionState {
  vialMg: number;
  diluentMl: number;
  desiredDoseMcg: number;
}
