import React from 'react';
import {
  Button, Col, Figure, Row,
} from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { Chip } from '@material-ui/core';
import { removeCartItem } from '../../actions';
import { ICartItem } from '../../types';
import { getStampingExtraCost } from '../../store/selectors';
import { getDefaultImage } from '../utils';

interface IProps {
    readOnly: boolean,
    item: ICartItem,
}

const CartItem = ({ readOnly = false, item }: IProps) => {
  const dispatch = useDispatch();
  const stampingCost = useSelector(getStampingExtraCost);
  const hasExtras = item.stampingName || item.stampingNumber;

  const renderBadges = () => {
    if (!item.badges || item.badges.length <= 0) return null;
    return <div> Badges:
            {item.badges.map((badge) => (
                <Chip key={badge.id}
                      style={{ marginLeft: '4px' }}
                      size="small" label={badge.name}/>))}
        </div>;
  };

  return (
        <Row className="m-b-md">
            <Col xs md="auto">
                <Figure>
                    <Figure.Image
                        width={171}
                        height={180}
                        src={getDefaultImage(item.product.images)}
                    />
                </Figure>
            </Col>
            <Col xs>
                <div className="m-l-md">
                    <div className="m-b-sm c-text-bold">{item.product.name}</div>
                    <div>Preço {item.size.price}€</div>
                    <div className="m-b-sm">Tamanho: <span className="m-b-sm c-text-bold">{item.size.size}</span></div>
                    {renderBadges()}
                    {hasExtras && <div className="text-muted">Estampagem + {stampingCost} euros</div>}
                    {item.stampingName && <div>Nome: <span className="c-text-bold">{item.stampingName}</span></div>}
                    {item.stampingNumber
                    && <div>Número: <span className="c-text-bold">{item.stampingNumber}</span></div>}

                </div>
            </Col>
            {!readOnly && <Col xs={2} md="auto">
                <Button variant="danger" onClick={() => dispatch(removeCartItem(item))}>X</Button>
            </Col>}
        </Row>
  );
};

export default CartItem;
