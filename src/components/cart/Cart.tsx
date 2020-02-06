import React from 'react';
import CartContent from './CartContent';
import { connect } from 'react-redux';
import { IRootState, ICartItem } from '../../types';

type IProps = {
    items: ICartItem[],
    showThankYouPage: boolean,
}
const EmptyCart = () => (<div>empty cart</div>);

const Cart: React.FC<IProps> = ({ items, showThankYouPage }) => {

    return (
        <>
            {items.length > 0 ? <CartContent /> : <EmptyCart /> }
        </>
    )
}

const mapStateToProps = ({ cart, ui }: IRootState) => ({
    items: cart.items,
    showThankYouPage: ui.orderReceived.visible
})

export default connect(mapStateToProps)(Cart);