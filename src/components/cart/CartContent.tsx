import React, { useState } from 'react';
import {
  Alert, Button, Form, Spinner,
} from 'react-bootstrap';
import _ from 'lodash';
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
  const dispatch = useDispatch();
  const items = useSelector(getCartItems);
  const shippingCost = useSelector(getShippingCost);
  const total = useSelector(getCartTotal);
  const { loading, error } = useSelector(getSubmittedOrder);

  const isBlank = (value: string) => !value || value === '';
  const isEmail = (value: string) => {
    if (isBlank(value)) return true;
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(value.toLowerCase());
  };

  const [form, setForm] = useState({
    firstName: { value: '', isValid: false },
    lastName: { value: '', isValid: false },
    email: { value: '', isValid: false },
    phone: { value: '', isValid: false },
    address: { value: '', isValid: false },
    city: { value: '', isValid: false },
    postCode: { value: '', isValid: false },
  });

  const handleUserInput = (e: any) => {
    const { name } = e.target;
    const { value } = e.target;
    const copy = { ...form };
    const isValid = name === 'email' ? isEmail(value) : !isBlank(value);
    // @ts-ignore
    copy[name] = { value, isValid };
    setForm(copy);
  };

  const isFormValid = () => {
    for (const field in form) {
      // @ts-ignore
      if (!form[field].isValid) {
        return false;
      }
    }
    return true;
  };

  const submit = (event: any) => {
    event.preventDefault();
    if (isFormValid()) {
      // @ts-ignore
      const shippingAddress: IShippingAddress = _.mapValues(form, (obj) => obj.value);
      shippingAddress.email = shippingAddress.email.trim();

      dispatch(placeOrder(items, shippingAddress));
    }
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
                <Form onSubmit={submit} noValidate>
                    <ShipmentAddress onChange={handleUserInput} formValues={form}/>
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
        size="lg"
        type="submit">
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
        size="lg"
        type="submit">
        Encomendar
    </Button>
);

export default CartContent;
