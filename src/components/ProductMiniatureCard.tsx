import React from 'react';
import { useHistory } from 'react-router-dom';
import { Card } from 'react-bootstrap';
import defaultshirt from '../assets/defaultshirt.png';

interface IProps {
  id: string,
  name: string,
  price: number,
  image?: string,
  className?: string
}

const ProductMiniatureCard = ({
  id, name, price, image = defaultshirt, className,
}: IProps) => {
  const history = useHistory();
  return (
    <Card
      className={className}
      style={{ width: '10rem', cursor: 'pointer' }}
      onClick={() => history.push(`/products/${id}`)}>
      <Card.Img variant="top" src={image} style={{ height: '6rem' }}/>
      <Card.Body>
        {name}
        <h5>€{price}</h5>
      </Card.Body>
    </Card>
  );
};

export default ProductMiniatureCard;
