import {IBadge} from "./settings";

export enum OrderStatus {
    RECEIVED="RECEIVED",
    PROCESSING = "PROCESSING",
    SHIPPED = "SHIPPED",
    CANCELLED = "CANCELLED",
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
    productId: string,
    sizeId: string,
    stampingName? : string,
    stampingNumber? : string,
    badges?: IBadge[]
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
    badges?:IBadge[],
}

export interface IOrder {
    id: string,
    items: IFetchOrdersItemResponse[],
    shippingAddress: IShippingAddress,
    status: OrderStatus,
    privateNote: string;
    createdAt: string,
    total: string
}

export interface IFetchOrdersResponse {
    orders: IOrder[]
}
