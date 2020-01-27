import { ADD_TO_CART_FULFILLED } from '../actions/actionTypes';
import { ICartAction } from '../actions';
import { ICart } from '../types';

const INITIAL_STATE: ICart = {
  items: [],
};

const cart = (state = INITIAL_STATE, { type, payload }: ICartAction) => {
  switch (type) {
    case ADD_TO_CART_FULFILLED:
      return { ...state, items:[...state.items, payload] };
    default:
      return state;
  }
};
export default cart;
