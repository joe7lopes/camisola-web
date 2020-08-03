import React from 'react';
import {Button, Row} from 'react-bootstrap';
import { useSelector } from 'react-redux';
import { isFetchingProducts } from '../../store/selectors';
import ProductCard from '../ProductCard';
import { IProduct } from '../../types';
import { getDefaultImage } from '../utils';

interface IProps {
    sectionName: string,
    products: IProduct[],
    onShowMore: () => void
}

const ProductCarousel = ({ sectionName, products, onShowMore }: IProps) => {
  const isLoading = useSelector(isFetchingProducts);
  if (isLoading) return <div>loading...</div>;
  if (!isLoading && products.length < 1) return <div>Nao ha produtos</div>;
  const numberOfProducts = window.innerWidth <= 576 ? 4 : 8;
  return (
        <div>
            <Row className="m-b-md m-t-md">
            <h3>{sectionName}</h3>
                <Button variant="link" onClick={onShowMore}>ver mais...</Button>
            </Row>
                <Row className="home_product_carousel_content">
                    {products.slice(0, numberOfProducts).map((p) => <ProductCard
                        key={p.id}
                        id={p.id}
                        name={p.name}
                        price={p.defaultPrice}
                        image={getDefaultImage(p.images) }
                        className="home_product_card"
                    />)}
                </Row>
        </div>
  );
};

export default ProductCarousel;
