import React, { useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import ShipmentAddress from './ShipmentAddress';
import CartItems from './CartItems';
import { bindActionCreators, Dispatch } from 'redux';
import { connect } from 'react-redux';
import { placeOrder as placeOrderAction } from '../../actions';
import { IOrder, IShippingAddress, ICartItem, IRootState } from '../../types';

interface IProps {
  items: ICartItem[],
  placeOrder: (order: IOrder) => void
}

function Cart({ placeOrder, items }: IProps) {
  const [validated, setValidated] = useState(false);

  const submit = (event: any) => {
    const form = event.currentTarget;
    event.preventDefault();
    if (form.checkValidity() === true) {

      const shippingAddress: any = [...form.elements]
        .filter(el => el.name)
        .reduce((acc, curr) => ({ ...acc, [curr.name]: curr.value }), {})

      const order = { items, shippingAddress }
      placeOrder(order)
    }

    setValidated(true);
  }

  return (
    <>
      <div className="c-container">
        <CartItems />
      </div>
      <div>
        <div className="c-flex m-l-lg m-t-lg m-b-md">
          <h3>Preencha automaticamente com o seu</h3>
          <Button className="m-l-md">Login</Button>
        </div>
        <Form onSubmit={submit} noValidate validated={validated}>
          <ShipmentAddress />
          <div>Notas adicionais</div>
          <Button
            className="m-t-md m-b-lg m-l-lg"
            size="lg" type="submit">Finalizar compra</Button>
        </Form>
      </div>
    </>
  );
}

const mapStateToProps = ({ cart }: IRootState) => ({
  items: cart.items
});

const mapDispatchToProps = (dispatch: Dispatch) => bindActionCreators({ placeOrder: placeOrderAction }, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(Cart);
