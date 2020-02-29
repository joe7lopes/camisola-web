import {
  ICartAction, ADD_TO_CART_FULFILLED, REMOVE_CART_ITEM, RESET_CART, PLACE_ORDER_FULFILLED, PLACE_ORDER_PENDING, PLACE_ORDER_REJECTED,
} from '../actions';
import { ICartState, ICartItem } from '../types';

const INITIAL_STATE: ICartState = {
  items: [],
  total: 0,
  isOrderPlacedLoading: false,
  isOrderPlacedSuccess: false,
  isOrderPlacedFailure: false,
};

const cart = (state = INITIAL_STATE, { type, payload }: ICartAction) => {
  switch (type) {
    case ADD_TO_CART_FULFILLED: {
      const items = [...state.items, payload];
      const total = calculateTotal(items);
      return { ...state, items, total };
    }
    case REMOVE_CART_ITEM: {
      const items = state.items.filter((item) => item !== payload);
      const total = calculateTotal(items);
      return { ...state, items, total };
    }
    case RESET_CART:
      return INITIAL_STATE;
    case PLACE_ORDER_PENDING:
      return { ...state, isOrderPlacedLoading: true };
    case PLACE_ORDER_FULFILLED:
      return {
        ...state, isOrderPlacedLoading: false, isOrderPlacedSuccess: true, order: payload,
      };
    case PLACE_ORDER_REJECTED:
      return { ...state, isOrderPlacedLoading: false, isOrderPlacedFailure: true };
    default:
      return state;
  }
};

const calculateTotal = (items: ICartItem[]) => items.reduce((acc: number, b: ICartItem) => acc + b.price, 0);

export default cart;
