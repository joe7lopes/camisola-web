import { IProductCategory } from './product';

export interface IHomePageLayout {
    benficaProductsOrder: string[],
    sportingProductsOrder: string[],
    portoProductsOrder: string[]
}

export interface IBadge {
    id: string,
    image?: string,
    name: string
}

export interface IProductSettings {
    badges: IBadge[],
    categories:IProductCategory[],
    prices: {
        stampingExtraCost: number,
        productDefaultPrice: number,
        shippingCost: number
    },
    sizes: string[],
}

export interface ISettings {
    productSettings: IProductSettings,
    homePageLayout: IHomePageLayout
}
