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
            <Col xs={12} sm={2} md={2} className="d-none d-sm-block c-thumbnails-container c-no-padding">
                <div className="m-r-xs" style={{ maxHeight: '28rem', overflowY: 'scroll' }}>
                    {images.map((img, i) => (
                        <div key={img.id} style={{ height: '14rem', textAlign: 'center'}} className="bg-white">
                            <img className="m-b-xs"
                                 alt=""
                                 style={{ maxHeight: '100%', maxWidth: '100%' }}
                                 src={img.url}
                                 onClick={() => setIndex(i)}
                            />
                        </div>
                    ))}
                </div>
            </Col>
            <Col xs={12} sm={5} md={5} className="c-no-padding bg-white">
                <Carousel activeIndex={index} onSelect={(i: number) => setIndex(i)}>
                    {images.map((img, i) => (
                        <Carousel.Item key={i} style={{ height: '28rem', textAlign: 'center' }}>
                            <img style={{ maxHeight: '100%', maxWidth: '100%' }}
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
