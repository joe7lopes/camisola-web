import {
  ICartAction,
  ADD_TO_CART_FULFILLED,
  REMOVE_CART_ITEM,
  RESET_CART,
  PLACE_ORDER_FULFILLED,
  PLACE_ORDER_PENDING,
  PLACE_ORDER_REJECTED,
} from '../actions';
import { ICartState } from '../types';

const INITIAL_STATE: ICartState = {
  items: [],
  total: 0,
  submittedOrder: {
    loading: false,
  },
};

export default (state = INITIAL_STATE, { type, payload }: ICartAction) => {
  switch (type) {
    case ADD_TO_CART_FULFILLED: {
      const items = [...state.items, payload];
      return { ...state, items };
    }
    case REMOVE_CART_ITEM: {
      const items = state.items.filter((item) => item !== payload);
      return { ...state, items };
    }
    case RESET_CART:
      return INITIAL_STATE;
    case PLACE_ORDER_PENDING:
      return { ...state, submittedOrder: { ...state.submittedOrder, loading: true } };
    case PLACE_ORDER_FULFILLED:
      return {
        ...state,
        submittedOrder: { ...state.submittedOrder, loading: false, data: payload },
      };
    case PLACE_ORDER_REJECTED:
      return {
        ...state,
        submittedOrder: { ...state.submittedOrder, loading: false, error: payload },
      };
    default:
      return state;
  }
};
