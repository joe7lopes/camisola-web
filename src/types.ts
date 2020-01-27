export interface IAccount {
    username: string
}

export interface IAvailableSize {
    size: string,
    price: number
}

export interface ISettings {
    sizes: IAvailableSize
}

export interface IImage {
    name: string,
    url: string
    isDefault?: boolean
}

export interface IProduct {
    id: string,
    name: string,
    categories: string[],
    availableSizes: IAvailableSize[]
    images: IImage[],
    isCustomizable: boolean
    defaultPrice: number
}


//CART
export interface ICartProduct {
    product: IProduct,
    selectedSize: IAvailableSize,
    stampingName?: string,
    stampingNumber?: number,
    price?: number
}

export interface ICart {
    items: ICartProduct[]
}


export interface IRootState {
    account: IAccount,
    products:IProduct[],
    cart: ICart,
}