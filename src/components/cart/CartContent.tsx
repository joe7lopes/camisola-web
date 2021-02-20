import React, { useState } from 'react';
import {
  Alert, Button, Form, Spinner,
} from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import ShipmentAddress from './ShipmentAddress';
import CartItems from './CartItems';
import { placeOrder } from '../../actions';
import OrderCompleted from './OrderCompleted';
import {
  getCartItems,
  getCartTotal,
  getShippingCost,
  getSubmittedOrder,
} from '../../store/selectors';
import { IShippingAddress } from '../../types';

const CartContent = () => {
  const items = useSelector(getCartItems);
  const shippingCost = useSelector(getShippingCost);
  const total = useSelector(getCartTotal);
  const { loading, error } = useSelector(getSubmittedOrder);
  const dispatch = useDispatch();
  const [validated, setValidated] = useState(false);

  const submit = (event: any) => {
    const form = event.currentTarget;
    event.preventDefault();
    if (form.checkValidity()) {
      const shippingAddress: IShippingAddress = [...form.elements]
        .filter((el) => el.name)
        .reduce((acc, curr) => ({ ...acc, [curr.name]: curr.value }), {});

      shippingAddress.email = shippingAddress.email.trim();

      dispatch(placeOrder(items, shippingAddress));
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
                <Form onSubmit={submit} noValidate validated={validated}>
                    <ShipmentAddress/>
                    {error
                    && <Alert variant="danger">
                        Ops, não foi possivel registar a sua encomenda. Tente mais tarde.
                        Erro : {error}
                    </Alert>
                    }
                    <div className="text-muted">(Pagamento feito no acto da entrega)</div>
                    {loading ? renderLoadingButton() : renderPlaceOrderButton()}
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
        Encomendar
    </Button>
);

export default CartContent;
