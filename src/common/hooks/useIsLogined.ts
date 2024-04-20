import { create } from 'zustand';

interface IsLoginedProps {
  isLogined: boolean;
  setIsLogined: (newIsLogined: boolean) => void;
}

export const useIsLogined = create<IsLoginedProps>((set) => ({
  isLogined: false,
  setIsLogined: (newIsLogined) => set({ isLogined: newIsLogined }),
}));
