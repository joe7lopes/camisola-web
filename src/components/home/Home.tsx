import React from 'react';
import { useSelector } from 'react-redux';
import { Row, Col } from 'react-bootstrap';
import { getBenficaProducts, getPortoProducts, getSportingProducts } from '../../store/selectors';
import WhatsApp from './WhatsApp';
import ShippingMethodBanner from './ShippingMethodBanner';
import FacebookReviews from './FacebookReviews';
import Footer from '../Footer';
import ProductCarousel from './ProductCarousel';

const Home = () => {
  const benficaProducts = useSelector(getBenficaProducts);
  const portoProducts = useSelector(getPortoProducts);
  const sportingProducts = useSelector(getSportingProducts);
  return (
    <div>
      <Row>
        <Col className="c-container">
          {benficaProducts.length > 0 && <ProductCarousel sectionName="Benfica" products={benficaProducts}/>}
          {portoProducts.length > 0 && <ProductCarousel sectionName="Porto" products={portoProducts}/>}
          {sportingProducts.length > 0 && <ProductCarousel sectionName="Sporting" products={sportingProducts}/>}
        </Col>
        <Col md={3} className="c-container m-l-sm">
          <WhatsApp className="m-b-sm" />
          <ShippingMethodBanner />
          <FacebookReviews />
        </Col>
      </Row>
      <Footer />
    </div>
  );
};

export default Home;
