import { ADD_TO_CART, ADD_TO_CART_FULFILLED } from './actionTypes';
import { ICartProduct } from '../types';

export interface ICartAction {
  type: string,
  payload: ICartProduct
}

export const addToCart = (product: ICartProduct) => ({
  type: ADD_TO_CART,
  payload: product,
});

export const addToCartFulfilled = (product: ICartProduct) => ({
  type: ADD_TO_CART_FULFILLED,
  payload: product,
});
