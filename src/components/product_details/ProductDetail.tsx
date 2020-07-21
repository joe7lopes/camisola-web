import React from 'react';
import { connect } from 'react-redux';
import { Row, Col } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';
import CustomizationSection from './CustomizationSection';
import { IProduct, IRootState } from '../../types';
import Images from './Images';
import path from '../../routes/path';

interface IProps {
    product: IProduct
}

const ProductDetail = ({ product }: IProps) => {
  const history = useHistory();
  if (!product) {
    history.push(path.HOME);
    return null;
  }
  return (
    <>
            <Row className="m-b-md">
                {product.images && <Images images={product.images}/>}
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
