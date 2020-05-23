import {
  FETCH_ORDERS,
  FETCH_ORDERS_FULFILLED,
  FETCH_ORDERS_PENDING,
  FETCH_ORDERS_REJECTED,
  PLACE_ORDER,
  PLACE_ORDER_FULFILLED,
  PLACE_ORDER_PENDING,
  PLACE_ORDER_REJECTED,
} from './actionTypes';
import { ICartItem, IOrder, IShippingAddress } from '../types';

export interface IPlaceOrderAction {
    type: string,
    payload: {
        items: ICartItem[],
        shippingAddress: IShippingAddress
    }
}

export const placeOrder = (items: ICartItem[], shippingAddress: IShippingAddress) => ({
  type: PLACE_ORDER,
  payload: { items, shippingAddress },
});

export const placeOrderPending = () => ({
  type: PLACE_ORDER_PENDING,
});

export const placeOrderFulfilled = (orderId: string) => ({
  type: PLACE_ORDER_FULFILLED,
  payload: orderId,
});

export const placeOrderRejected = (error: string) => ({
  type: PLACE_ORDER_REJECTED,
  payload: error,
});

export const fetchOrders = () => ({
  type: FETCH_ORDERS,
});

export const fetchOrdersPending = () => ({
  type: FETCH_ORDERS_PENDING,
});

export const fetchOrdersFulfilled = (orders: IOrder[]) => ({
  type: FETCH_ORDERS_FULFILLED,
  payload: orders,
});

export const fetchOrdersRejected = (error: string) => ({
  type: FETCH_ORDERS_REJECTED,
  payload: error,
});
