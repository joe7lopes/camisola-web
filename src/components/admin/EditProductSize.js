import React, { useState } from 'react';
import {
  Form, Row, Col, Button,
} from 'react-bootstrap';

function EditProductSize({
  size,
  handleOnDelete,
}) {
  const [price, setPrice] = useState('');
  return (
    <Row>
      <Col>
        <Form.Group>
          <Form.Label>Tamanho</Form.Label>
          <Form.Control type="text" value={size} readOnly/>
        </Form.Group>
      </Col>
      <Col>
        <Form.Group>
          <Form.Label>Preco</Form.Label>
          <Form.Control
            type="text"
            placeholder="35.5"
            onChange={(e) => setPrice(e.target.value)}
            value={price}
          />
        </Form.Group>
      </Col>
      <Col>
      <Button variant="danger" onClick={handleOnDelete}>x</Button>
      </Col>
    </Row>
  );
}

export default EditProductSize;
