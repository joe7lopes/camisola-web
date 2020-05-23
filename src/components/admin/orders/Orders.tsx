import React from 'react';
import { Table } from 'react-bootstrap';
import { IOrder } from '../../../types';

interface IProps {
    orders: IOrder[]
}

const Orders = ({ orders }: IProps) => (
        <Table striped bordered hover>
            <thead>
            <tr>
                <th>#</th>
                <th>Nome</th>
                <th>Status</th>
                <th>Total</th>
                <th>createdAt</th>
            </tr>
            </thead>
            <tbody>
            {orders.map((order) => (
                    <tr key={order.id}>
                        <td>{order.id}</td>
                        <td>{`${order.shippingAddress.firstName} ${order.shippingAddress.lastName}`}</td>
                        <td>{order.status}</td>
                        <td>{order.total}</td>
                        <td>{order.createdAt}</td>
                    </tr>
            ))}
            </tbody>
        </Table>
);

export default Orders;
