import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Greetings from './Greetings';

const App = () => (
  <section>
    <Routes>
      <Route path="/" element={<Greetings />} />
    </Routes>
  </section>
);

export default App;