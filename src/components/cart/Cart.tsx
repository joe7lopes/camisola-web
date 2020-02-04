import React, { useState, useEffect } from 'react';
import { Button, Form } from 'react-bootstrap';
import ShipmentAddress from './ShipmentAddress';
import CartItems from './CartItems';
import { bindActionCreators, Dispatch } from 'redux';
import { connect } from 'react-redux';
import CartHOC from './CartHOC';
import { placeOrder as placeOrderAction } from '../../actions';
import { IOrder, ICartItem, IRootState } from '../../types';

export interface IProps {
  items: ICartItem[],
  placeOrder: (order: IOrder) => void,
  showThankYouPage: boolean,
}

const Cart = ({ placeOrder, items, showThankYouPage }: IProps) => {
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

  if(showThankYouPage){
    return <div>thank you</div>
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

const mapStateToProps = ({ cart, ui }: IRootState) => ({
  items: cart.items,
  showThankYouPage: ui.orderReceived.visible
});

const mapDispatchToProps = (dispatch: Dispatch) => bindActionCreators({ placeOrder: placeOrderAction }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Cart);
// export default CartHOC(Cart);
