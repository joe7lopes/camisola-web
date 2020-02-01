import React from 'react';
import { Table } from 'react-bootstrap';
import CartItem from './CartItem';
import { IRootState, ICartItem } from '../../types';
import { connect } from 'react-redux';

interface IProps {
    items: ICartItem[]
    subTotal: number,
    shipmentCost: number
}

const CartItems = ({ items, subTotal, shipmentCost }: IProps) => (
    <>
        <Table striped bordered hover responsive>
            <thead>
                <tr>
                    <th>Item</th>
                    <th>Preço</th>
                    <th>Total</th>
                </tr>
            </thead>
            <tbody>{items.map((item, i) => (
                <CartItem key={i} item={item} />))}
            </tbody>
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
    </>
)

const mapStateToProps = ({ cart }: IRootState) => ({
    items: cart.items,
    subTotal: cart.total,
    shipmentCost: 5
});

export default connect(mapStateToProps)(CartItems);