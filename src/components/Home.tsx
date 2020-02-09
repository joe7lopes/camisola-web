import React from 'react';
import { Row, Col } from 'react-bootstrap';
import ProductCard from './ProductCard';
import WhatsApp from './WhatsApp';
import ShippingMethodBanner from './ShippingMethodBanner';
import FacebookReviews from './FacebookReviews';
import Footer from './Footer';

function Home() {
  return (
    <div className="c-body">
      <Row>
        <Col className="c-container">
          <div>something</div>
        </Col>
        <Col xs={3} className="c-container">
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
