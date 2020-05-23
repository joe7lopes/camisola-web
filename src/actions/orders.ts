import {
  PLACE_ORDER, PLACE_ORDER_FULFILLED, PLACE_ORDER_PENDING, PLACE_ORDER_REJECTED,
} from './actionTypes';
import { IOrder } from '../types';

export interface IPlaceOrderAction {
    type: string,
    payload: IOrder
}

export const placeOrder = (order: IOrder) => ({
  type: PLACE_ORDER,
  payload: order,
});

export const placeOrderPending = () => ({
  type: PLACE_ORDER_PENDING,
});

export const placeOrderFulfilled = (order: IOrder) => ({
  type: PLACE_ORDER_FULFILLED,
  payload: order,
});

export const placeOrderRejected = (order: IOrder) => ({
  type: PLACE_ORDER_REJECTED,
  payload: order,
});
