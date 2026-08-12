import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import PromptsPage from './pages/PromptsPage';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/prompts" element={<PromptsPage />} />
      </Routes>
    </BrowserRouter>
  );
}
