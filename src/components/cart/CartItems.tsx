import React from 'react';
import { Table } from 'react-bootstrap';
import CartItem from './CartItem';
import { ICartItem } from '../../types';

interface IProps {
    readOnly?: boolean,
    items: ICartItem[],
    shippingCost: number,
    total: number
}

const CartItems = ({
  readOnly = false, items, shippingCost, total,
}: IProps) => (
  <>
        {items.map((item, i) => (
            <CartItem key={i} item={item} readOnly={readOnly}/>))}

        <Table striped bordered hover>
            <tbody>
            <tr>
                <th>Envio <span className="c-text-muted">(à cobrança pelos CTT)</span></th>
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

export default CartItems;
