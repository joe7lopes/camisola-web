import React from 'react';
import { connect } from 'react-redux';
import CartContent from './CartContent';
import { IRootState, ICartItem } from '../../types';
import EmptyCart from './EmptyCart';

type IProps = {
    items: ICartItem[],
}

const Cart: React.FC<IProps> = ({ items }) => (items.length > 0 ? <CartContent/> : <EmptyCart/>);


const mapStateToProps = ({ cart }: IRootState) => ({
  items: cart.items,
});

export default connect(mapStateToProps)(Cart);
