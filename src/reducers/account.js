import { SAVE_PERSONAL_DATA_FULFILLED } from '../actions/actionTypes';

const account = (state = {}, { type, payload }) => {
  switch (type) {
    case SAVE_PERSONAL_DATA_FULFILLED:
      debugger;
      return { ...state, personalDetails: payload };

    default:
      return state;
  }
};
export default account;
