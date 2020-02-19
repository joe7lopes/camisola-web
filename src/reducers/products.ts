import { FETCH_PRODUCTS_FULFILLED } from '../actions';
import { IProduct } from '../types';

interface IProps {
  type: string,
  payload: IProduct[]
}

export default (state = [], { type, payload }: IProps) => {
  switch (type) {
    case FETCH_PRODUCTS_FULFILLED:
      return payload;
    default:
      return state;
  }
};
