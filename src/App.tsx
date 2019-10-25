import { GlobalStyle, ThemeMode } from '@class101/ui';
import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import styled, { ThemeProvider } from 'styled-components';

import Header from './components/Header';
import Routes from './routes';

const App: React.FC = () => {
  return (
    <ThemeProvider theme={{ mode: ThemeMode.LIGHT }}>
      <Root>
        <GlobalStyle />
        <Header />
        <Router>
          <Routes />
        </Router>
      </Root>
    </ThemeProvider>
  );
};

export default App;

const Root = styled.div``;
