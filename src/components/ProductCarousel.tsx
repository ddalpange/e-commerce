import { Carousel, CarouselNavigationPosition, Slide } from '@class101/ui';
import React from 'react';

import { IProduct } from '../interaces/IProduct';
import ProductCard from './ProductCard';

interface Props {
  products: IProduct[];
  className?: string;
}

const ProductCarousel: React.FC<Props> = ({ products, className }) => {
  return (
    <Carousel
      className={className}
      smSlidesPerView={2}
      lgSlidesPerView={4}
      swiperProps={{ freeMode: false }}
      navigationPosition={CarouselNavigationPosition.TopRightOut}
      navigation
      pagination
    >
      {products.map((product, i) => (
        <Slide key={i}>
          <ProductCard product={product} />
        </Slide>
      ))}
    </Carousel>
  );
};

export default ProductCarousel;
