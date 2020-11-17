import React from 'react';
import { useHistory } from 'react-router-dom';
import { Card } from 'react-bootstrap';

interface IProps {
    id: string,
    name: string,
    price: number,
    image?: string,
}

const ProductCard = ({
  id, name, price, image,
}: IProps) => {
  const history = useHistory();
  return (
        <Card className="product_card"
              onClick={() => history.push(`/products/${id}`)}>
            <div className="product_card_imageContainer">
                <img src={image} alt={name}/>
            </div>
            <Card.Body className="product_card body">
                <div className="c10-product_card_title">{name}</div>
                <h5>€{price}</h5>
            </Card.Body>
        </Card>
  );
};

export default ProductCard;
