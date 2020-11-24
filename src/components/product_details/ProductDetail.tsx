import React from 'react';
import { useSelector } from 'react-redux';
import { Row, Col } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import CustomizationSection from './CustomizationSection';
import { IRootState } from '../../types';
import Images from './Images';

const ProductDetail = () => {
  const { id } = useParams();
  const product = useSelector((state:IRootState) => state.products.find((p) => p.id === id));
  if (!product) {
    return <div>loading...</div>;
  }

  return (
    <>
            <Row className="m-b-md">
                {product.images && <Images images={product.images}/>}
                <Col xs={12} sm={5} md={5} className="c-no-padding">
                    <CustomizationSection product={product}/>
                </Col>
            </Row>

            {product.description
            && <Row className="c-product-additional-notes-container">
                <div dangerouslySetInnerHTML={{ __html: product.description }}/>
            </Row>
            }
    </>
  );
};

export default ProductDetail;
