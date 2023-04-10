import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AppWrapper } from './components/Context';
import Home from './pages/Home';
import Search from './pages/Search';
import Seller from './pages/Seller';
import About from './pages/About';
import PageNotFound from './pages/PageNotFound';

export default function App() {
  return (
    <AppWrapper>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/search" element={<Search />} />
          <Route path="/seller" element={<Seller />} />
          <Route path="/about" element={<About />} />
          <Route path="*" element={<PageNotFound />}/>
        </Routes>
      </Router>
    </AppWrapper>
  );
}