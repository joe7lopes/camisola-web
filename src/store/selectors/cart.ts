import { createSelector } from 'reselect';
import { IRootState } from '../../types';

const getCart = (state:IRootState) => state.cart;

export const selectNumberOfItems = createSelector(
  [getCart],
  (cart) => cart.items.length,
);
