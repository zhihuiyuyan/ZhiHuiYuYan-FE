import { create } from 'zustand';

interface SearchInputProps {
  searchInput: string;
  setSearchInput: (newSearchInput: string) => void;
}

export const useSearchInput = create<SearchInputProps>((set) => ({
  searchInput: '',
  setSearchInput: (newSearchInput) => set({ searchInput: newSearchInput }),
}));
