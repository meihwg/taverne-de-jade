import React from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom';

import Header from './components/header/header.tsx';
import Banner from './components/banner/banner.tsx';
import Footer from './components/footer/footer.tsx';
import { routes } from './routes.tsx';

function App() {
  return (
    <HashRouter>
      <Banner />
      <Header />
      <Routes>
        {routes.map((route) => (
          <Route key={route.path} path={route.path} element={route.element} />
        ))}
      </Routes>
      <Footer />
    </HashRouter>
  );
}

export default App;
