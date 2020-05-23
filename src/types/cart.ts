import { IProduct, IProductSize } from './product';

export interface ICartItem {
    product: IProduct,
    size: IProductSize,
    stampingName?: string,
    stampingNumber?: string
}
