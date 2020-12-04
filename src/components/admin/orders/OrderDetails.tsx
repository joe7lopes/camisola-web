import React from 'react';
import { Col, Row } from 'react-bootstrap';
import {
  FormControl, Select, MenuItem, InputLabel,
} from '@material-ui/core';
import { IOrder, OrderStatus } from '../../../types';
import { orderStatusConfig } from './Orders';

interface IProps {
    order: IOrder,
    handleUpdateOrder: (orderId: string, status: OrderStatus) => void
}

const OrderDetails = ({ order, handleUpdateOrder }: IProps) => {
  const updateOrder = (orderId: string, status: OrderStatus) => {
    handleUpdateOrder(orderId, status);
  };

  return (
        <Row>
            <Col className="c-white-background">
                <div>
                    <div><b>Nome:</b> {order.shippingAddress.firstName}</div>
                    <div><b>Apelido: </b>{order.shippingAddress.lastName}</div>
                    <div className="m-b-lg"><b>email: </b>{order.shippingAddress.email}</div>
                    <h5>Etiqueta Endereço</h5>
                    <div style={{ border: '1px solid black' }}>
                        <div>{order.shippingAddress.firstName} {order.shippingAddress.lastName}, {order.shippingAddress.phone}</div>
                        <div>{order.shippingAddress.address}</div>
                        <div>{order.shippingAddress.postCode} {order.shippingAddress.city}</div>
                    </div>
                </div>
            </Col>
            <Col className="c-white-background">
                <h5>Etiquetas de Produto(s)</h5>
                {order.items.map((item, index) => (
                    <div key={index} className="m-b-md" style={{ border: '1px solid black' }}>
                        <div>{item.productName}</div>
                        <div><b>Tamanho:</b> {item.size}</div>
                        <div>{item.stampingName}{item.stampingNumber ? `, ${item.stampingNumber}` : ''}</div>
                    </div>
                ))}
            </Col>
            <Col>
                <div>
                    <div>Actualizar status:</div>
                    <FormControl variant="filled">
                        <InputLabel id="demo-simple-select-filled-label">Status</InputLabel>
                        <Select
                            labelId="demo-simple-select-filled-label"
                            id="demo-simple-select-filled"
                            style={{ backgroundColor: orderStatusConfig[order.status].color }}
                            value={order.status}
                            onChange={(e: any) => updateOrder(order.id, e.target.value)}>
                            <MenuItem value={OrderStatus.RECEIVED}
                                      style={{ backgroundColor: orderStatusConfig[OrderStatus.RECEIVED].color }}>
                                {orderStatusConfig[OrderStatus.RECEIVED].text}
                            </MenuItem>
                            <MenuItem value={OrderStatus.PROCESSING}
                                      style={{ backgroundColor: orderStatusConfig[OrderStatus.PROCESSING].color }}>
                                {orderStatusConfig[OrderStatus.PROCESSING].text}
                            </MenuItem>
                            <MenuItem value={OrderStatus.SHIPPED}
                                      style={{ backgroundColor: orderStatusConfig[OrderStatus.SHIPPED].color }}>
                                {orderStatusConfig[OrderStatus.SHIPPED].text}
                            </MenuItem>
                            <MenuItem value={OrderStatus.CANCELLED}
                                      style={{ backgroundColor: orderStatusConfig[OrderStatus.CANCELLED].color }}>
                                {orderStatusConfig[OrderStatus.CANCELLED].text}
                            </MenuItem>
                        </Select>
                    </FormControl>
                </div>
            </Col>
        </Row>
  );
};

export default OrderDetails;
