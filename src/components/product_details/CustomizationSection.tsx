import React, { useState, useEffect, SyntheticEvent } from 'react';
import { Form, Button } from 'react-bootstrap';
import Stamping from './Stamping';
import ProductSizeSelector from './ProductSizeSelector';
import { IProduct } from '../../interfaces';

interface ICustomizationSectionProps {
  product: IProduct
}

function CustomizationSection({ product }: ICustomizationSectionProps) {
  const availableSizes = product.availableSizes.map((as) => as.size);
  const [price, setPrice] = useState(product.defaultPrice);
  const [selectedSize, setSelectedSize] = useState<string>();
  const [stampingName, setStampingName] = useState<string>();
  const [stampingNumber, setStampingNumber] = useState();
  const [addButtonDisabled, setAddButtonDisabled] = useState(true);
  const extraCost = 12;

  const handleOnSizeChanged = (size: string) => {
    setSelectedSize(size);
  };

  const handleOnNameChanged = (e: any) => {
    setStampingName(e.target.value);
  };

  const handleOnNumberChanged = (e: any) => {
    setStampingNumber(e.target.value);
  };

  useEffect(() => {
    const getCurrentSelectedSizePrice = () => {
      const selectedSizePrice = product.availableSizes.find(
        (av) => av.size === selectedSize,
      );
      return selectedSizePrice ? selectedSizePrice.price : product.defaultPrice;
    };

    const getExtras = () => (stampingName || stampingNumber ? extraCost : 0);
    const selectedSizePrice = getCurrentSelectedSizePrice();
    const extras = getExtras();
    const finalPrice = selectedSizePrice + extras;
    setPrice(finalPrice);
  }, [selectedSize, stampingName, stampingNumber, product.defaultPrice, product.availableSizes]);

  useEffect(() => {
    if (selectedSize) {
      setAddButtonDisabled(false);
    }
  }, [selectedSize]);

  const handleFormSubmit = (e: any) => {
    e.preventDefault();

    const formData = {
      productId: product.id,
      stampingName,
      stampingNumber,
      selectedSize,
    };
    console.log('form submitted', formData);
  };

  return (
    <div className="c-customization-container">
      <h4>{product.name}</h4>
      <h4 className="m-t-lg m-b-md">{`€ ${price}`}</h4>
      <Form onSubmit={handleFormSubmit}>
        <Form.Group>
          <Form.Label className="c-label">Tamanho</Form.Label>
          <div>
            <ProductSizeSelector
              availableSizes={availableSizes}
              onSizeChanged={handleOnSizeChanged}
            />
          </div>
        </Form.Group>
        {product.isCustomizable && (
          <Stamping
            onNameChange={handleOnNameChanged}
            onNumberChange={handleOnNumberChanged}
          />
        )}
        <Button
          type="submit"
          disabled={addButtonDisabled}>
          Add to cart
        </Button>
      </Form>
    </div>
  );
}

export default CustomizationSection;
