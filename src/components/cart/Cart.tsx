import React from 'react';
import { connect } from 'react-redux';
import { Table, Button, Form } from 'react-bootstrap';
import { Dispatch, bindActionCreators } from 'redux';
import { IRootState, ICartItem } from '../../types';
import { removeCartItem } from '../../actions';
import ShipmentAddress from './ShipmentAddress';

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
      <td>{`${item.price} €`}</td>
      <td>
        <Button variant="danger" onClick={() => removeItem(item)}>X</Button>
      </td>
    </tr>
  ));

  const submit = (e: any) => {
    e.preventDefault();
    const values = [...e.currentTarget.elements]
      .filter(e => e.name)
      .map(e => ({ [e.name]: e.value }))
    console.log(values);
  }

  return (
    <>
      <div className="c-container">
        <Table striped bordered hover responsive>
          <thead>
            <tr>
              <th>Item</th>
              <th>Preço</th>
              <th>Total</th>
            </tr>
          </thead>
          <tbody>{renderCartItems()}</tbody>
        </Table>
        <Table striped bordered hover>
          <tbody>
            <tr>
              <th>Sub-total</th>
              <td>{subTotal} €</td>
            </tr>
            <tr>
              <th>Envio</th>
              <td>Taxa fixa: 5€ protes de envio</td>
            </tr>
            <tr>
              <th>Total da compra</th>
              <td>{subTotal + shipmentCost} €</td>
            </tr>
          </tbody>
        </Table>
      </div>
      <div>
        <div className="c-flex m-l-lg m-t-lg m-b-md">
          <h3>Preencha automaticamente com o seu</h3>
          <Button className="m-l-md">Login</Button>
        </div>
        <Form onSubmit={submit}>
          <ShipmentAddress />
          <Button
            className="m-t-md m-b-lg m-l-lg"
            size="lg" type="submit">Finalizar compra</Button>
        </Form>
      </div>
    </>
  );
}

const mapStateToProps = ({ cart }: IRootState) => ({
  items: cart.items,
  subTotal: cart.total,
  shipmentCost: 5
});

const mapDispatchToProps = (dispatch: Dispatch) => bindActionCreators({ removeItem: removeCartItem }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Cart);
