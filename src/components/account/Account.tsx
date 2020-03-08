import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { Row, Col, ListGroup } from 'react-bootstrap';
import path from '../../routes/path';
import ProfileImage from './ProfileImage';
import OrderHistory from './OrderHistory';
import AccountDetails from './AccountDetails';
import {useDispatch} from "react-redux";
import {signOut} from "../../actions";

enum Tab {
  ORDERS = 'Encomendas',
  ACCOUNT_DETAILS = 'Detalhes da conta',
  LOGOUT = 'Sair'
}

const Account = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const [activeTab, setActiveTab] = useState(Tab.ORDERS);

  const handleTabChanged = (tab: Tab) => {
    if(tab === Tab.LOGOUT){
      dispatch(signOut());
      history.push(path.HOME);
    }
    setActiveTab(tab);
  };
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
                  onClick={()=>handleTabChanged(tab)}>
                  {tab}
                </ListGroup.Item>
              ))}
          </ListGroup>
        </Col>
        <Col>{renderComponent(activeTab)}</Col>
      </Row>
    </div>
  );
};

const renderComponent = (activeTab: Tab) => {
  switch (activeTab) {
    case Tab.ORDERS:
      return <OrderHistory />;
    case Tab.ACCOUNT_DETAILS:
      return <AccountDetails />;
    default:
      return null;
  }
};

export default Account;
