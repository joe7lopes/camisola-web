import { IOrder } from ".";

export interface IUserData {
    firstName: string,
    lastName: string,
    email: string,
    phone: string,
    address: string,
    city: string,
    postCode: string
}

export interface IAccount {
    orders: IOrder[]
}