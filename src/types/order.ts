import { ICartItem } from "./cart";

export interface IOrder {
    orderId?: string,
    items: ICartItem[],
    shippingAddress: IShippingAddress,
    createdAt?: Date
}

export enum OrderStatus {
    RECEIVED,
    PROCESSING,
    SHIPPED,
}

export interface IShippingAddress {
    firstName: string,
    lastName: string,
    email: string,
    phone: string,
    address: string,
    city: string,
    postCode: string
}

interface IOrderItem {
    productId: string
    sizeId: string
    stampingName? : string
    stampingNumber? : string
}
export interface IOrderRequest {
    items: IOrderItem[],
    shippingAddress: IShippingAddress,
}
