import { IOrder } from "./order";

export interface IAccount {
    orders: IOrder[]
}

export interface IAvailableSize {
    size: string,
    price: number
}

export interface ISettings {
    sizes: string[],
    stampingExtraCost: number
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
export interface ICartItem {
    product: IProduct,
    selectedSize: IAvailableSize,
    stampingName?: string,
    stampingNumber?: number,
    price: number
}

export interface ICart {
    items: ICartItem[]
    total: number
}

export interface IRootState {
    account: IAccount,
    products:IProduct[],
    cart: ICart,
    ui: IUIState
}

export interface IUIState {
    orderReceived: {
        visible: boolean,
        order: IOrder
    }
}
