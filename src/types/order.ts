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

export interface IOrderItem {
    productId: string
    sizeId: string
    stampingName? : string
    stampingNumber? : string
}
export interface ICreateOrderRequest {
    items: IOrderItem[],
    shippingAddress: IShippingAddress,
}
