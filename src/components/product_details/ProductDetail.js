import React from 'react';
import { useParams } from 'react-router-dom';
import { Row, Col } from 'react-bootstrap';

function ProductDetail() {
  const { id } = useParams();

  return (
    <Row>
      <Col>thumbnails</Col>
      <Col>image full</Col>
      <Col>comprar</Col>
    </Row>
  );
}

export default ProductDetail;
