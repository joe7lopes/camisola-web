import React from 'react';
import { Form } from 'react-bootstrap';
import Stamping from './Stamping';
import ProductSizeSelector from './ProductSizeSelector';
import ActionButton from '../ui/ActionButton';

const CustomizationSection = () => (
  <div style={{}}>
    <h4>Everybirdy Pattern Graphic T-Shirt</h4>
    <h4 className="m-t-lg">€27.68</h4>
    <Form
      onSubmit={(e) => {
        e.preventDefault();
        console.log('form submitted');
      }}
    >
      <Form.Group>
        <Form.Label>Tamanho</Form.Label>
        <div>
          <ProductSizeSelector />
        </div>
      </Form.Group>
      <Stamping />
        <ActionButton
          className="m-b-md"
          type="submit">
          Add to cart
        </ActionButton>
    </Form>
  </div>
);

export default CustomizationSection;
