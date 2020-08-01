import React, { useState } from 'react';
import { FormControl, InputGroup, Form } from 'react-bootstrap';
import { IProductSize } from '../../../../types';

interface IProps {
    selectedSizes: IProductSize[],
    availableSizes: string[],
    onChange: (selectedSizes: IProductSize[]) => void
}

const ProductSizeSelector = ({ selectedSizes, availableSizes, onChange }: IProps) => {
  const allSizes = availableSizes.map((availableSize) => {
    const size = selectedSizes.find((s) => s.size === availableSize);

    if (size) {
      return {
        ...size,
        checked: true,
      };
    }
    return {
      size: availableSize,
      price: 30,
      checked: false,
    };
  });

  const [sizes, setSizes] = useState(allSizes);

  const handleOnSizeChanged = (index: any) => {
    const newSizeSelection = [...sizes];
    newSizeSelection[index].checked = !newSizeSelection[index].checked;
    updateSizes(newSizeSelection);
  };

  const handleOnPriceChanged = (value: any, index: number) => {
    const copy = [...sizes];
    copy[index].price = value;
    updateSizes(copy);
  };

  const updateSizes = (newSizes: any) => {
    setSizes(newSizes);
    const updatedSizes = newSizes.filter((s: { checked: any; }) => s.checked);
    onChange(updatedSizes);
  };

  return (

        <div>
            {sizes.map((s, i) => (
                <div key={s.size}>
                    <InputGroup className="mb-3">
                        <InputGroup.Prepend>
                            <InputGroup.Checkbox
                                checked={s.checked}
                                onChange={() => handleOnSizeChanged(i)}/>
                        </InputGroup.Prepend>
                        <FormControl value={s.size} readOnly/>
                        <Form.Control
                            type="number"
                            value={`${s.price}`}
                            onChange={(e: any) => handleOnPriceChanged(e.target.value, i)}/>
                    </InputGroup>
                </div>
            ))}
        </div>
  );
};

export default ProductSizeSelector;
