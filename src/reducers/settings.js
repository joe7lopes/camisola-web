import { FETCH_SETTINGS_FULFILLED, SAVE_SIZES_FULFILLED } from '../actions/actionTypes';

// TODO: missing other states such as pending rejected
export default (state = {}, { type, payload }) => {
  switch (type) {
    case FETCH_SETTINGS_FULFILLED:
      return payload;
    case SAVE_SIZES_FULFILLED:
      return { ...state, sizes: payload };
    default:
      return state;
  }
};
