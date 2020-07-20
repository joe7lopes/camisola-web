import React from 'react';
import { Link } from 'react-router-dom';
import path from '../../routes/path';

const AdminPanel = () => {
  const title = 'AdminPannel';
  return (
        <div className="c-body">
            <h1>{title}</h1>
            <ul>
                <li>
                    <Link to={path.ADMIN_PRODUCTS}>Produtos</Link>
                </li>
                <li>
                    <Link to={path.SETTINGS}>Settings</Link>
                </li>
                <li>
                    <Link to={path.ADMIN_ORDERS}>Orders</Link>
                </li>
                <li>
                    <Link to={path.ADMIN_IMAGES}>Images</Link>
                </li>
            </ul>
        </div>
  );
};

export default AdminPanel;
