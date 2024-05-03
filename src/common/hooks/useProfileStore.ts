import { create } from 'zustand';

type Profile = {
  id: number;
  name: string;
  gender: string;
  email: string;
  avatar: string;
  institution: string;
};

interface ProfileProps {
  profile: Profile;
  setProfile: (newProfile: Profile) => void;
}

export const useProfile = create<ProfileProps>((set) => ({
  profile: {
    id: 0,
    name: '',
    gender: '',
    avatar: '',
    email: '',
    institution: '',
  },
  setProfile: (newProfile) => set({ profile: newProfile }),
}));
