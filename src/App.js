import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import About from './Pages/About';
import Cv from './Pages/Cv';
import NotFound from './Pages/NotFound';
import Projects from './Pages/Projects';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' exact="true" element={<Cv/>} />
        <Route path='/Cv' exact="true" element={<Cv/>} />
        <Route path='/Projects' exact="true" element={<Projects/>} />
        <Route path='/About' exact="true" element={<About/>} />
        <Route path="*" element={<NotFound/>} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;