export interface IImage {
    name: string,
    url: string
    isDefault?: boolean
}

export interface IAvailableSizes {
    size: string,
    price: number
}

export interface IProduct {
    id: string,
    name: string,
    categories: string[],
    availableSizes: IAvailableSizes[]
    images: IImage[],
    isCustomizable: boolean
    defaultPrice: number
} 
