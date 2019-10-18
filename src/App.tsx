import { GlobalStyle, ThemeMode } from '@class101/ui';
import React from 'react';
import styled, { ThemeProvider } from 'styled-components';

import HeroBannerCarousel from './components/HeroBannerCarousel';
import ProductCarousel from './components/ProductCarousel';
import SectionForCarousel from './components/SectionForCarousel';
import { MOCK_HERO_BANNERS, MOCK_PRODUCTS } from './mocks';

const App: React.FC = () => {
  return (
    <ThemeProvider theme={{ mode: ThemeMode.LIGHT }}>
      <Root>
        <GlobalStyle />
        <HeroBannerCarousel heroBanners={MOCK_HERO_BANNERS} />
        <Container>
          <SectionForCarousel title="Best 취미 박스">
            <ProductCarousel products={MOCK_PRODUCTS} />
          </SectionForCarousel>
        </Container>
      </Root>
    </ThemeProvider>
  );
};

export default App;

const Root = styled.div``;

const Container = styled.div`
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
