import React, { useState } from 'react';
import { connect } from 'react-redux';
import { Row, Col, Carousel } from 'react-bootstrap';
import CustomizationSection from './CustomizationSection';
import { IProduct, IRootState } from '../../types';

interface IProps {
    product: IProduct
}

const ProductDetail = ({ product }: IProps) => {
  const [index, setIndex] = useState(0);
  const { images } = product;
  return (
    <>
        <Row className="m-b-md">
          <Col xs={12} sm={2} md={2} className="d-none d-sm-block c-thumbnails-container">
              {images.map((img, i) => (
                  <img
                      key={img.name}
                      className="c-thumbnail--small m-b-sm"
                      alt={img.name}
                      src={img.url}
                      onClick={() => setIndex(i)}
                  />
              ))}
          </Col>
          <Col xs={12} sm={5} md={5} className="p-l-xs p-r-xs">
            <Carousel activeIndex={index} onSelect={(i: number) => setIndex(i)}>
                {images.map((img, i) => (
                    <Carousel.Item key={i}>
                        <img
                            className="c-thumbnail--big"
                            alt={img.name}
                            src={img.url}
                        />
                    </Carousel.Item>
                ))}
            </Carousel>
          </Col>

          <Col xs={12} sm={5} md={5} className="c-no-padding">
            <CustomizationSection product={product}/>
          </Col>
        </Row>

            <Row>
                <div className="c-product-additional-notes-container">
                    <div>Tempo de entrega Continente 2 a 3 dias úteis</div>
                    <div>Ilhas: 4 a 5 dias úteis.</div>
                    <div>Para dúvidas ou envios para o estrangeiro por favor contactar</div>
                    <div>whatsApp + 351 919 255 684</div>
                </div>
            </Row>
    </>
  );
};

const mapStateToProps = (state: IRootState, props: any) => ({
  product: state.products.find((p) => p.id === props.match.params.id),
});


export default connect(mapStateToProps, null)(ProductDetail);
