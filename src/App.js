import React, { Children } from 'react';
import Header from './components/Header';
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
        <Route path="/" exact element={<Home />} />
        <Route path="/cart" exact element={<Cart />} />
        <Route path="*" exact element={<NotFound />} />
        <Route path="/pizza/:id" exact element={<FullPizza />} />
      </Route>
    </Routes>
  );
}

export default App;
