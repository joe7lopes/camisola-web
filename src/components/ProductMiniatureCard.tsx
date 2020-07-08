import React from 'react';
import { useHistory } from 'react-router-dom';
import { Card } from 'react-bootstrap';

interface IProps {
  name: string,
  price: number,
  image?: string,
  className?: string,
  destinationUrl?: string
}

const ProductMiniatureCard = ({
  name, price, image, className, destinationUrl,
}: IProps) => {
  const history = useHistory();
  return (
    <Card
      className={className}
      style={{ width: '10rem', cursor: 'pointer' }}
      onClick={() => (destinationUrl ? history.push(destinationUrl) : null)}>
      <Card.Img variant="top" src={image} style={{ height: '6rem' }}/>
      <Card.Body>
        {name}
        <h5>€{price}</h5>
      </Card.Body>
    </Card>
  );
};

export default ProductMiniatureCard;
