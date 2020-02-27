import { IProduct, IProductSize } from './product';

export interface ICartItem {
    product: IProduct,
    selectedSize: IProductSize,
    stampingName?: string,
    stampingNumber?: number,
    price: number
}
