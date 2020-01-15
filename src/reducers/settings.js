import { FETCH_SETTINGS_SUCCESS } from '../actions/actionTypes';

export default (state = {}, { type, payload }) => {
  switch (type) {
    case FETCH_SETTINGS_SUCCESS: {
      const { sizes } = payload;
      return { ...state, sizes };
    }
    default:
      return state;
  }
};
