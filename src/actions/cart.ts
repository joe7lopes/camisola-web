import { ADD_TO_CART, ADD_TO_CART_FULFILLED, REMOVE_CART_ITEM } from './actionTypes';
import { ICartItem } from '../types';

export interface ICartAction {
  type: string,
  payload: ICartItem
}

export const addToCart = (product: ICartItem) => ({
  type: ADD_TO_CART,
  payload: product,
});

export const addToCartFulfilled = (product: ICartItem) => ({
  type: ADD_TO_CART_FULFILLED,
  payload: product,
});


export const removeCartItem = (item: ICartItem) => ({
  type: REMOVE_CART_ITEM,
  payload: item
})