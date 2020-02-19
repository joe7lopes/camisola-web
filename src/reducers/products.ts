import { FETCH_PRODUCTS_FULFILLED } from '../actions';

interface IProps {
  type: string,
  payload: any
}

export default (state = [], { type, payload }: IProps) => {
  switch (type) {
    case FETCH_PRODUCTS_FULFILLED:
      return payload;
    default:
      return state;
  }
};
