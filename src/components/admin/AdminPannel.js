import React from 'react';
import AddNewProduct from './AddNewProduct';

const AdminPannel = () => {
  const title = 'AdminPannel';
  return (
    <div className="c-body">
      <h1>{title}</h1>
      <AddNewProduct />
    </div>
  );
};

export default AdminPannel;
