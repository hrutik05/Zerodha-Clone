import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import HomePage from './Lang_page/Home/Homepage';
import Signup from './Lang_page/Signup/Signup';
import About from './Lang_page/About/Aboutpage';
import ProductPage from './Lang_page/Product/ProductPage';
import Pricing from './Lang_page/Pricing/Pricingpage';
import Support from './Lang_page/Support/SupportPage';
import Navbar from './Lang_page/Navbar';
import Footer from './Lang_page/Footer';
import NotFound from './Lang_page/notFound';
import { BrowserRouter , Route ,Routes } from 'react-router-dom';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
    <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/about" element={<About />} />
        <Route path="/Product" element={<ProductPage />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/support" element={<Support />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  </React.StrictMode>
);


