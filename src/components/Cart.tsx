import React from 'react';
import { connect } from 'react-redux';
import { Table, Button } from 'react-bootstrap';
import { Dispatch, bindActionCreators } from 'redux';
import { IRootState, ICartItem } from '../types';
import { removeCartItem } from '../actions';

interface IProps {
  items: ICartItem[]
  subTotal: number,
  shipmentCost: number,
  removeItem: (item: ICartItem) => void
}

function Cart({ items, subTotal, shipmentCost, removeItem }: IProps) {


  const renderCartItems = () => items.map((item, i) => (
    <tr key={i}>
      <td>Thumbnail + product description</td>
      <td>{`${item.price} €`}</td>
      <td>quantity selector</td>
      <td>{`${item.price} €`}</td>
      <td>
        <Button variant="danger" onClick={() => removeItem(item)}>X</Button>
      </td>
    </tr>
  ));

  return (
    <div className="c-body">
      <h3>Cart</h3>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Item</th>
            <th>Preço</th>
            <th>Quantidate</th>
            <th>Total</th>
            <th></th>
          </tr>
        </thead>
        <tbody>{renderCartItems()}</tbody>
      </Table>
      <div>
        <Table striped bordered hover>
          <tbody>
            <tr>
              <th>Sub-total</th>
              <td>{subTotal}</td>
            </tr>
            <tr>
              <th>Envio</th>
              <td>Taxa fixa: 5€ protes de envio</td>
            </tr>
            <tr>
              <th>Total da compra</th>
              <td>{`${subTotal + shipmentCost} €`}</td>
            </tr>
          </tbody>
        </Table>
      </div>
      <Button>Finalizar compra</Button>
    </div>
  );
}

const mapStateToProps = ({ cart }: IRootState) => ({
  items: cart.items,
  subTotal: cart.total,
  shipmentCost: 5
});

const mapDispatchToProps = (dispatch: Dispatch) => bindActionCreators({ removeItem: removeCartItem }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Cart);
