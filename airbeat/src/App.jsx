// src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Home from './pages/Home'; 
import BioPage from './pages/BioPage'; // Ensure correct import

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/bio" element={<BioPage />} /> 
        <Route path="*" element={<Navigate to="/" replace />} /> {/* Catch-all route */}
      </Routes>
    </Router>
  );
}

export default App;

