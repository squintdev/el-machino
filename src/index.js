import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Nav from './components/Nav';
import Parametric from './components/Parametric';
import Home from './components/Home';
import Fractal from './components/Fractal';
import Motion from './components/Motion';

ReactDOM.render(
  <Router>
    <Nav />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/parametric" element={<Parametric />} />
      <Route path="/fractal" element={<Fractal />} />
      <Route path="/motion" element={<Motion />} />
    </Routes>
  </Router>,
  document.getElementById('root')
);