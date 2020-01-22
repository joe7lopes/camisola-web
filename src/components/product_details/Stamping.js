import React from 'react';
import { Form } from 'react-bootstrap';

const Stamping = ({ onNameChange, onNumberChange }) => (
  <React.Fragment>
    <div className="m-b-sm c-text-sm">(opcional estampagem +12€)</div>
    <Form.Group>
      <Form.Label className="c-label">Nome</Form.Label>
      <Form.Control
        type="text"
        placeholder="Nome a estampar"
        onChange={onNameChange}
      />
    </Form.Group>
    <Form.Group>
      <Form.Label className="c-label">Numero</Form.Label>
      <Form.Control
        type="text"
        placeholder="Numero a estampar"
        min="1"
        max="2"
        maxLength="2"
        onChange={onNumberChange}
      />
    </Form.Group>
  </React.Fragment>
);

export default Stamping;
