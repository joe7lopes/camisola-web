import { SAVE_PERSONAL_DATA_FULFILLED } from '../actions';

interface IProps {
  type: string,
  payload: any
}

const INITIAL_STATE = {
  orders: [],
};

const account = (state = INITIAL_STATE, { type, payload }: IProps) => {
  switch (type) {
    case SAVE_PERSONAL_DATA_FULFILLED:
      return { ...state, personalDetails: payload };
    default:
      return state;
  }
};
export default account;
