import React, { useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import ShipmentAddress from './ShipmentAddress';
import CartItems from './CartItems';

function Cart() {
  const [validated, setValidated] = useState(false);

  const submit = (event: any) => {
    const form = event.currentTarget;
    event.preventDefault();
    if (form.checkValidity() === true) {
      const values = [...form.elements]
        .filter(el => el.name)
        .map(el => ({ [el.name]: el.value }))

        
      console.log(values);
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


export default Cart;
