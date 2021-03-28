import { IProduct, IProductSize } from './product';
import { IBadge } from './settings';

export interface ICartItem {
    product: IProduct,
    size: IProductSize,
    stampingName?: string,
    stampingNumber?: string,
    badges?: IBadge[]
}
