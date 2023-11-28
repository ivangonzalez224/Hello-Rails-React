import React from 'react';
import { Routes, Route, BrowserRouter as Router } from 'react-router-dom';
import Greet from './Greet';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Greet />} />
      </Routes>
    </Router>
  );
}

export default App;