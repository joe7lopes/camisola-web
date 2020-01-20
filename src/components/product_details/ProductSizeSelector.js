import React from 'react';
import { Button, ButtonGroup } from 'react-bootstrap';

function ProductSizeSelector({ sizes = [1, 2, 3] }) {
  return (
    <ButtonGroup>
      {sizes.map((size) => (
        <Button key={size} variant="outline-dark">{size}</Button>
      ))}
    </ButtonGroup>
  );
}

export default ProductSizeSelector;
