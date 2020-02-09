import React from 'react';
import { useHistory } from 'react-router-dom';
import { Card } from 'react-bootstrap';

const ProductCard = ({
  id, name, price, image,
}) => {
  const history = useHistory();
  return (
    <Card
      style={{ width: '18rem', cursor: 'pointer' }}
      onClick={() => history.push(`/products/${id}`)}
    >
      <Card.Img variant="top" src={image} />
      <Card.Body>
        {name}
        <h5>€{price}</h5>
      </Card.Body>
    </Card>
  );
};

export default ProductCard;
