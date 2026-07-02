import React from 'react';
import { AppRoutes } from './routes';
import { SiteLoader } from './components/ui/SiteLoader';

function App() {
  return (
    <>
      <SiteLoader />
      <AppRoutes />
    </>
  );
}

export default App;
