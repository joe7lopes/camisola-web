import React from 'react';
import { Row } from 'react-bootstrap';
import ProductCard from './ProductCard';
import { IProduct } from '../types';
import { getDefaultImage } from './utils';

interface IProps {
    title: string,
    products: IProduct[]
}

const ProductList = ({ title, products }: IProps) => (
    <div className="m-t-md m-b-md">
        <h3>{title}</h3>
        <Row>
            {products.map((p) => (
                <ProductCard
                    key={p.id}
                    id={p.id}
                    name={p.name}
                    price={p.defaultPrice}
                    image={getDefaultImage(p.images)}
                    preBooking={p.preBooking}
                />
            ))}
        </Row>
    </div>
);

export default ProductList;
