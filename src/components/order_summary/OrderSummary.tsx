import React from 'react';
import { Card } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import { ShippingAddress } from '../ui';
import CartItems from '../cart/CartItems';
import { getCartItems, getCartTotal, getShippingCost } from '../../store/selectors';

const OrderSummary = () => {
  const items = useSelector(getCartItems);
  const shippingCost = useSelector(getShippingCost);
  const total = useSelector(getCartTotal);
  return (
    <div className="c-container">
        <Card>
          <CartItems
              readOnly
              items={items}
              shippingCost={shippingCost}
              total={total}/>
            <Card.Body>
                <div className="m-b-sm">Morada de envio</div>
                <ShippingAddress readonly/>
            </Card.Body>
        </Card>

    </div>
  );
};

export default OrderSummary;
