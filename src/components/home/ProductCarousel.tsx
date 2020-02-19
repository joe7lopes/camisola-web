import React from 'react';
import { Row } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import { isFetchingProducts } from '../../store/selectors';
import ProductCard from '../ProductCard';
import { IProduct } from '../../types';

interface IProps {
    sectionName: string,
    products: IProduct[]
}

const ProductCarousel = ({ sectionName, products }: IProps) => {
    const isLoading = useSelector(isFetchingProducts)
    if (isLoading) return <div>loading...</div>
    if (!isLoading && products.length < 1) return <div>Nao ha produtos</div>
    return (
        <div>
            <div>
                <h3>{sectionName}</h3>
            </div>
            <div>
                <Row>
                    {products.map(p =>
                        <ProductCard
                            key={p.pid}
                            id={p.pid}
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