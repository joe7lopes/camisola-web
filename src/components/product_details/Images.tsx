import React, { useState } from 'react';
import { Carousel, Col } from 'react-bootstrap';
import { IImage } from '../../types';

interface IProps {
    images: IImage[]
}

const Images = ({ images }: IProps) => {
  const [index, setIndex] = useState(0);
  return (
    <>
            <Col xs={12} sm={2} md={2} className="d-none d-sm-block c-thumbnails-container">
                {images.map((img, i) => (
                    <img
                        key={img.name}
                        className="c-thumbnail--small m-b-sm"
                        alt={img.name}
                        src={img.url}
                        onClick={() => setIndex(i)}
                    />
                ))}
            </Col>
            <Col xs={12} sm={5} md={5} className="p-l-xs p-r-xs">
                <Carousel activeIndex={index} onSelect={(i: number) => setIndex(i)}>
                    {images.map((img, i) => (
                        <Carousel.Item key={i}>
                            <img
                                className="c-thumbnail--big"
                                alt={img.name}
                                src={img.url}
                            />
                        </Carousel.Item>
                    ))}
                </Carousel>
            </Col>

    </>
  );
};

export default Images;
