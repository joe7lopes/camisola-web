import React, { useState } from 'react';
import { Button, ButtonGroup } from 'react-bootstrap';
import { IProductSize } from '../../types';

interface IProps {
    availableSizes: IProductSize[],
    onSizeChanged: (size: IProductSize) => void
}

function ProductSizeSelector({ availableSizes, onSizeChanged }: IProps) {
  const activeSizes = availableSizes.map(() => false);
  const defaultSelectedSize:any = availableSizes[0].id;
  activeSizes[defaultSelectedSize] = true;
  const [active, setActive] = useState(activeSizes);

  const handleSetActive = (size: any) => {
    const activeButtons = [...activeSizes];
    activeButtons[size.id] = true;
    setActive(activeButtons);
    onSizeChanged(size);
  };

  return (
        <ButtonGroup className="c-full-width">
            {availableSizes.map((size:any) => (
                <Button
                    key={size.id}
                    variant="outline-dark"
                    active={active[size.id]}
                    onClick={() => handleSetActive(size)}
                >
                    {size.size}
                </Button>
            ))}
        </ButtonGroup>
  );
}

export default ProductSizeSelector;
