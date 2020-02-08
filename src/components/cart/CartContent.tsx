import React, { useState, useEffect } from 'react';
import { Button, Form, Spinner } from 'react-bootstrap';
import { bindActionCreators, Dispatch } from 'redux';
import { useHistory } from 'react-router-dom';
import { connect } from 'react-redux';
import ShipmentAddress from './ShipmentAddress';
import CartItems from './CartItems';
import { placeOrder as placeOrderAction } from '../../actions';
import { IOrder, ICartItem, IRootState } from '../../types';
import path from '../../routes/path';

export interface IProps {
  items: ICartItem[],
  placeOrder: (order: IOrder) => void,
  showPlaceOrderLoading: boolean,
  showOrderSummary: boolean,
  showOrderPlacedError: boolean,
  orderId?: string
}

const CartContent: React.FC<IProps> = ({ placeOrder, items, showPlaceOrderLoading, showOrderSummary, showOrderPlacedError, orderId }) => {
  const [validated, setValidated] = useState(false);
  const history = useHistory();

  useEffect(() => {
    if (showOrderSummary) {
      history.push(path.ORDER_SUMMARY(orderId))
    }

  }, [showOrderSummary, history, orderId])

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
          {showPlaceOrderLoading ? renderLoadingButton() : renderPlaceOrderButton()}
        </Form>
      </div>
    </>
  );
}

const renderLoadingButton = () => (
  <Button
    className="m-t-md m-b-lg m-l-lg"
    size="lg" type="submit">
    A processar encomenda
    <Spinner
      className="m-l-sm"
      as="span"
      animation="border"
      role="status"
    />
  </Button >
)

const renderPlaceOrderButton = () => (
  <Button
    className="m-t-md m-b-lg m-l-lg"
    size="lg" type="submit">
    Finalizar compra
  </Button >
)

const mapStateToProps = ({ cart }: IRootState) => ({
  items: cart.items,
  showPlaceOrderLoading: cart.isOrderPlacedLoading,
  showOrderSummary: cart.isOrderPlacedSuccess,
  showOrderPlacedError: cart.isOrderPlacedFailure,
  orderId: cart.order?.orderId
});

const mapDispatchToProps = (dispatch: Dispatch) => bindActionCreators({ placeOrder: placeOrderAction }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(CartContent);
