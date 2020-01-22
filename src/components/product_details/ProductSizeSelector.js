import React, { useState } from 'react';
import { Button, ButtonGroup } from 'react-bootstrap';

function ProductSizeSelector({ availableSizes, onSizeChanged }) {
  const activeSizes = availableSizes.map(() => false);
  const [active, setActive] = useState(activeSizes);

  const handleSetActive = (size) => {
    const activeButtons = [...activeSizes];
    activeButtons[size] = true;
    setActive(activeButtons);
    onSizeChanged(size);
  };

  return (
    <ButtonGroup className="c-full-width">
      {availableSizes.map((size) => (
        <Button
          key={size}
          variant="outline-dark"
          active={active[size]}
          onClick={() => handleSetActive(size)}
        >
          {size}
        </Button>
      ))}
    </ButtonGroup>
  );
}

export default ProductSizeSelector;
