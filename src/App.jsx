// App.jsx
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navigation from './components/Navigation';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import './App.scss'; // Убедитесь, что путь верный

const App = () => {
  return (
    <BrowserRouter>
      <div className="app-container">
        <Navigation />
        <div className="content">
          <Routes>
            <Route index element={<HomePage />} path="/" />
            <Route element={<AboutPage />} path="/about" />
            <Route element={<ContactPage />} path="/contact" />
            {/* Остальные маршруты */}
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;
