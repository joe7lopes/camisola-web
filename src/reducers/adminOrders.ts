import {
  FETCH_ORDERS_FULFILLED,
  FETCH_ORDERS_PENDING,
  FETCH_ORDERS_REJECTED, UPDATE_ORDER,
} from '../actions';
import { IAdminOrders } from '../types';

const INITIAL_STATE: IAdminOrders = {
  loading: false,
  data: undefined,
  error: undefined,
};

export default (state = INITIAL_STATE, { type, payload }: any) => {
  switch (type) {
    case FETCH_ORDERS_PENDING:
      return { ...state, loading: true };
    case FETCH_ORDERS_FULFILLED:
      return { ...state, loading: false, data: payload };
    case FETCH_ORDERS_REJECTED:
      return { ...state, loading: false, error: payload };
    case UPDATE_ORDER.FULFILLED: {
      const copy = state.data.content;
      const index = copy.findIndex((e: any) => e.id === payload.id);
      if (index === -1) return state;
      copy[index] = payload;
      return { ...state, data: { ...state.data, content: copy } };
    }
    default:
      return state;
  }
};
