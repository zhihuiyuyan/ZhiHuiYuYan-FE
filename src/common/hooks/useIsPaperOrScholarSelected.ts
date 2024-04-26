import { create } from 'zustand';

interface PaperOrScholarSelectedProps {
  PaperOrScholarSelected: '论文' | '专家';
  setPaperOrScholarSelected: (
    newPaperOrScholarSelected: '论文' | '专家'
  ) => void;
}

export const usePaperOrScholarSelected = create<PaperOrScholarSelectedProps>(
  (set) => ({
    PaperOrScholarSelected: '论文',
    setPaperOrScholarSelected: (newPaperOrScholarSelected) =>
      set({ PaperOrScholarSelected: newPaperOrScholarSelected }),
  })
);
