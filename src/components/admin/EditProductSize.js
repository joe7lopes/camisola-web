import React from 'react';
import { Form } from 'react-bootstrap';
import { size } from '../../config';

function EditProductSize() {
  return (
    <div>
      <Form.Group>
        <Form.Label>Tamanho</Form.Label>
        <Form.Control as="select">
          {Object.keys(size).map((k) => (
            <option key={k} value={k}>
              {k}
            </option>
          ))}
        </Form.Control>
      </Form.Group>
    </div>
  );
}

export default EditProductSize;
