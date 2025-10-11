// Built-in library.
import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Pages and components.
import IndexPage from "./apps/index_app";
import AboutUsPage from "./apps/aboutUs_app";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<IndexPage />} />
        <Route path="about_us" element={<AboutUsPage/>} />
        <Route />
        <Route />
        <Route />
      </Routes>
    </Router>
  );
}

export default App;
