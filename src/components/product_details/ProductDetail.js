import React from 'react';
import { connect } from 'react-redux';
import { Row, Col } from 'react-bootstrap';
import CustomizationSection from './CustomizationSection';

function ProductDetail({ product }) {
  const { images } = product;
  // TODO move to selectors
  const thumbnails = images.filter((img) => !img.isDefault);
  const defaultImg = images.find((img) => img.isDefault);
  return (
    <Row className="c-body">
      <Col xs={12} md={2} className="d-none d-sm-block">
        {thumbnails.map((t) => (
          <img
            key={t.name}
            className="c-thumbnail m-b-sm"
            alt={t.name}
            src={t.url}
          />
        ))}
      </Col>
      <Col xs={12} md={5} className="p-l-xs p-r-xs">
        <img
          className="c-thumbnail"
          alt={defaultImg.name}
          src={defaultImg.url}
        />
      </Col>

      <Col xs={12} md={5} className="c-no-padding">
        <CustomizationSection
          availableSizes={product.availableSizes}
          defaultPrice={product.defaultPrice}
          id={product.id}
          name={product.name}
          isCustomizable={product.isCustomizable}
        />
      </Col>
    </Row>
  );
}

const mapStateToProps = (state, props) => ({
  product: state.products.find((p) => p.id === props.match.params.id),
});

export default connect(mapStateToProps, null)(ProductDetail);
