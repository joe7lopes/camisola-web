import { createSelector } from 'reselect';
import { ICartItem, IRootState } from '../../types';
import { getShippingCost, getStampingExtraCost } from './settings';
import { getProductPriceBySize } from '../../components/utils';

const getCart = (state: IRootState) => state.cart;

export const selectNumberOfItems = createSelector(
  [getCart],
  (cart) => cart.items.length,
);

export const getCartItems = createSelector(
  [getCart],
  (cart) => cart.items,
);

const hasExtraCosts = (item: ICartItem) => item.stampingNumber || item.stampingName;

export const getCartTotal = createSelector(
  [getCart, getShippingCost, getStampingExtraCost],
  (cart, shippingCost, stampingExtraCost) => cart.items.reduce((acc, curr) => {
    const productPrice = getProductPriceBySize(curr.product, curr.size);
    return hasExtraCosts(curr) ? acc + productPrice + stampingExtraCost : acc + productPrice;
  }, 0) + shippingCost,
);
