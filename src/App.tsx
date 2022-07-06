import { MainLayout } from './layouts/MainLayout';
import { Facts } from './pages/facts';
import { Routes, Route } from 'react-router-dom';
import { Fact } from './pages/fact';
import { HomePage } from './pages/home';

export const App = () => {
  return (
    <MainLayout>
      <Routes>
        <Route path="facts" element={<Facts />} />
        <Route path="fact" element={<Fact />} />
        <Route path="/" element={<HomePage />} />
      </Routes>
    </MainLayout>
  );
};
