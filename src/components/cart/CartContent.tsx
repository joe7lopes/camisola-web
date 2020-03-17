import React, { useState } from 'react';
import { Button, Form, Spinner } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import ShipmentAddress from './ShipmentAddress';
import CartItems from './CartItems';
import { placeOrder } from '../../actions';
import OrderCompleted from './OrderCompleted';
import {
  getCartItems, getCartTotal, getShippingCost, isPlacingOrder,
} from '../../store/selectors';

const CartContent = () => {
  const items = useSelector(getCartItems);
  const shippingCost = useSelector(getShippingCost);
  const total = useSelector(getCartTotal);
  const showPlaceOrderLoading = useSelector(isPlacingOrder);
  const dispatch = useDispatch();
  const [validated, setValidated] = useState(false);

  const submit = (event: any) => {
    const form = event.currentTarget;
    event.preventDefault();
    if (form.checkValidity()) {
      const shippingAddress: any = [...form.elements]
        .filter((el) => el.name)
        .reduce((acc, curr) => ({ ...acc, [curr.name]: curr.value }), {});

      const order = { items, shippingAddress };
      dispatch(placeOrder(order));
    }

    setValidated(true);
  };

  return (
    <>
            <OrderCompleted/>
            <div className="c-container">
                <CartItems
                    items={items}
                    shippingCost={shippingCost}
                    total={total}
                />
            </div>
            <div>
                <div className="c-flex m-l-lg m-t-lg m-b-md">
                    <h3>Preencha automaticamente com o seu</h3>
                    <Button className="m-l-md">Login</Button>
                </div>
                <Form onSubmit={submit} noValidate validated={validated}>
                    <ShipmentAddress/>
                    <div>Notas adicionais</div>
                    {showPlaceOrderLoading ? renderLoadingButton() : renderPlaceOrderButton()}
                </Form>
            </div>
    </>
  );
};

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
    </Button>
);

const renderPlaceOrderButton = () => (
    <Button
        className="m-t-md m-b-lg m-l-lg"
        size="lg" type="submit">
        Finalizar compra
    </Button>
);

export default CartContent;
