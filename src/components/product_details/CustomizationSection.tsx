import React, { useState, useEffect } from 'react';
import { Form, Button } from 'react-bootstrap';
import { bindActionCreators, Dispatch } from 'redux';
import { connect } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { addToCart as addToCartAction } from '../../actions';
import Stamping from './Stamping';
import ProductSizeSelector from './ProductSizeSelector';
import { IProduct, ICartItem } from '../../types';
import path from '../../routes/path';

interface IProps {
  product: IProduct,
  addToCart: (item: ICartItem) => void
}

export function CustomizationSection({ product, addToCart }: IProps) {
  const {
    sizes, defaultPrice, name, isCustomizable,
  } = product;

  const [price, setPrice] = useState(defaultPrice);
  const [selectedSize, setSelectedSize] = useState<string>();
  const [stampingName, setStampingName] = useState<string>();
  const [stampingNumber, setStampingNumber] = useState();
  const [addButtonDisabled, setAddButtonDisabled] = useState(true);
  const history = useHistory();

  const extraCost = 12;

  // useEffect(() => {
  //   const getCurrentSelectedSizePrice = () => {
  //     const selectedSizePrice = availableSizes.find(
  //       (av) => av.size === selectedSize,
  //     );
  //     return selectedSizePrice ? selectedSizePrice.price : defaultPrice;
  //   };
  //
  //   const getExtras = () => (stampingName || stampingNumber ? extraCost : 0);
  //   const selectedSizePrice = getCurrentSelectedSizePrice();
  //   const extras = getExtras();
  //   const finalPrice = selectedSizePrice + extras;
  //   setPrice(finalPrice);
  // }, [selectedSize, stampingName, stampingNumber, defaultPrice, availableSizes]);

  useEffect(() => {
    if (selectedSize) {
      setAddButtonDisabled(false);
    }
  }, [selectedSize]);

  const handleFormSubmit = (e: any) => {
    e.preventDefault();
    addToCart({
      product,
      selectedSize: sizes.filter((s) => s.size === selectedSize)[0],
      stampingName,
      stampingNumber,
      price,
    });

    history.push(path.CART);
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
              availableSizes={sizes.map((as) => as.size)}
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

const actionCreators = { addToCart: addToCartAction };
const mapDispatchToProps = (dispatch: Dispatch) => bindActionCreators(actionCreators, dispatch);

export default connect(null, mapDispatchToProps)(CustomizationSection);
