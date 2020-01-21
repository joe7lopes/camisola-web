export interface IImage {
    name: string,
    url: string
    isDefault?: boolean
}

export interface IProduct {
    id: string,
    name: string,
    categories: string[],
    availableSizes: []
    images: IImage[],
    isCustomizable: boolean
} 