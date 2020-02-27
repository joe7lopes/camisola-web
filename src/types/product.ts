export interface IImage {
    name: string,
    url: string,
    isDefault: boolean,
    file?:any
}

export interface IProductSize {
    size: string,
    price: number
}

export interface IProductCategory {
    name: string,
    displayName: string
}

export interface IProduct {
    pid: string,
    name: string,
    categories: IProductCategory[],
    sizes: IProductSize[],
    images: IImage[],
    isCustomizable: boolean,
    defaultPrice: number
}

export interface ICreateProduct {
    name: string,
    categories: IProductCategory[],
    sizes: IProductSize[],
    images: IImage[],
    isCustomizable: boolean,
    defaultPrice: number
}
