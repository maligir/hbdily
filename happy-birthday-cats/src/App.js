import React from 'react';
import { Routes, Route } from 'react-router-dom';
import HomePage from './components/HomePage';
import GalleryPage from './components/GalleryPage';
import AIChatPage from './components/ChatPage';
import CakePage from './components/CakePage';

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/gallery" element={<GalleryPage />} />
      <Route path="/chat" element={<AIChatPage />} />
      <Route path="/cake" element={<CakePage />} />
    </Routes>
  );
}

export default App;
