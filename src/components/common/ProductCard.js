import React from "react";
import { Card, Button } from "react-bootstrap";
import PropTypes from "prop-types";

function ProductCard({ title, price, image }) {
  return (
    <Card style={{ width: "18rem" }}>
      <Card.Img variant="top" src={image} />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>
          {price}$<Button variant="primary">Ver</Button>
        </Card.Text>
      </Card.Body>
    </Card>
  );
}

ProductCard.defaultProps = {
  image:
    "https://camisola10.com/wp-content/uploads/2019/11/WhatsApp-Image-2019-11-30-at-17.10.27.jpeg"
};

export default ProductCard;

ProductCard.propTypes = {
  title: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  image: PropTypes.string
};
