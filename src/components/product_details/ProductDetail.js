import React from 'react';
import { useParams } from 'react-router-dom';
import { Row, Col, Image } from 'react-bootstrap';
import CustomizationSection from './CustomizationSection';

function ProductDetail() {
  const { id } = useParams();

  return (
    <Row className="c-body">
      <Col xs={12} md={2}>
        <Image src="https://camisola10.com/wp-content/uploads/2019/11/WhatsApp-Image-2019-11-30-at-17.10.27.jpeg" thumbnail />
        <Image src="https://camisola10.com/wp-content/uploads/2019/11/WhatsApp-Image-2019-11-30-at-17.10.27.jpeg" thumbnail />
        </Col>
      <Col xs={12} md={5}>
      <Image src="https://camisola10.com/wp-content/uploads/2019/11/WhatsApp-Image-2019-11-30-at-17.10.27.jpeg"
       rounded
       style={{ width: '100%' }} />
        </Col>
      <Col xs={12} md={5}>
        <CustomizationSection />
      </Col>
    </Row>
  );
}

export default ProductDetail;
