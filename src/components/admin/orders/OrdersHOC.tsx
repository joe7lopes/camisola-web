import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { isLoadingAdminOrders, getAdminOrders } from '../../../store/selectors';
import Orders from './Orders';
import { fetchOrders } from '../../../actions';

const OrdersHOC = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(isLoadingAdminOrders);
  const orders = useSelector(getAdminOrders);

  useEffect(() => {
    dispatch(fetchOrders());
  }, [dispatch]);

  if (isLoading) return <div>Loading orders...</div>;
  return (
    <Orders orders={orders}/>
  );
};

export default OrdersHOC;
