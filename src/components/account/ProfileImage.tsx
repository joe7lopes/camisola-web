import React from 'react';
import { Card, Row, Col } from 'react-bootstrap';
// import { Link } from 'react-router-dom';
import { FaRegUser } from 'react-icons/fa';

const ProfileImage = () => {
  // const dispatch = useDispatch();
  const user = { firstName: 'bla', lastName: 'bla2' };
  return (
    <Card>
      <Card.Body>
        <Row>
          <Col>
            <FaRegUser size={60} color="#ccc" />
          </Col>
          <Col>
            <div>{user?.firstName} {user?.lastName}</div>
            {/*<Link to="/" onClick={() => dispatch(signOut())}> Logout</Link>*/}
          </Col>
        </Row>
      </Card.Body>
    </Card>
  );
};

export default ProfileImage;
