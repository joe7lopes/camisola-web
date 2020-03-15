import { IProduct } from './product';

export interface ICartItem {
    product: IProduct,
    size: string,
    stampingName?: string,
    stampingNumber?: number
}
