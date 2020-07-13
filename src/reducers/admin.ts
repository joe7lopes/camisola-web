import {FETCH_IMAGES_FULFILLED, FETCH_ORDERS_FULFILLED} from '../actions';
import { IAdminState } from '../types';

const INITIAL_STATE: IAdminState = {
  orders: [],
  productImages: [],
};

export default (state = INITIAL_STATE, { type, payload }: any) => {
  switch (type) {
    case FETCH_ORDERS_FULFILLED:
      return { ...state, orders: payload };
    case FETCH_IMAGES_FULFILLED:
      return { ...state, images: payload };
    default:
      return state;
  }
};
