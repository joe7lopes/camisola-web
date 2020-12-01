import { IProductCategory } from './product';

export interface IHomePageLayout {
    benficaProductsOrder: string[],
    sportingProductsOrder: string[],
    portoProductsOrder: string[]
}

export interface ISettings {
    sizes: string[],
    stampingExtraCost: number,
    productDefaultPrice: number,
    productCategories:IProductCategory[],
    homePageLayout: IHomePageLayout
}
