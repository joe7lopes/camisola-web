import React from 'react';
import {
  Form, Row, Col, Button,
} from 'react-bootstrap';

function ProductPrice({ priceSize, handleOnPriceChanged, handleOnDelete }) {
  return (
    <div>
      {priceSize.map((pz, i) => (
        <Row key={pz.size}>
          <Col>
            <Form.Group>
              <Form.Label>Tamanho</Form.Label>
              <Form.Control type="text" value={pz.size} readOnly />
            </Form.Group>
          </Col>
          <Col>
            <Form.Group>
              <Form.Label>Preco</Form.Label>
              <Form.Control
                type="number"
                placeholder="30"
                value={pz.price}
                min={0}
                onChange={(e) => handleOnPriceChanged(Number(e.target.value), i)}
              />
            </Form.Group>
          </Col>
          <Col>
            <Button style={{ marginTop: '2rem' }} variant="danger" onClick={() => handleOnDelete(pz)}>
              x
            </Button>
          </Col>
        </Row>
      ))}
    </div>
  );
}

export default ProductPrice;
