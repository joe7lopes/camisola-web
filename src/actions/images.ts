import {
  DELETE_IMAGES,
  DELETE_IMAGES_FULFILLED,
  DELETE_IMAGES_PENDING,
  DELETE_IMAGES_REJECTED,
  UPLOAD_IMAGES,
  UPLOAD_IMAGES_FULFILLED,
  UPLOAD_IMAGES_PENDING,
  UPLOAD_IMAGES_REJECTED,
} from './actionTypes';

export const uploadImages = (images: any[]) => ({
  type: UPLOAD_IMAGES,
  payload: images,
});

export const uploadImagesPending = () => ({
  type: UPLOAD_IMAGES_PENDING,
});

export const uploadImagesFulfilled = () => ({
  type: UPLOAD_IMAGES_FULFILLED,
});

export const uploadImagesRejected = (error: string) => ({
  type: UPLOAD_IMAGES_REJECTED,
  payload: error,
});

export const deleteImages = (imagesIds: string[]) => ({
  type: DELETE_IMAGES,
  payload: imagesIds,
});

export const deleteImagesPending = () => ({
  type: DELETE_IMAGES_PENDING,
});

export const deleteImagesFulfilled = () => ({
  type: DELETE_IMAGES_FULFILLED,
});

export const deleteImagesRejected = (error: string) => ({
  type: DELETE_IMAGES_REJECTED,
  payload: error,
});
