import React, { useState, useEffect } from 'react';
import { Form, Button } from 'react-bootstrap';
import { bindActionCreators, Dispatch } from 'redux';
import { connect } from 'react-redux';
import { addToCart as addToCartAction } from '../../actions';
import Stamping from './Stamping';
import ProductSizeSelector from './ProductSizeSelector';
import { IProduct, ICartProduct, IRootState } from '../../types';

interface IProps {
  product: IProduct,
  addToCart: (item: ICartProduct) => void
}

export function CustomizationSection({ product, addToCart, ...props }: IProps) {
  const { availableSizes, defaultPrice, name, isCustomizable } = product;
  const sizes = availableSizes.map((as) => as.size);
  const [price, setPrice] = useState(defaultPrice);
  const [selectedSize, setSelectedSize] = useState<string>();
  const [stampingName, setStampingName] = useState<string>();
  const [stampingNumber, setStampingNumber] = useState();
  const [addButtonDisabled, setAddButtonDisabled] = useState(true);
  const extraCost = 12;

  useEffect(() => {
    const getCurrentSelectedSizePrice = () => {
      const selectedSizePrice = availableSizes.find(
        (av) => av.size === selectedSize,
      );
      return selectedSizePrice ? selectedSizePrice.price : defaultPrice;
    };

    const getExtras = () => (stampingName || stampingNumber ? extraCost : 0);
    const selectedSizePrice = getCurrentSelectedSizePrice();
    const extras = getExtras();
    const finalPrice = selectedSizePrice + extras;
    setPrice(finalPrice);
  }, [selectedSize, stampingName, stampingNumber, defaultPrice, availableSizes]);

  useEffect(() => {
    if (selectedSize) {
      setAddButtonDisabled(false);
    }
  }, [selectedSize]);

  const handleFormSubmit = (e: any) => {
    e.preventDefault();
    addToCart({
      product,
      selectedSize: availableSizes.filter(s => s.size === selectedSize)[0],
      stampingName,
      stampingNumber
    });



  };

  return (
    <div className="c-customization-container">
      <h4>{name}</h4>
      <h4 className="m-t-lg m-b-md" data-test="price">{`€ ${price}`}</h4>
      <Form onSubmit={handleFormSubmit}>
        <Form.Group>
          <Form.Label className="c-label">Tamanho</Form.Label>
          <div>
            <ProductSizeSelector
              availableSizes={sizes}
              onSizeChanged={(size: string) => setSelectedSize(size)}
            />
          </div>
        </Form.Group>
        {isCustomizable && (
          <Stamping
            onNameChange={(e: any) => setStampingName(e.target.value)}
            onNumberChange={(e: any) => setStampingNumber(e.target.value)}
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

const mapStateToProps = (state: IRootState) => {
  console.log(state);
  return {

  }
}
const actionCreators = { addToCart: addToCartAction };
const mapDispatchToProps = (dispatch: Dispatch) => bindActionCreators(actionCreators, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(CustomizationSection);
