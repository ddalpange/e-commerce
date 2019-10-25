import { BreakPoints, Carousel, CarouselNavigationPosition, Slide } from '@class101/ui';
import React from 'react';
import styled from 'styled-components';

import { IProduct } from '../interaces/IProduct';
import ProductCard from './ProductCard';

interface Props {
  products: IProduct[];
  className?: string;
}

const ProductCarousel: React.FC<Props> = ({ products, className }) => {
  return (
    <StyledCarousel
      className={className}
      smSlidesPerView={2}
      lgSlidesPerView={4}
      smSlidesSideOffset={24}
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
    </StyledCarousel>
  );
};

export default ProductCarousel;

const StyledCarousel = styled(Carousel)`
  ${BreakPoints.media.sm`
    margin-left: -24px;
    margin-right: -24px;
  `}
`;
