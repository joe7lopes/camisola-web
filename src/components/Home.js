import React from 'react';
import { Row, Col } from 'react-bootstrap';
import ProductCard from './ProductCard';
import WhatsApp from './WhatsApp';
import ShippingMethodBanner from './ShippingMethodBanner';
import FacebookReviews from './FacebookReviews';
import Footer from './Footer';

function Home() {
  return (
    <div>
      <Row>
        <Col>
          <ProductCard />
        </Col>
        <Col xs={3}>
          <WhatsApp />
          <ShippingMethodBanner />
          <FacebookReviews />
        </Col>
      </Row>
      <Footer />
    </div>
  );
}

export default Home;
