import React, { useState } from 'react';
import { Carousel, Image } from 'react-bootstrap';

const ProductImageCarousel = () => {
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(null);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
    setDirection(e.direction);
  };
  return (
    <Carousel touch activeIndex={index} direction={direction} onSelect={handleSelect}>
      <Carousel.Item>
        <Image
          src="https://camisola10.com/wp-content/uploads/2019/11/WhatsApp-Image-2019-11-30-at-17.10.27.jpeg"
          rounded
          style={{ width: '100%' }}
        />
      </Carousel.Item>
      <Carousel.Item>
        <Image
          src="https://camisola10.com/wp-content/uploads/2019/11/WhatsApp-Image-2019-11-30-at-17.10.27.jpeg"
          rounded
          style={{ width: '100%' }}
        />
      </Carousel.Item>
    </Carousel>
  );
};

export default ProductImageCarousel;
