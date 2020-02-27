import React from 'react';
import { connect } from 'react-redux';
import { Row, Col } from 'react-bootstrap';
import CustomizationSection from './CustomizationSection';
import { IProduct, IRootState } from '../../types';

interface IProps {
  product: IProduct
}

const ProductDetail = ({ product }: IProps) => {
  const { images } = product;

  const thumbnails = images.filter((img) => !img.isDefault);
  const defaultImg = images.find((img) => img.isDefault) || { name: '', url: '', file: '' };
  return (
    <>
    <Row className="m-b-md">
      <Col xs={12} md={2} className="d-none d-sm-block">
        {thumbnails.map((t) => (
          <img
            key={t.name}
            className="c-thumbnail m-b-sm"
            alt={t.name}
            src={t.file}
          />
        ))}
      </Col>
      <Col xs={12} md={5} className="p-l-xs p-r-xs">
        <img
          className="c-thumbnail--big"
          alt={defaultImg.name}
          src={defaultImg.file}
        />
      </Col>

      <Col xs={12} md={5} className="c-no-padding">
        <CustomizationSection product={product} />
      </Col>
    </Row>
        <Row>
          <div className="c-product-additional-notes-container">
              <div>Tempo de entrega Continente 2 a 3 dias úteis</div>
              <div>Ilhas: 4 a 5 dias úteis.</div>
              <div>Para dúvidas ou envios para o estrangeiro por favor contactar </div>
               <div>whatsApp + 351 919 255 684</div>
          </div>
        </Row>
    </>
  );
};

const mapStateToProps = (state: IRootState, props: any) => ({
  product: state.products.find((p) => p.pid === props.match.params.id),
});


export default connect(mapStateToProps, null)(ProductDetail);
