import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import IndexPage from "./apps/index_app";

function App() {
  return (
    <Router>
      <Routes>
        <Route pate="/" element={<IndexPage />} />
        <Route />
        <Route />
        <Route />
        <Route />
      </Routes>
    </Router>
  );
}

export default App;
