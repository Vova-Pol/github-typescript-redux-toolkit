import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Favourites from './pages/Favourites';

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="/favourites" element={<Favourites />}></Route>
    </Routes>
  );
}
