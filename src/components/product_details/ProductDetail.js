import React from 'react';
import { connect } from 'react-redux';
import { Row, Col } from 'react-bootstrap';
import CustomizationSection from './CustomizationSection';

function ProductDetail({ product }) {
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

const mapStateToProps = (state) => ({
  product: { name: 'silly' },
});

export default connect(mapStateToProps, null)(ProductDetail);
