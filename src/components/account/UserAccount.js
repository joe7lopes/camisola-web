import React, { useState } from 'react';
import { Row, Col, ListGroup } from 'react-bootstrap';
import ProfileImage from './ProfileImage';

export function UserAccount() {
  const tabs = ['Encomendas', 'Detalhes da conta', 'Sair'];
  const [activeTab, setActiveTab] = useState(tabs[0]);

  const renderTabs = () => tabs.map((tab) => (
      <ListGroup.Item
        key={tab}
        action
        active={activeTab === tab}
        onClick={() => setActiveTab(tab)}
      >
        {tab}
      </ListGroup.Item>
  ));

  return (
    <div className="c-body">
      <h3>Account</h3>

      <Row>
        <Col>
          <ProfileImage />
          <ListGroup>{renderTabs()}</ListGroup>
        </Col>
        <Col>right side</Col>
      </Row>
    </div>
  );
}

export default UserAccount;
