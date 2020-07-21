import { IImage } from '../types';

const defaultImageUrl = 'https://camisola-backend.s3-eu-west-1.amazonaws.com/defaultshirt.png';

export const getDefaultImage = (images?: IImage[]) => {
  if (!images) return defaultImageUrl;
  return images[0] ? images[0].url : defaultImageUrl;
};
