import React from 'react';
import { Card, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FaRegUser } from 'react-icons/fa';

function ProfileImage() {
  return (
    <Card>
      <Card.Body>
        <Row>
          <Col>
            <FaRegUser size={80} color="#ccc" />
          </Col>
          <Col>
            <div>user name</div>
            <Link to="/"> Logout</Link>
          </Col>
        </Row>
      </Card.Body>
    </Card>
  );
}

export default ProfileImage;
