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
                    <Link to={path.CREATE_PRODUCT}>Novo produto</Link>
                </li>
                <li>
                    <Link to={path.SETTINGS}>settings</Link>
                </li>
                <li>
                    <Link to={path.ADMIN_ORDERS}>orders</Link>
                </li>
            </ul>
        </div>
  );
};

export default AdminPanel;
