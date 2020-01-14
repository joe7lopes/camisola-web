import React from 'react';
import { Form, Button, Col } from 'react-bootstrap';
import Stamping from './Stamping';
import QuantitySelector from '../ui';

const CustomizationSection = () => (
  <div>
    <h1>product title</h1>
    <h4>30$</h4>
    <Form>
      <Form.Group controlId="exampleForm.ControlSelect1">
        <Form.Group>
          <Form.Row>
            <Col xs={12} md={3}>
              <Form.Label>Tamanho</Form.Label>
            </Col>
            <Col xs={12} md={9}>
              <Form.Control as="select" isInvalid={false}>
                <option value="default">Escolha um tamanho</option>
                <option value="s">S</option>
                <option>M</option>
                <option>L</option>
                <option>XL</option>
                <option>XXL</option>
              </Form.Control>
            </Col>
          </Form.Row>
        </Form.Group>
        <Stamping />
      </Form.Group>
      <Form.Row>
        <QuantitySelector />
        <Button type="submit" block>Adicionar</Button>
      </Form.Row>
    </Form>
  </div>
);

export default CustomizationSection;
