import { IProductCategory } from './product';

export interface ISettings {
    sizes: string[],
    stampingExtraCost: number,
    productDefaultPrice: number,
    productCategories:IProductCategory[]
}

export interface ISaveSizesAction {
    type: string,
    payload: ISettings
}
