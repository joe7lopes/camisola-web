import { SAVE_PERSONAL_DATA_FULFILLED, PLACE_ORDER_FULFILLED } from '../actions/actionTypes';

interface IProps {
  type: string,
  payload: any
}

const INITIAL_STATE = {
  orders: []
}

const account = (state = INITIAL_STATE, { type, payload }: IProps) => {
  switch (type) {
    case SAVE_PERSONAL_DATA_FULFILLED:
      return { ...state, personalDetails: payload };
    case PLACE_ORDER_FULFILLED:
      const updatedOrders = [...state.orders, payload];
      return {...state, orders: updatedOrders}
    default:
      return state;
  }
};
export default account;
