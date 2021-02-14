import React from 'react';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { Row, Col } from 'react-bootstrap';
import {
  getBenficaProductsForHomePage,
  getPortoProductsForHomePage,
  getSportingProductsForHomePage,
} from '../../store/selectors';
import WhatsApp from './WhatsApp';
import ShippingMethodBanner from './ShippingMethodBanner';
import FacebookReviews from './facebook/FacebookReviews';
import Footer from '../Footer';
import ProductCarousel from './ProductCarousel';
import path from '../../routes/path';

const Home = () => {
  const history = useHistory();
  const benficaProducts = useSelector(getBenficaProductsForHomePage);
  const portoProducts = useSelector(getPortoProductsForHomePage);
  const sportingProducts = useSelector(getSportingProductsForHomePage);
  return (
    <div>
      <Row>
        <Col xs={12} md={9} className="c-container">
          {benficaProducts.length > 0 && <ProductCarousel sectionName="Benfica" products={benficaProducts} onShowMore={() => history.push(path.BENFICA)}/>}
          {portoProducts.length > 0 && <ProductCarousel sectionName="Porto" products={portoProducts} onShowMore={() => history.push(path.PORTO)}/>}
          {sportingProducts.length > 0 && <ProductCarousel sectionName="Sporting" products={sportingProducts} onShowMore={() => history.push(path.SPORTING)}/>}
        </Col>
        <Col xs={12} md={3} className="c-container">
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
