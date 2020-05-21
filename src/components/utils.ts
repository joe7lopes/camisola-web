import { IImage, IProduct } from '../types';

export const getDefaultImage = (images?: IImage[]) => {
  if (!images) return undefined;
  const image = images.filter((img) => img.default);
  return image[0] ? image[0].url : undefined;
};

export const getProductPriceBySize = (product: IProduct, size: string) => {
  const selectedSizePrice = product.sizes
    .find((av) => av.size === size);
  return selectedSizePrice ? parseFloat(String(selectedSizePrice.price)) : parseFloat(String(product.defaultPrice));
};
