import { IImage } from '../types';

export const getDefaultImage = (images: IImage[]) => {
  const image = images.filter((img) => img.isDefault);
  return image[0] ? image[0].file : undefined;
};
