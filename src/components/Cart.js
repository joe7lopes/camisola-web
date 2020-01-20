import React from 'react';
import { connect } from 'react-redux';
import { Table, Button } from 'react-bootstrap';

function Cart({ cart }) {
  return (
    <div className="c-body">
      <h3>Cart</h3>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th colSpan="3">Produto</th>
            <th>Preço</th>
            <th>Quantidate</th>
            <th>Total</th>
          </tr>
        </thead>
        <tbody>{renderRows([1, 2])}</tbody>
      </Table>
      <div>
        <Table striped bordered hover>
          <tbody>
            <th>Sub-total</th>
            <td>70$</td>
            <tr>
              <th>Envio</th>
              <td>Taxa fixa: 5$ protes de envio</td>
            </tr>
            <tr>
              <th>Total da compra</th>
              <td>75$</td>
            </tr>
          </tbody>
        </Table>
      </div>
      <Button>Finalizar compra</Button>
    </div>
  );
}

const renderRows = (products) => products.map((p) => (
    <tr key={p}>
      <td>
        <Button variant="danger">X</Button>
      </td>
      <td>Thumbnail</td>
      <td>product description</td>
      <td>price</td>
      <td>quantity selector</td>
      <td> total 35$</td>
    </tr>
));

const mapStateToProps = ({ cart }) => ({
  cart,
});

const mapDispatchToProps = () => ({});

export default connect(mapStateToProps, mapDispatchToProps)(Cart);
