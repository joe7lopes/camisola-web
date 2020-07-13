import {
  FETCH_PRODUCTS,
  FETCH_PRODUCTS_FULFILLED,
  FETCH_PRODUCTS_PENDING,
  FETCH_PRODUCTS_REJECTED,
  CREATE_PRODUCT,
  CREATE_PRODUCT_PENDING,
  CREATE_PRODUCT_FULFILLED,
  CREATE_PRODUCT_REJECTED,
  UPDATE_PRODUCT,
  UPDATE_PRODUCT_PENDING,
  UPDATE_PRODUCT_FULFILLED,
  UPDATE_PRODUCT_REJECTED,
  DELETE_PRODUCT,
  DELETE_PRODUCT_PENDING,
  DELETE_PRODUCT_FULFILLED,
  FETCH_IMAGES,
  FETCH_IMAGES_PENDING,
  FETCH_IMAGES_FULFILLED,
  FETCH_IMAGES_REJECTED,
} from './actionTypes';
import {IProduct, ICreateProduct, IUpdateProduct, IImage} from '../types';

export const fetchProducts = () => ({
  type: FETCH_PRODUCTS,
});

export const fetchProductsPending = () => ({
  type: FETCH_PRODUCTS_PENDING,
});

export const fetchProductsFulfilled = (products: IProduct[]) => ({
  type: FETCH_PRODUCTS_FULFILLED,
  payload: products,
});

export const fetchProductsRejected = (err: string) => ({
  type: FETCH_PRODUCTS_REJECTED,
  payload: err,
});

export const createProduct = (product: ICreateProduct) => ({
  type: CREATE_PRODUCT,
  payload: product,
});

export const createProductPending = () => ({
  type: CREATE_PRODUCT_PENDING,
});

export const createProductFulfilled = (product: IProduct) => ({
  type: CREATE_PRODUCT_FULFILLED,
  payload: product,
});

export const createProductRejected = (err: string) => ({
  type: CREATE_PRODUCT_REJECTED,
  payload: err,
});

export const updateProduct = (product: IUpdateProduct) => ({
  type: UPDATE_PRODUCT,
  payload: product,
});

export const updateProductPending = () => ({
  type: UPDATE_PRODUCT_PENDING,
});

export const updateProductFulfilled = (product: IProduct) => ({
  type: UPDATE_PRODUCT_FULFILLED,
  payload: product,
});

export const updateProductRejected = (err: string) => ({
  type: UPDATE_PRODUCT_REJECTED,
  payload: err,
});

export const deleteProduct = (productId: string) => ({
  type: DELETE_PRODUCT,
  payload: productId,
});

export const deleteProductPending = () => ({
  type: DELETE_PRODUCT_PENDING,
});

export const deleteProductFulfilled = (productId: string) => ({
  type: DELETE_PRODUCT_FULFILLED,
  payload: productId,
});

export const deleteProductRejected = (error: string) => ({
  type: DELETE_PRODUCT_FULFILLED,
  payload: error,
});


export const fetchImages = () => ({
  type: FETCH_IMAGES,
});

export const fetchImagesPending = () => ({
  type: FETCH_IMAGES_PENDING,
});

export const fetchImagesFulfilled = (images: IImage[]) => ({
  type: FETCH_IMAGES_FULFILLED,
  payload: images,
});

export const fetchImagesRejected = (error: string) => ({
  type: FETCH_IMAGES_REJECTED,
  payload: error,
});
