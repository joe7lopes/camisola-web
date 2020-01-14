import React from 'react';
import { Form, Col } from 'react-bootstrap';

const Stamping = () => (
  <React.Fragment>
    <Form.Group>
      <Form.Row>
        <Col xs={12} md={3}>
          <span>Nome</span>
        </Col>
        <Col xs={12} md={9}>
          <Form.Control type="text" placeholder="Nome a estampar" />
        </Col>
      </Form.Row>
    </Form.Group>
    <Form.Group>
      <Form.Row>
        <Col xs={12} md={3}>
          <span>Numero</span>
        </Col>
        <Col xs={12} md={9}>
          <Form.Control
            type="number"
            placeholder="Numero a estampar"
            min="1"
            max="2"
          />
        </Col>
      </Form.Row>
    </Form.Group>
    </React.Fragment>
);

export default Stamping;
