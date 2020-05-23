import React, { useState, useEffect } from 'react';
import { Form, Button } from 'react-bootstrap';
import { bindActionCreators, Dispatch } from 'redux';
import { connect } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { getStampingExtraCost } from '../../store/selectors';
import { addToCart as addToCartAction } from '../../actions';
import Stamping from './Stamping';
import ProductSizeSelector from './ProductSizeSelector';
import {
  IProduct, ICartItem, IRootState, IProductSize,
} from '../../types';
import path from '../../routes/path';

interface IProps {
    product: IProduct,
    addToCart: (item: ICartItem) => void,
    extraCost: number
}

export function CustomizationSection({ product, addToCart, extraCost }: IProps) {
  const {
    sizes, defaultPrice, name, customizable,
  } = product;

  const [price, setPrice] = useState(defaultPrice);
  const [selectedSize, setSelectedSize] = useState<IProductSize>(sizes[0]);
  const [stampingName, setStampingName] = useState<string>();
  const [stampingNumber, setStampingNumber] = useState();
  const [addButtonDisabled, setAddButtonDisabled] = useState(true);
  const history = useHistory();

  useEffect(() => {
    const extras = (stampingName || stampingNumber) ? extraCost : 0;
    const finalPrice = parseFloat(String(selectedSize.price)) + parseFloat(String(extras));
    setPrice(finalPrice);
  }, [selectedSize, stampingName, stampingNumber, sizes, extraCost, product]);

  useEffect(() => {
    if (selectedSize) {
      setAddButtonDisabled(false);
    }
  }, [selectedSize]);

  const handleFormSubmit = (e: any) => {
    e.preventDefault();

    const item: ICartItem = {
      product,
      stampingName,
      stampingNumber,
      size: selectedSize,
    };

    addToCart(item);

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
                            availableSizes={sizes}
                            onSizeChanged={setSelectedSize}
                        />
                    </div>
                </Form.Group>
                {customizable && (
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

const mapStateToProps = (state: IRootState) => ({
  extraCost: getStampingExtraCost(state),
});

const actionCreators = { addToCart: addToCartAction };
const mapDispatchToProps = (dispatch: Dispatch) => bindActionCreators(actionCreators, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(CustomizationSection);
