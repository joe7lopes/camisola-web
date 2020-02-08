import { ADD_TO_CART_FULFILLED, REMOVE_CART_ITEM, RESET_CART } from '../actions/actionTypes';
import { ICartAction } from '../actions';
import { ICart, ICartItem } from '../types';

const INITIAL_STATE: ICart = {
  items: [],
  total: 0
};

const cart = (state = INITIAL_STATE, { type, payload }: ICartAction) => {
  switch (type) {
    case ADD_TO_CART_FULFILLED: {
      const items = [...state.items, payload];
      const total = calculateTotal(items);
      return { ...state, items, total };
    }
    case REMOVE_CART_ITEM: {
      const items = state.items.filter(item => item !== payload);
      const total = calculateTotal(items)
      return { ...state, items, total }
    }
    case RESET_CART:
      return INITIAL_STATE;

    default:
      return state;
  }
};

const calculateTotal = (items: ICartItem[]) => {
  return items.reduce((acc: number, b: ICartItem) => {
    return acc + b.price
  }, 0);
}

export default cart;
