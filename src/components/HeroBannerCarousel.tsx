import { ArrowNavigation, Carousel, CarouselNavigationPosition, Slide } from '@class101/ui';
import React from 'react';

import { IHeroBanner } from '../interaces/IHeroBanner';

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
      navigation
      pagination
    >
      {heroBanners.map((heroBanner, i) => (
        <Slide key={i}>
          <img src={heroBanner.imageUrl} alt={heroBanner.title} />
        </Slide>
      ))}
    </Carousel>
  );
};

export default HeroBannerCarousel;
