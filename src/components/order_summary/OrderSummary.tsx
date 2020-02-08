import React from 'react';
import { Table, Card } from 'react-bootstrap';
import { IOrder } from '../../types';
import { ShippingAddress } from '../ui';

const OrderSummary = (order: IOrder) => {
  return (
    <div>
      <h3>Obrigado pela sua compra</h3>
      <h3>A sua Encomenda #8976 foi criada a Janeiro 16, 2020 e está actualmente a ser processada.</h3>
      <h4>Se tiver alguma duvida na hesite em contactar.</h4>

      <div className="c-container">
        <Table striped bordered hover responsive>
          <thead>
            <tr>
              <th>Item</th>
              <th>Preço</th>
              <th>Total</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Thumbnail + product description</td>
              <td>{`${20} €`}</td>
              <td>{`${30} €`}</td>
            </tr>
          </tbody>
        </Table>
        <Table striped bordered hover>
          <tbody>
            <tr>
              <th>Sub-total</th>
              <td>{5} €</td>
            </tr>
            <tr>
              <th>Envio</th>
              <td>Taxa fixa: 5€ protes de envio</td>
            </tr>
            <tr>
              <th>Total da compra</th>
              <td>{10} €</td>
            </tr>
          </tbody>
        </Table>
        <div>
        </div>
        <Card>
          <Card.Body>
            <div className="m-b-sm">Morada de envio</div>
            <ShippingAddress readonly />
          </Card.Body>
        </Card>
      </div>

    </div>
  );
}

export default OrderSummary;
