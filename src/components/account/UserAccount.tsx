import React, { useState } from 'react';
import { Redirect } from 'react-router-dom';
import { Row, Col, ListGroup } from 'react-bootstrap';
import path from '../../routes/path';
import ProfileImage from './ProfileImage';
import OrderHistory from './OrderHistory';
import AccountDetails from './AccountDetails';

enum Tab {
  ORDERS = 'Encomendas',
  ACCOUNT_DETAILS = 'Detalhes da conta',
  LOGOUT = 'Sair'
}

export function UserAccount() {
  const [activeTab, setActiveTab] = useState(Tab.ORDERS);

  return (
    <div className="c-body">
      <h3>Account</h3>
      <Row className="m-t-lg">
        <Col sm={4} className="m-b-lg">
          <ProfileImage />
          <ListGroup className="m-t-md">
            {Object.values(Tab).map((tab) => (
                <ListGroup.Item
                  key={tab}
                  action
                  active={activeTab === tab}
                  onClick={() => setActiveTab(tab)}>
                  {tab}
                </ListGroup.Item>
              ))}
          </ListGroup>
        </Col>
        <Col>{renderComponent(activeTab)}</Col>
      </Row>
    </div>
  );
}

const renderComponent = (activeTab: Tab) => {
  debugger;
  switch (activeTab) {
    case Tab.ORDERS:
      return <OrderHistory />;
    case Tab.ACCOUNT_DETAILS:
      return <AccountDetails />;
    case Tab.LOGOUT:
      return <Redirect to={path.HOME} />;
    default:
      return null;
  }
};

export default UserAccount;
