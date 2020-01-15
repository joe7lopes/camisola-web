import React from 'react';
import { Link } from 'react-router-dom';

const AdminPannel = () => {
  const title = 'AdminPannel';
  return (
    <div className="c-body">
      <h1>{title}</h1>
      <ul>
        <li>
          <Link to="/admin/new-product">Novo produto</Link>
        </li>
        <li>
          <Link to="/admin/settings">settings</Link>
        </li>
      </ul>
    </div>
  );
};

export default AdminPannel;
