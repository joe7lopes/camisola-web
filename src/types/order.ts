export enum OrderStatus {
    RECEIVED="RECEIVED",
    PROCESSING = "PROCESSING",
    SHIPPED = "SHIPPED",
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

//FETCH

interface IFetchOrdersItemResponse {
    productId:string,
    productName:string,
    size:string,
    stampingName:string,
    stampingNumber:string,
}

export interface IOrder {
    id: string,
    items: IFetchOrdersItemResponse[],
    shippingAddress: IShippingAddress,
    createdAt: string,
    status: OrderStatus
    total: string
}

export interface IFetchOrdersResponse {
    orders: IOrder[]
}
