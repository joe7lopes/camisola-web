import { FETCH_PRODUCTS_FULFILLED } from '../actions';

export default (state = [], { type, payload }) => {
  switch (type) {
    case FETCH_PRODUCTS_FULFILLED:
      return payload;
    default:
      return state;
  }
};
