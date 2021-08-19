import {createSelector} from 'reselect';
import {IRootState} from '../../types';

const adminState = (state: IRootState) => state.admin;

export const getAllProductImages = createSelector(
  [adminState],
  (admin) => admin.images
    .sort((img1, img2) => {
      // eslint-disable-next-line @typescript-eslint/ban-ts-ignore
      // @ts-ignore
      return new Date(img2.lastModified) - new Date(img1.lastModified);
    }),
);
