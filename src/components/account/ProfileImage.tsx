import React from 'react';
import { Card, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FaRegUser } from 'react-icons/fa';
import { useDispatch, useSelector } from 'react-redux';
import { getUser } from '../../store/selectors';
import { signOut } from '../../actions';

const ProfileImage = () => {
  const dispatch = useDispatch();
  const user = useSelector(getUser);
  return (
    <Card>
      <Card.Body>
        <Row>
          <Col>
            <FaRegUser size={60} color="#ccc" />
          </Col>
          <Col>
            <div>{user?.firstName} {user?.lastName}</div>
            <Link to="/" onClick={() => dispatch(signOut())}> Logout</Link>
          </Col>
        </Row>
      </Card.Body>
    </Card>
  );
};

export default ProfileImage;
