import React from 'react';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { Row, Col } from 'react-bootstrap';
import { getBenficaProducts, getPortoProducts, getSportingProducts } from '../../store/selectors';
import WhatsApp from './WhatsApp';
import ShippingMethodBanner from './ShippingMethodBanner';
import FacebookReviews from './FacebookReviews';
import Footer from '../Footer';
import ProductCarousel from './ProductCarousel';
import path from "../../routes/path";
// import ProductMiniatures from './ProductMiniatures';

const Home = () => {
  const history = useHistory();
  const benficaProducts = useSelector(getBenficaProducts);
  const portoProducts = useSelector(getPortoProducts);
  const sportingProducts = useSelector(getSportingProducts);
  return (
    <div>
      <Row>
        <Col xs={12} md={9} className="c-container">
          {benficaProducts.length > 0 && <ProductCarousel sectionName="Benfica" products={benficaProducts} onShowMore={() => history.push(path.BENFICA)}/>}
          {portoProducts.length > 0 && <ProductCarousel sectionName="Porto" products={portoProducts} onShowMore={() => history.push(path.PORTO)}/>}
          {sportingProducts.length > 0 && <ProductCarousel sectionName="Sporting" products={sportingProducts} onShowMore={() => history.push(path.SPORTING)}/>}
          {/*<h3 className="m-t-md">Todos os produtos</h3>*/}
          {/*<ProductMiniatures />*/}
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
