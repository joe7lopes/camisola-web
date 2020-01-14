import React from 'react';
import { useHistory } from 'react-router-dom';
import {
  Card, Button, Row, Col,
} from 'react-bootstrap';

function ProductCard({
  id, title, price, image,
}) {
  const history = useHistory();

  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={image} />

        <Card.Title>{title}</Card.Title>
        <Card.Body>
          <Row id="text">
            <Col>{price}$</Col>
            <Col>
              <Button
                variant="primary"
                block
                onClick={() => history.push(`/product/${id}`)}
              >
                Ver
              </Button>
            </Col>
          </Row>
        </Card.Body>
    </Card>
  );
}

ProductCard.defaultProps = {
  image:
    'https://camisola10.com/wp-content/uploads/2019/11/WhatsApp-Image-2019-11-30-at-17.10.27.jpeg',
  id: 123,
};

export default ProductCard;
