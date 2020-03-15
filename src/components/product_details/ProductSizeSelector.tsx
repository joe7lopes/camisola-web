import React, { useState } from 'react';
import { Button, ButtonGroup } from 'react-bootstrap';

interface IProps {
    availableSizes: string[],
    onSizeChanged: (size: string) => void
}

function ProductSizeSelector({ availableSizes, onSizeChanged }: IProps) {
  const activeSizes = availableSizes.map(() => false);
  const defaultSelectedSize:any = availableSizes[0];
  activeSizes[defaultSelectedSize] = true;
  const [active, setActive] = useState(activeSizes);

  const handleSetActive = (size: any) => {
    const activeButtons = [...activeSizes];
    activeButtons[size] = true;
    setActive(activeButtons);
    onSizeChanged(size);
  };

  return (
        <ButtonGroup className="c-full-width">
            {availableSizes.map((size: any) => (
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
