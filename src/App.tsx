import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { PageLayout } from './components/layout/PageLayout';
import { HomePage } from './pages/HomePage';
import { WorkPage } from './pages/WorkPage';
import { TravelCaseStudy } from './pages/TravelCaseStudy';
import { BakeryCaseStudy } from './pages/BakeryCaseStudy';
import { ServicesPage } from './pages/ServicesPage';
import { BeautifyAdminPage } from './pages/BeautifyAdminPage';
import { NotFoundPage } from './pages/NotFoundPage';

export const App: React.FC = () => {
  return (
    <BrowserRouter>
      <PageLayout>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/work" element={<WorkPage />} />
          <Route path="/work/travel" element={<TravelCaseStudy />} />
          <Route path="/work/bakery" element={<BakeryCaseStudy />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/beautify" element={<BeautifyAdminPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </PageLayout>
    </BrowserRouter>
  );
};

export default App;
