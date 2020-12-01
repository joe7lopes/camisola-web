import {
  PLACE_ORDER_FULFILLED,
  FETCH_PRODUCTS_REJECTED,
  FETCH_PRODUCTS_PENDING,
  FETCH_PRODUCTS_FULFILLED,
  SIGN_UP_PENDING,
  SIGN_UP_REJECTED,
  SIGN_UP_FULFILLED,
  SIGN_IN_PENDING,
  SIGN_IN_FULFILLED,
  SIGN_IN_REJECTED,
  RESET_PASSWORD_PENDING,
  RESET_PASSWORD_FULFILLED,
  RESET_PASSWORD_REJECTED,
  UPDATE_ORDER_STATUS_PENDING,
  UPDATE_ORDER_STATUS_FULFILLED,
  UPDATE_ORDER_STATUS_REJECTED,
  SIGN_OUT_FULFILLED,
  UPDATE_PRODUCT_PENDING,
  UPDATE_PRODUCT_FULFILLED,
  UPDATE_PRODUCT_REJECTED,
  UPLOAD_IMAGES_FULFILLED,
  UPLOAD_IMAGES_REJECTED,
  UPLOAD_IMAGES_PENDING,
} from '../actions';

import { IUIState } from '../types';

interface IProps {
    type: string,
    payload: any
}

const imageManagerInitialState = {
  loading: false,
  data: undefined,
  error: undefined,
};

const INITIAL_STATE: IUIState = {
  products: {
  },
  settings: {
    isFetchingSettings: true,
  },
  auth: {
    isSignInSuccess: false,
  },
  admin: {
    isUpdatingProduct: false,
    isProductUpdated: false,
  },
  imageManager: imageManagerInitialState,

};

export default (state = INITIAL_STATE, { type, payload }: IProps) => {
  switch (type) {
    case FETCH_PRODUCTS_PENDING:
    case FETCH_PRODUCTS_FULFILLED:
    case FETCH_PRODUCTS_REJECTED:
      return handleProducts(state, { type, payload });
    case UPDATE_PRODUCT_PENDING:
    case UPDATE_PRODUCT_FULFILLED:
    case UPDATE_PRODUCT_REJECTED:
      return handleAdmin(state, { type, payload });

    case UPLOAD_IMAGES_PENDING:
    case UPLOAD_IMAGES_FULFILLED:
    case UPLOAD_IMAGES_REJECTED:
      return handleImageManager(state, { type, payload });
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
      return { ...state, auth: { isSigningIn: false, isSignInSuccess: true } };
    case SIGN_OUT_FULFILLED:
      return { ...state, auth: { isSigningIn: false, isSignInSuccess: false } };
    case SIGN_IN_REJECTED:
      return { ...state, auth: { isSigningIn: false } };
    case RESET_PASSWORD_PENDING:
      return { ...state, auth: { isResettingPassword: true } };
    case RESET_PASSWORD_FULFILLED:
      return { ...state, auth: { isResettingPassword: false } };
    case RESET_PASSWORD_REJECTED:
      return { ...state, auth: { isResettingPassword: false } };
    case UPDATE_ORDER_STATUS_PENDING:
      return { ...state, admin: { isUpdatingOrderStatus: true } };
    case UPDATE_ORDER_STATUS_FULFILLED:
    case UPDATE_ORDER_STATUS_REJECTED:
      return { ...state, admin: { isUpdatingOrderStatus: false } };
    default:
      return state;
  }
};


const handleProducts = (state: any, { type, payload }: any) => {
  switch (type) {
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
    default:
      return state;
  }
};

const handleAdmin = (state: any, { type, payload }: any) => {
  switch (type) {
    case UPDATE_PRODUCT_PENDING:
      return { ...state, admin: { ...state.admin, isUpdatingProduct: true } };
    case UPDATE_PRODUCT_FULFILLED:
      // eslint-disable-next-line max-len
      return { ...state, admin: { ...state.admin, isUpdatingProduct: false, isProductUpdated: true } };
    case UPDATE_PRODUCT_REJECTED:
      return { ...state, admin: { ...state.admin, isUpdatingProduct: false, error: payload } };
    default:
      return state;
  }
};

const handleImageManager = (state: any, { type, payload }: any) => {
  switch (type) {
    case UPLOAD_IMAGES_PENDING:
      return { ...state, imageManager: { ...imageManagerInitialState, loading: true } };
    case UPLOAD_IMAGES_FULFILLED:
      return { ...state, imageManager: { ...imageManagerInitialState, data: true } };
    case UPLOAD_IMAGES_REJECTED:
      return { ...state, imageManager: { ...imageManagerInitialState, error: payload } };
    default:
      return state;
  }
};
