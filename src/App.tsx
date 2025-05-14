import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { ThemeProvider } from '@/components/theme-provider';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import HomePage from '@/pages/HomePage';
import LoginPage from '@/pages/LoginPage';
import SignupPage from '@/pages/SignupPage';
import SupportPage from '@/pages/SupportPage';
import FAQPage from '@/pages/FAQPage';
import DevResourcesPage from '@/pages/DevResourcesPage';
import ProductsPage from '@/pages/ProductsPage';
import EnterprisePage from '@/pages/EnterprisePage';
import DownloadPage from '@/pages/DownloadPage';
import './App.css';

// Scroll to hash component
const ScrollToHash = () => {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const element = document.querySelector(location.hash);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      window.scrollTo(0, 0);
    }
  }, [location]);

  return null;
};

function App() {
  return (
    <Router>
      <ThemeProvider defaultTheme="light">
        <div className="min-h-screen flex flex-col">
          <Header />
          <ScrollToHash />
          <main className="flex-1">
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/login" element={<LoginPage />} />
              <Route path="/signup" element={<SignupPage />} />
              <Route path="/support" element={<SupportPage />} />
              <Route path="/faq" element={<FAQPage />} />
              <Route path="/dev-resources" element={<DevResourcesPage />} />
              <Route path="/products" element={<ProductsPage />} />
              <Route path="/enterprise" element={<EnterprisePage />} />
              <Route path="/download" element={<DownloadPage />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </ThemeProvider>
    </Router>
  );
}