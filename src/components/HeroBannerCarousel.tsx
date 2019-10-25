import { ArrowNavigation, Carousel, CarouselNavigationPosition, CarouselPaginationTheme, CoverRatio, Slide } from '@class101/ui';
import React from 'react';

import { IHeroBanner } from '../interaces/IHeroBanner';
import Img from './Img';

interface Props {
  heroBanners: IHeroBanner[];
  className?: string;
}

const HeroBannerCarousel: React.FC<Props> = ({ heroBanners, className }) => {
  return (
    <Carousel
      className={className}
      swiperProps={{ freeMode: false, navigationChildren: <ArrowNavigation /> }}
      navigationPosition={CarouselNavigationPosition.BottomRightIn}
      paginationTheme={CarouselPaginationTheme.Light}
      navigation
      pagination
    >
      {heroBanners.map((heroBanner, i) => (
        <Slide key={i}>
          <Img src={heroBanner.imageUrl} alt={heroBanner.title} ratio={CoverRatio.RATIO_4X3} />
        </Slide>
      ))}
    </Carousel>
  );
};

export default HeroBannerCarousel;
