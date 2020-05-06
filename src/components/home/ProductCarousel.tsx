import React from 'react';
import { Row } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import { isFetchingProducts } from '../../store/selectors';
import ProductCard from '../ProductCard';
import { IProduct } from '../../types';
import { getDefaultImage } from '../utils';

interface IProps {
    sectionName: string,
    products: IProduct[]
}

const ProductCarousel = ({ sectionName, products }: IProps) => {
  const isLoading = useSelector(isFetchingProducts);
  if (isLoading) return <div>loading...</div>;
  if (!isLoading && products.length < 1) return <div>Nao ha produtos</div>;
  return (
        <div>
            <h3 className="m-b-md">{sectionName}</h3>
                <Row>
                    {products.map((p) => <ProductCard
                        key={p.id}
                        id={p.id}
                        name={p.name}
                        price={p.defaultPrice}
                        image={getDefaultImage(p.images) }
                        className="m-l-sm m-b-lg"
                    />)}
                </Row>
        </div>
  );
};

export default ProductCarousel;
