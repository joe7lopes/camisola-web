import React from 'react';
// import { useParams } from 'react-router-dom';
import { Row, Col } from 'react-bootstrap';
import CustomizationSection from './CustomizationSection';

function ProductDetail() {
  // const { id } = useParams();

  return (
    <Row >
      <Col xs={12} md={2} className="d-none d-sm-block">
        <img
          className="c-thumbnail m-b-sm"
          alt="img"
          src="https://camisola10.com/wp-content/uploads/2019/11/WhatsApp-Image-2019-11-30-at-17.10.27.jpeg"
        />
        <img
          className="c-thumbnail"
          alt="img"
          src="https://camisola10.com/wp-content/uploads/2019/11/WhatsApp-Image-2019-11-30-at-17.10.27.jpeg"
        />
      </Col>
      <Col xs={12} md={5}>
      <img
          className="c-thumbnail"
          alt="img"
          src="https://camisola10.com/wp-content/uploads/2019/11/WhatsApp-Image-2019-11-30-at-17.10.27.jpeg"
        />
      </Col>
      <Col xs={12} md={5}>
        <CustomizationSection />
      </Col>
    </Row>
  );
}

export default ProductDetail;
