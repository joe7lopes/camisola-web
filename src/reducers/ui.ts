import {
  PLACE_ORDER_FULFILLED,
  FETCH_PRODUCTS_REJECTED,
  FETCH_PRODUCTS_PENDING,
  FETCH_PRODUCTS_FULFILLED,
  UPDATE_SETTINGS_PENDING,
  UPDATE_SETTINGS_FULFILLED,
  UPDATE_SETTINGS_REJECTED,
  FETCH_SETTINGS_PENDING,
  FETCH_SETTINGS_FULFILLED,
  FETCH_SETTINGS_REJECTED,
} from '../actions';

import { IUIState } from '../types';

interface IProps {
    type: string,
    payload: any
}

const INITIAL_STATE: IUIState = {
  products: {

  },
  settings: {
    isFetchingSettings: true,
  },
};

export default (state = INITIAL_STATE, { type, payload }: IProps) => {
  switch (type) {
    case FETCH_SETTINGS_PENDING:
      return { ...state, settings: { ...state.settings, isFetchingSettings: true } };
    case FETCH_SETTINGS_FULFILLED:
      return { ...state, settings: { ...state.settings, isFetchingSettings: false } };
    case FETCH_SETTINGS_REJECTED:
      return { ...state, settings: { ...state.settings, isFetchingSettings: false, err: payload } };
    case UPDATE_SETTINGS_PENDING:
      return { ...state, settings: { ...state.settings, isUpdatingSettings: true } };
    case UPDATE_SETTINGS_FULFILLED:
      return { ...state, settings: { ...state.settings, isUpdatingSettings: false } };
    case UPDATE_SETTINGS_REJECTED: {
      const newSettings = { ...state.settings, isUpdatingSettings: true, error: payload };
      return { ...state, settings: newSettings };
    }
    case FETCH_PRODUCTS_PENDING:
      return { ...state, isFetchingProducts: true };
    case FETCH_PRODUCTS_FULFILLED:
      return { ...state, isFetchingProducts: false };
    case FETCH_PRODUCTS_REJECTED:
      return { ...state, isFetchingProducts: false, error: payload };
    case PLACE_ORDER_FULFILLED:
      return state;
    default:
      return state;
  }
};
