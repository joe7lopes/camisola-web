import React from 'react';
import { Form } from 'react-bootstrap';

const Stamping = () => (
  <React.Fragment>
    <Form.Group>
          <span>Nome</span>
          <Form.Control type="text" placeholder="Nome a estampar" />
    </Form.Group>
    <Form.Group>
          <span>Numero</span>
          <Form.Control
            type="text"
            placeholder="Numero a estampar"
            min="1"
            max="2"
            maxLength="2"
          />
    </Form.Group>
    </React.Fragment>
);

export default Stamping;
