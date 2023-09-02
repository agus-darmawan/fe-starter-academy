import { atom } from 'recoil';

type AdminModalState = {
  isOpen: boolean;
  type: 'home' | 'verification' | 'kurikulum' | 'tutor';
};

const initalAdminModalState: AdminModalState = {
  isOpen: false,
  type: 'home',
};

export const adminModalState = atom<AdminModalState>({
  key: 'adminModalState',
  default: initalAdminModalState,
});
