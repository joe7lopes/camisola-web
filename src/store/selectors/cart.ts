import { createSelector } from 'reselect';
import { ICartItem, IRootState } from '../../types';
import { getShippingCost, getStampingExtraCost } from './settings';

const getCart = (state: IRootState) => state.cart;

export const selectNumberOfItems = createSelector(
  [getCart],
  (cart) => cart.items.length,
);

export const getCartItems = createSelector(
  [getCart],
  (cart) => cart.items,
);

export const getSubmittedOrder = createSelector(
  [getCart],
  (cart) => cart.submittedOrder,
);

export const showOrderCompleted = createSelector(
  [getCart],
  (cart) => !!cart.submittedOrder.data,
);

export const getCompletedOrderId = createSelector(
  [getCart],
  (cart) => cart.submittedOrder.data,
);

const hasExtraCosts = (item: ICartItem) => item.stampingNumber || item.stampingName;

export const getCartTotal = createSelector(
  [getCart, getShippingCost, getStampingExtraCost],
  (cart, shippingCost, stampingExtraCost) => cart.items.reduce((acc, curr) => {
    const productPrice = parseFloat(String(curr.size.price));
    return hasExtraCosts(curr) ? acc + productPrice + stampingExtraCost : acc + productPrice;
  }, 0) + shippingCost,
);
