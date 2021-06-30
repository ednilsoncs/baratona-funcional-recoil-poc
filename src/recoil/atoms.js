import {atom} from 'recoil';

export const productsState = atom({
  key: 'products',
  default: [],
});

export const cartState = atom({
  key: 'cart',
  default: [],
});
