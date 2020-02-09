import React from 'react';
import { useSelector } from 'react-redux';
import { Row } from 'react-bootstrap';
import ProductCard from '../ProductCard';
import { IProduct } from '../../types';

interface IProps {
    sectionName: string,
    products: IProduct[]
}

const ProductCarousel = ({sectionName, products }: IProps) => {
    return (
        <div>
            <div>
                <h3>{sectionName}</h3>
            </div>
            <div>
                <Row>
                    {products.map(p =>
                        <ProductCard
                            key={p.id}
                            id={p.id}
                            name={p.name}
                            price={p.defaultPrice}
                            image={p.images[0] ? p.images[0].url : undefined}
                            className="m-l-sm"
                        />
                    )}
                </Row>
            </div>
        </div>
    )
}


export default ProductCarousel;