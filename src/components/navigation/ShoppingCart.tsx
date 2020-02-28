import React from 'react';
import { FiShoppingCart } from 'react-icons/fi';
import { useSelector } from 'react-redux';
import { selectNumberOfItems } from '../../store/selectors';

const ShoppingCart = () => {
  const numberOfItems = useSelector(selectNumberOfItems);
  return (<div>
      <div className="cart-items">{numberOfItems}</div>
      <FiShoppingCart size={35}/>
  </div>);
};

export default ShoppingCart;
