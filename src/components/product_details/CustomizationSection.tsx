import React, { useState, useEffect } from 'react';
import { Form, Button } from 'react-bootstrap';
import { bindActionCreators, Dispatch } from 'redux';
import { connect, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { Autocomplete } from '@material-ui/lab';
import { TextField } from '@material-ui/core';
import { getStampingExtraCost } from '../../store/selectors';
import { addToCart as addToCartAction } from '../../actions';
import Stamping from './Stamping';
import ProductSizeSelector from './ProductSizeSelector';
import {
  IProduct, ICartItem, IRootState, IProductSize, IBadge,
} from '../../types';
import path from '../../routes/path';
import { labels, sendButtonClickEvent } from '../../tracking/events';

interface IProps {
    product: IProduct,
    addToCart: (item: ICartItem) => void,
    extraCost: number
}

export function CustomizationSection({ product, addToCart, extraCost }: IProps) {
  const {
    sizes, defaultPrice, name, customizable,
  } = product;

  const stampingPrice = useSelector(getStampingExtraCost);
  const [price, setPrice] = useState(defaultPrice);
  const [selectedSize, setSelectedSize] = useState<IProductSize>(sizes[0]);
  const [selectedBadges, setSelectedBadges] = useState<IBadge[]>([]);
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
    sendButtonClickEvent(labels.ADD_TO_CART);

    const item: ICartItem = {
      product,
      stampingName,
      stampingNumber,
      size: selectedSize,
      badges: selectedBadges,
    };

    addToCart(item);

    history.push(path.CART);
  };
  return (
        <div className="c-customization-container">
            <h4>{name}</h4>
            <h4 className="m-t-md m-b-md" data-test="price">{`€ ${price}`}</h4>
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
                {product.badges && product.badges.length > 0
                && <div className="c-label">Badges na camisola <span className="m-b-sm c-text-sm">(opcional +0€)</span>
                    <div className="m-t-md">
                        <Autocomplete
                            size="small"
                            multiple
                            options={product.badges}
                            getOptionLabel={(badge) => badge.name}
                            onChange={(e, values) => setSelectedBadges(values)}
                            renderInput={(params) => (
                                <TextField {...params} variant="outlined"/>
                            )}
                        />
                    </div>
                </div>
                }
                {customizable && <div className="m-t-md">
                    <div className="c-label">Estampagem <span className="m-b-sm c-text-sm">(opcional +{stampingPrice}€)</span></div>
                    <Stamping
                        onNameChange={(e: any) => setStampingName(e.target.value)}
                        onNumberChange={(value) => setStampingNumber(value)}
                    />
                </div>
                }

                <Button
                    className="m-t-md"
                    type="submit"
                    disabled={addButtonDisabled}>
                    Adicionar ao carrinho
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
