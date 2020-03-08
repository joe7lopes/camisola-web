import React from 'react';
import { FiShoppingCart } from 'react-icons/fi';
import { useHistory } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectNumberOfItems } from '../../store/selectors';
import path from '../../routes/path';

const ShoppingCart = ({ className }: any) => {
  const numberOfItems = useSelector(selectNumberOfItems);
  const history = useHistory();
  return (
        <div className={className} onClick={() => history.push(path.CART)}>
            <div className="cart-items">{numberOfItems}</div>
            <FiShoppingCart size={35}/>
        </div>
  );
};

export default ShoppingCart;
