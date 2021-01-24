import {
  FETCH_ORDERS,
  FETCH_ORDERS_FULFILLED,
  FETCH_ORDERS_PENDING,
  FETCH_ORDERS_REJECTED,
  FETCH_ORDERS_WITH_CRITERIA,
  PLACE_ORDER,
  PLACE_ORDER_FULFILLED,
  PLACE_ORDER_PENDING,
  PLACE_ORDER_REJECTED, UPDATE_ORDER,
} from './actionTypes';
import {
  ICartItem, IOrder, IShippingAddress,
} from '../types';

export type SearchCriteria = {
  orderId: string,
  name: string,
  phone: string,
  createdAt?: string
}

export const fetchOrders = (page: number, pageSize: number) => ({
  type: FETCH_ORDERS,
  payload: { page, pageSize },
});

export const fetchOrdersWithCriteria = (criteria: SearchCriteria) => ({
  type: FETCH_ORDERS_WITH_CRITERIA,
  payload: { criteria },
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


export function action(type: string, payload = {}, callback:void) {
  return { type, payload, callback };
}

export const updateOrder = (updatedOrder:IOrder) => action(UPDATE_ORDER.REQUESTED, { ...updatedOrder });
export const updateOrderPending = () => action(UPDATE_ORDER.PENDING, {});
export const updateOrderFulfilled = (updatedOrder:IOrder) => action(UPDATE_ORDER.FULFILLED, { ...updatedOrder });
export const updateOrderRejected = (error: string) => action(UPDATE_ORDER.REJECTED, { error });
