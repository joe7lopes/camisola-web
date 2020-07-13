import {
  FETCH_PRODUCTS_FULFILLED,
  UPDATE_PRODUCT_FULFILLED,
} from '../actions';

import { IProduct } from '../types';

interface IProps {
  type: string,
  payload: any
}

export default (state: IProduct[] = [], { type, payload }: IProps) => {
  switch (type) {
    case FETCH_PRODUCTS_FULFILLED:
      return payload;
    case UPDATE_PRODUCT_FULFILLED: {
      const products = state.filter((p) => p.id !== payload.id);
      products.push(payload);
      return products;
    }
    default:
      return state;
  }
};
