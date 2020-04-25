import React from 'react';

import Routes from './routes';
import GlobalStyle from './styles/global';
import Header from './components/Header';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <Header />
      <Routes />
      <Footer />
      <GlobalStyle />
    </>
  );
}

export default App;
