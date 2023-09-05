import { atom } from 'recoil';

export const adminLinksState = atom({
  key: 'adminLinksState', // unique ID (with respect to other atoms/selectors)
  default: [
    {
      href: '/adminpanel',
      key: 'home',
      label: 'Home',
    },
    {
      href: '/adminpanel/verification',
      key: 'verification',
      label: 'Verification',
    },
    {
      href: '/adminpanel/kurikulum',
      key: 'kurikulum',
      label: 'Kurikulum',
    },
    {
      href: '/adminpanel/tutor',
      key: 'tutor',
      label: 'Tutor',
    },
  ],
});
