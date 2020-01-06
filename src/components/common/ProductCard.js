import React from "react";
import { useHistory } from "react-router-dom";
import { Card, Button, Row, Col } from "react-bootstrap";
import PropTypes from "prop-types";

function ProductCard({ id, title, price, image }) {
  const history = useHistory();

  return (
    <Card style={{ width: "18rem" }}>
      <Card.Img variant="top" src={image} />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>
          <Row>
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
        </Card.Text>
      </Card.Body>
    </Card>
  );
}

ProductCard.defaultProps = {
  image:
    "https://camisola10.com/wp-content/uploads/2019/11/WhatsApp-Image-2019-11-30-at-17.10.27.jpeg",
  id: 123
};

export default ProductCard;

ProductCard.propTypes = {
  title: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  image: PropTypes.string
};
