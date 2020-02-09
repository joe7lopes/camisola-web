import React from 'react';
import { useSelector } from 'react-redux';
import { Row, Col } from 'react-bootstrap';
import { getBenficaProducts, getPortoProducts, getHomePageProducts } from '../../store/selectors';
import WhatsApp from './WhatsApp';
import ShippingMethodBanner from './ShippingMethodBanner';
import FacebookReviews from './FacebookReviews';
import Footer from '../Footer';
import ProductCarousel from './ProductCarousel';

const Home = () => {

  const benficaProducts = useSelector(getBenficaProducts);
  const portoProducts = useSelector(getPortoProducts);

  return (
    <div>
      <Row>
        <Col className="c-container">
          <ProductCarousel sectionName="Benfica" products={benficaProducts}/>
          <ProductCarousel sectionName="Porto" products={portoProducts}/>
        </Col>
        <Col md={3} className="c-container">
          <WhatsApp className="m-b-sm" />
          <ShippingMethodBanner />
          <FacebookReviews />
        </Col>
      </Row>
      <Footer />
    </div>
  )
};


export default Home;
