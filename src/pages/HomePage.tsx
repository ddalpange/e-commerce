import React, { FC } from 'react';
import styled from 'styled-components';

import HeroBannerCarousel from '../components/HeroBannerCarousel';
import ProductCarousel from '../components/ProductCarousel';
import SectionForCarousel from '../components/SectionForCarousel';
import { MOCK_HERO_BANNERS, MOCK_PRODUCTS } from '../mocks';

const HomePage: FC = () => {
  return (
    <Container>
      <HeroBannerCarousel heroBanners={MOCK_HERO_BANNERS} />
      <InnerContainer>
        <SectionForCarousel title="Best 취미 박스">
          <ProductCarousel products={MOCK_PRODUCTS} />
        </SectionForCarousel>
      </InnerContainer>
    </Container>
  );
};

export default HomePage;

const Container = styled.div``;

const InnerContainer = styled.div`
  margin-left: 24px;
  margin-right: 24px;
  @media (min-width: 1024px) and (max-width: 1239px) {
    margin-left: 32px;
    margin-right: 32px;
  }
  @media (min-width: 1240px) {
    max-width: 1176px;
    width: 100%;
    margin-left: auto;
    margin-right: auto;
  }
`;
