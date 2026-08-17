import React, { Suspense } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ROUTES } from './constants/routes';
import { Header } from './components/layout/Header';
import { Footer } from './components/layout/Footer';
import { ScrollToTop } from './components/layout/ScrollToTop';
import { MobileActionBar } from './components/layout/MobileActionBar';
import { HomePageIntro } from './components/ui/HomePageIntro';
import { SiteLoader } from './components/ui/SiteLoader'; // We'll use this as fallback

// Lazy loading pages with named export handling
const Home = React.lazy(() => import('./pages/Home').then(module => ({ default: module.Home })));
const Products = React.lazy(() => import('./pages/Products').then(module => ({ default: module.Products })));
const SystemWindows = React.lazy(() => import('./pages/SystemWindows').then(module => ({ default: module.SystemWindows })));
const Projects = React.lazy(() => import('./pages/Projects').then(module => ({ default: module.Projects })));
const About = React.lazy(() => import('./pages/About').then(module => ({ default: module.About })));
const Connect = React.lazy(() => import('./pages/Connect').then(module => ({ default: module.Connect })));
const AluminumSystem = React.lazy(() => import('./pages/AluminumSystem').then(module => ({ default: module.AluminumSystem })));
const Series25mm = React.lazy(() => import('./pages/Series25mm').then(module => ({ default: module.Series25mm })));
const Series29mm = React.lazy(() => import('./pages/Series29mm').then(module => ({ default: module.Series29mm })));
const Series36mm = React.lazy(() => import('./pages/Series36mm').then(module => ({ default: module.Series36mm })));
const SlidingFolding = React.lazy(() => import('./pages/SlidingFolding').then(module => ({ default: module.SlidingFolding })));
const CasementWindow = React.lazy(() => import('./pages/CasementWindow').then(module => ({ default: module.CasementWindow })));

export const AppRoutes = () => {
  return (
    <BrowserRouter>
      <HomePageIntro />
      <ScrollToTop />
      <Header />
      <Suspense fallback={<SiteLoader isVisible={true} />}>
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
          <Route path={ROUTES.SLIDING_FOLDING} element={<SlidingFolding />} />
          <Route path={ROUTES.CASEMENT_WINDOW} element={<CasementWindow />} />
        </Routes>
      </Suspense>
      <MobileActionBar />
      <Footer />
    </BrowserRouter>
  );
};
