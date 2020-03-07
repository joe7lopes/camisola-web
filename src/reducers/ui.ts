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
  SIGN_UP_PENDING,
  SIGN_UP_REJECTED,
  SIGN_UP_FULFILLED,
  SIGN_IN_PENDING,
  SIGN_IN_FULFILLED,
  SIGN_IN_REJECTED, RESET_PASSWORD_PENDING, RESET_PASSWORD_FULFILLED, RESET_PASSWORD_REJECTED,
} from '../actions';

import { IUIState } from '../types';

interface IProps {
    type: string,
    payload: any
}

const INITIAL_STATE: IUIState = {
  products: {},
  settings: {
    isFetchingSettings: true,
  },
  auth: {},

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
      return { ...state, products: { ...state.products, isFetchingProducts: true } };
    case FETCH_PRODUCTS_FULFILLED:
      return { ...state, products: { ...state.products, isFetchingProducts: false } };
    case FETCH_PRODUCTS_REJECTED:
      return {
        ...state,
        products:
                    { ...state.products, isFetchingProducts: false, error: payload },
      };
    case PLACE_ORDER_FULFILLED:
      return state;
    case SIGN_UP_PENDING:
      return { ...state, auth: { isSigningUp: true } };
    case SIGN_UP_FULFILLED:
      return { ...state, auth: { isSigningUp: false } };
    case SIGN_UP_REJECTED:
      return { ...state, auth: { isSigningUp: false } };
    case SIGN_IN_PENDING:
      return { ...state, auth: { isSigningIn: true } };
    case SIGN_IN_FULFILLED:
      return { ...state, auth: { isSigningIn: false } };
    case SIGN_IN_REJECTED:
      return { ...state, auth: { isSigningIn: false } };
    case RESET_PASSWORD_PENDING:
      return { ...state, auth: { isResettingPassword: true } };
    case RESET_PASSWORD_FULFILLED:
      return { ...state, auth: { isResettingPassword: false } };
    case RESET_PASSWORD_REJECTED:
      return { ...state, auth: { isResettingPassword: false } };
    default:
      return state;
  }
};
