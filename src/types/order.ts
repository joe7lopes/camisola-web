import {ICartItem} from './types';

export interface IOrder {
    orderId?: string,
    items: ICartItem[],
    shippingAddress: IShippingAddress
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