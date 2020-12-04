import {
  FETCH_ORDERS,
  FETCH_ORDERS_FULFILLED,
  FETCH_ORDERS_PENDING,
  FETCH_ORDERS_REJECTED,
  PLACE_ORDER,
  PLACE_ORDER_FULFILLED,
  PLACE_ORDER_PENDING,
  PLACE_ORDER_REJECTED,
  UPDATE_ORDER_STATUS,
  UPDATE_ORDER_STATUS_FULFILLED,
  UPDATE_ORDER_STATUS_PENDING,
  UPDATE_ORDER_STATUS_REJECTED,
} from './actionTypes';
import {
  ICartItem, IOrder, IShippingAddress, OrderStatus,
} from '../types';

export const fetchOrders = (page: number, pageSize: number) => ({
  type: FETCH_ORDERS,
  payload: { page, pageSize },
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

export const updateOrderStatus = (orderId: string, status: OrderStatus) => ({
  type: UPDATE_ORDER_STATUS,
  payload: { orderId, status },
});

export const updateOrderStatusPending = () => ({
  type: UPDATE_ORDER_STATUS_PENDING,
});

export const updateOrderStatusFulfilled = (orderId: string, status: OrderStatus) => ({
  type: UPDATE_ORDER_STATUS_FULFILLED,
  payload: { orderId, status },
});

export const updateOrderStatusRejected = (error: string) => ({
  type: UPDATE_ORDER_STATUS_REJECTED,
  payload: error,
});
