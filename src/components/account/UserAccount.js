import React, { useState } from 'react';
import { Redirect } from 'react-router-dom';
import { Row, Col, ListGroup } from 'react-bootstrap';
import path from '../../routes/path';
import ProfileImage from './ProfileImage';
import OrderHistory from './OrderHistory';
import AccountDetails from './AccountDetails';

const ENCOMENDAS = 'Encomendas';
const ACCOUNT_DETAILS = 'Detalhes da conta';
const LOGOUT = 'Sair';
const tabs = [ENCOMENDAS, ACCOUNT_DETAILS, LOGOUT];

export function UserAccount() {
  const [activeTab, setActiveTab] = useState(tabs[1]);

  return (
    <div className="c-body">
      <h3>Account</h3>
      <Row className="m-t-lg">
        <Col sm={4} className="m-b-lg">
          <ProfileImage />
          <ListGroup className="m-t-md">{renderTabs(activeTab, setActiveTab)}</ListGroup>
        </Col>
        <Col>{renderComponent(activeTab)}</Col>
      </Row>
    </div>
  );
}

const renderTabs = (activeTab, setActiveTab) => tabs.map((tab) => (
  <ListGroup.Item
    key={tab}
    action
    active={activeTab === tab}
    onClick={() => setActiveTab(tab)}>
    {tab}
  </ListGroup.Item>
));

const renderComponent = (activeTab) => {
  switch (activeTab) {
    case ENCOMENDAS:
      return <OrderHistory />;
    case ACCOUNT_DETAILS:
      return <AccountDetails />;
    case LOGOUT:
      return <Redirect to={path.HOME} />;
    default:
      return null;
  }
};

export default UserAccount;
