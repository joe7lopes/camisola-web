/* eslint-disable no-underscore-dangle */
const _PENDING = '_PENDING';
const _FULFILLED = '_FULFILLED';
const _REJECTED = '_REJECTED';

// Sttings
export const FETCH_SETTINGS = 'FETCH_SETTINGS';
export const FETCH_SETTINGS_PENDING = FETCH_SETTINGS + _PENDING;
export const FETCH_SETTINGS_FULFILLED = FETCH_SETTINGS + _FULFILLED;
export const FETCH_SETTINGS_REJECTED = FETCH_SETTINGS + _REJECTED;

export const SAVE_SIZES = 'SAVE_SIZES';
export const SAVE_SIZES_PENDING = FETCH_SETTINGS + _PENDING;
export const SAVE_SIZES_FULFILLED = FETCH_SETTINGS + _FULFILLED;
export const SAVE_SIZES_REJECTED = FETCH_SETTINGS + _REJECTED;

//PRODUCT
export const FETCH_PRODUCTS = 'FETCH_PRODUCTS';
export const FETCH_PRODUCTS_PENDING = FETCH_PRODUCTS + _PENDING;
export const FETCH_PRODUCTS_FULFILLED = FETCH_PRODUCTS + _FULFILLED;
export const FETCH_PRODUCTS_REJECTED = FETCH_PRODUCTS + _REJECTED;

export const CREATE_PRODUCT = 'CREATE_PRODUCT';
export const CREATE_PRODUCT_PENDING = 'CREATE_PRODUCT' + _PENDING;
export const CREATE_PRODUCT_FULFILLED = 'CREATE_PRODUCT' + _FULFILLED;
export const CREATE_PRODUCT_REJECTED = 'CREATE_PRODUCT' + _REJECTED;

// Account
export const SAVE_PERSONAL_DATA = 'SAVE_PERSONAL_DATA';
export const SAVE_PERSONAL_DATA_PENDING = SAVE_PERSONAL_DATA + _PENDING;
export const SAVE_PERSONAL_DATA_FULFILLED = SAVE_PERSONAL_DATA + _FULFILLED;
export const SAVE_PERSONAL_DATA_REJECTED = SAVE_PERSONAL_DATA + _REJECTED;

// CART
export const ADD_TO_CART = 'ADD_TO_CART';
export const ADD_TO_CART_FULFILLED = ADD_TO_CART + _FULFILLED;
export const REMOVE_CART_ITEM = 'REMOVE_CART_ITEM';
export const RESET_CART = 'RESET_CART';

// ORDERS
export const PLACE_ORDER = 'PLACE_ORDER';
export const PLACE_ORDER_PENDING = PLACE_ORDER + _PENDING;
export const PLACE_ORDER_FULFILLED = PLACE_ORDER + _FULFILLED;
export const PLACE_ORDER_REJECTED = PLACE_ORDER + _REJECTED;
