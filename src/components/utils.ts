import { IImage, IProduct, IProductSize } from '../types';

export const getDefaultImage = (images: IImage[]) => {
  const image = images.filter((img) => img.isDefault);
  return image[0] ? image[0].file : undefined;
};

export const getProductPriceBySize = (product: IProduct, size: string) => {
  const selectedSizePrice = product.sizes
    .find((av) => av.size === size);
  return selectedSizePrice ? selectedSizePrice.price : product.defaultPrice;
};
