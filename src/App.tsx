import React from 'react';
import Home from './Pages/Home';
import Cart from './Pages/Cart';
import NotFound from './Pages/NotFound';
import FullPizza from './Pages/FullPizza';
import './scss/app.scss';
import { Routes, Route } from 'react-router-dom';
import MainLayout from './components/Layouts/MainLayout';

function App() {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="*" element={<NotFound />} />
        <Route path="/pizza/:id" element={<FullPizza />} />
      </Route>
    </Routes>
  );
}

export default App;