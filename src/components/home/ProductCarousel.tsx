import React from 'react';
import { Button } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import { NavigateNext } from '@material-ui/icons';
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
  const numberOfProducts = window.innerWidth <= 576 ? 4 : 16;
  return (
        <div>
            <div className="m-b-md m-t-md c-flex">
                <h3>{sectionName}</h3>
                <Button variant="link" onClick={onShowMore}>ver mais...</Button>
            </div>
            <div className="carousel_container">
                {products.slice(0, numberOfProducts).map((p) => <ProductCard
                    key={p.id}
                    id={p.id}
                    name={p.name}
                    price={p.defaultPrice}
                    image={getDefaultImage(p.images)}
                />)}
            </div>
            <div style={{ textAlign: 'center', marginTop: '0.25rem' }}>
                <Button variant="link" block onClick={onShowMore}>
                    Ver todos os artigos do {sectionName}
                    <NavigateNext />
                </Button>
            </div>
        </div>
  );
};

export default ProductCarousel;
