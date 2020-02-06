import React from 'react';
import { Table } from 'react-bootstrap';

const OrderSummary = () => {
  return (
    <div>
      <h3>Encomenda #8976 criada a Janeiro 16, 2020 e está actualmente no estado Cancelada.</h3>
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
          morada de envio ...
        </div>
      </div>
    </div>
  );
}

export default OrderSummary;
