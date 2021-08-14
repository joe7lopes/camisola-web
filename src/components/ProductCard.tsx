import React from 'react';
import { Link } from 'react-router-dom';
import { Card } from 'react-bootstrap';
import {Chip} from "@material-ui/core";

interface IProps {
    id: string,
    name: string,
    price: number,
    image?: string,
    preBooking: boolean
}

const ProductCard = ({
  id, name, price, image, preBooking
}: IProps) => (
      <Link className="text-body"
          to={`/products/${id}`}>
        <Card className="product_card">
            <div className="product_card_imageContainer">
                <img src={image} alt={name}/>
            </div>
            {preBooking && <Chip color="secondary" label="Pré-reserva"/>}
            <Card.Body className="product_card body">
                <div className="c10-product_card_title">{name}</div>
                <h5>€{price}</h5>
            </Card.Body>
        </Card>
      </Link>
);

export default ProductCard;
