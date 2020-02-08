import React from 'react';
import CartContent from './CartContent';
import { connect } from 'react-redux';
import { IRootState, ICartItem } from '../../types';

type IProps = {
    items: ICartItem[],
}
const EmptyCart = () => (<div>empty cart</div>);

const Cart: React.FC<IProps> = ({ items }) => (
    <>
        {true ? <CartContent /> : <EmptyCart />}
    </>
)

const mapStateToProps = ({ cart, ui }: IRootState) => ({
    items: cart.items,
})

export default connect(mapStateToProps)(Cart);