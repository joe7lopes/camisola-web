import React from 'react';
import { Table } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import CartItem from './CartItem';
import { getCartItems, getShippingCost, getCartTotal } from '../../store/selectors';

const CartItems = () => {
  const items = useSelector(getCartItems);
  const shippingCost = useSelector(getShippingCost);
  const total = useSelector(getCartTotal);
  return (
    <>
        {items.map((item, i) => (
            <CartItem key={i} item={item}/>))}

        <Table striped bordered hover>
            <tbody>
            <tr>
                <th>Envio <span className="c-text-muted">(à cobrança)</span></th>
                <td>Taxa fixa: {shippingCost}€</td>
            </tr>
            <tr>
                <th>Total da compra</th>
                <td>{total} €</td>
            </tr>
            </tbody>
        </Table>
    </>
  );
};

export default CartItems;
