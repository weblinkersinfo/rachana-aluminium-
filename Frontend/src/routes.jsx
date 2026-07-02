import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ROUTES } from './constants/routes';
import { Header } from './components/layout/Header';
import { Footer } from './components/layout/Footer';
import { ScrollToTop } from './components/layout/ScrollToTop';
import { Home } from './pages/Home';
import { Products } from './pages/Products';
import { SystemWindows } from './pages/SystemWindows';
import { Projects } from './pages/Projects';
import { About } from './pages/About';

import { Connect } from './pages/Connect';
import { AluminumSystem } from './pages/AluminumSystem';
import { Series25mm } from './pages/Series25mm';
import { Series29mm } from './pages/Series29mm';
import { Series36mm } from './pages/Series36mm';

// Placeholder pages for routing
const Placeholder = ({ title }) => (
  <div className="section" style={{ minHeight: '60vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
    <h1 className="page-heading">{title} Page Coming Soon</h1>
  </div>
);

export const AppRoutes = () => {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Header />
      <Routes>
        <Route path={ROUTES.HOME} element={<Home />} />
        <Route path={ROUTES.PRODUCTS} element={<Products />} />
        <Route path={ROUTES.SYSTEM_WINDOWS} element={<SystemWindows />} />
        <Route path={ROUTES.ALUMINUM} element={<AluminumSystem />} />
        <Route path={ROUTES.SERIES_25MM} element={<Series25mm />} />
        <Route path={ROUTES.SERIES_29MM} element={<Series29mm />} />
        <Route path={ROUTES.SERIES_36MM} element={<Series36mm />} />
        <Route path={ROUTES.PROJECTS} element={<Projects />} />
        <Route path={ROUTES.ABOUT} element={<About />} />

        <Route path={ROUTES.CONNECT} element={<Connect />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};
