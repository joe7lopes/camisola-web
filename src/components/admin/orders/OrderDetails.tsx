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
                    <div ><b>Apelido: </b>{order.shippingAddress.lastName}</div>
                    <div className="m-b-lg"><b>email: </b>{order.shippingAddress.email}</div>
                    <div><b>Etiqueta</b></div>
                    <div>{order.shippingAddress.firstName}, {order.shippingAddress.phone} </div>
                    <div>{order.shippingAddress.address} {order.shippingAddress.postCode},</div>
                    <div>{order.shippingAddress.city}</div>
                </div>
            </Col>
            <Col className="c-white-background">
                <h5>Produtos</h5>
                {order.items.map((item, index) => (
                    <div key={index} className="m-b-lg">
                        <div><b>Nome:</b> {item.productName}</div>
                        <div><b>Tamanho:</b> {item.size}</div>
                        <div><b>Nome a Estampar:</b> {item.stampingName}</div>
                        <div><b>Numero a Estampar:</b> {item.stampingNumber}</div>
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
