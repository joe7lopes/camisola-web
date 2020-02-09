import React from 'react';
import { Row, Col } from 'react-bootstrap';
import WhatsApp from './WhatsApp';
import ShippingMethodBanner from './ShippingMethodBanner';
import FacebookReviews from './FacebookReviews';
import Footer from './Footer';

function Home() {
  return (
    <div>
      <Row>
        <Col className="c-container">
          <div>something</div>
        </Col>
        <Col md={3} className="c-container">
          <WhatsApp className="m-b-sm"/>
          <ShippingMethodBanner />
          <FacebookReviews />
        </Col>
      </Row>
      <Footer />
    </div>
  );
}

export default Home;
