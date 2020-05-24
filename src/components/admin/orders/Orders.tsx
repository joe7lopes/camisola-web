import React, { useState } from 'react';
import { Button, Table } from 'react-bootstrap';
import { IOrder, OrderStatus } from '../../../types';
import OrderDetails from './OrderDetails';

interface IProps {
    orders: IOrder[]
}

const Orders = ({ orders }: IProps) => {
  const [showDetails, setShowDetails] = useState(false);
  const [selectedOrder, setSelectedOrder] = useState();

  const showDetailsFor = (order: IOrder) => {
    setShowDetails(!showDetails);
    setSelectedOrder(order);
  };

  function getClassForStatus(status: OrderStatus) {
    switch (status) {
      case OrderStatus.RECEIVED:
        return 'received_order';
      case OrderStatus.PROCESSING:
        return 'processing_order';
      case OrderStatus.SHIPPED:
        return 'shipped_order';
      default:
        return '';
    }
  }

  return (
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
                <React.Fragment key={order.id}>
                    <tr>
                        <td>
                            <DetailsButton
                                orderId={order.id}
                                onClick={() => showDetailsFor(order)}/>
                        </td>
                        <td>{`${order.shippingAddress.firstName} ${order.shippingAddress.lastName}`}</td>
                        <td className={getClassForStatus(order.status)}>{order.status}</td>
                        <td>{order.total}</td>
                        <td>{order.createdAt}</td>
                    </tr>
                    {showDetails && order.id === selectedOrder.id
                    && <tr>
                      <td colSpan={5}><OrderDetails order={order}/></td>
                    </tr>
                    }
                </React.Fragment>
            ))}
            </tbody>
        </Table>
  );
};
export default Orders;

interface IDetailsButtonProps {
    orderId: string,
    onClick: () => void
}

const DetailsButton = ({ orderId, onClick }: IDetailsButtonProps) => (
    <Button variant="link" onClick={onClick}>
        {orderId}
    </Button>
);
