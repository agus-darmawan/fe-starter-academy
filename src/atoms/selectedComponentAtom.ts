// components/atoms/selectedComponentAtom.js
import { atom } from 'recoil';

export const selectedComponentState = atom({
  key: 'selectedComponentState',
  default: null, // Initially, no component is selected
});
