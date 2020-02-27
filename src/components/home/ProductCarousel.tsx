import React from 'react';
import { Row } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import { isFetchingProducts } from '../../store/selectors';
import ProductCard from '../ProductCard';
import { IImage, IProduct } from '../../types';

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
                        key={p.pid}
                        id={p.pid}
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

const getDefaultImage = (images: IImage[]) => {
  const image = images.filter((img) => img.isDefault);
  return image[0] ? image[0].file : undefined;
};
