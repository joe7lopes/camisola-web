import React from 'react';
import { Button, Col, Row } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { IOrder, OrderStatus } from '../../../types';
import { updateOrderStatus } from '../../../actions';

interface IProps {
    order: IOrder
}

const OrderDetails = ({ order }: IProps) => {
  const dispatch = useDispatch();

  const updateOrder = (orderId: string, status: OrderStatus) => {
    dispatch(updateOrderStatus(orderId, status));
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
                        <div>{order.shippingAddress.firstName}, {order.shippingAddress.phone} </div>
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
                    <Button
                        size="sm"
                        className="received_order"
                        onClick={() => updateOrder(order.id, OrderStatus.RECEIVED)}>
                        Recebida
                    </Button>
                    <Button
                        size="sm"
                        className="m-l-sm processing_order"
                        onClick={() => updateOrder(order.id, OrderStatus.PROCESSING)}>
                        Em processamento
                    </Button>
                    <Button
                        size="sm"
                        className="m-l-sm shipped_order"
                        onClick={() => updateOrder(order.id, OrderStatus.SHIPPED)}>
                        Enviada
                    </Button>
                </div>
            </Col>
        </Row>
  );
};

export default OrderDetails;
