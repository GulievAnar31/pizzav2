import React from 'react';
import { Home } from './Pages/Home';
import './scss/app.scss';
import Loadable from 'react-loadable';
import { Routes, Route } from 'react-router-dom';
import { MainLayout } from './components/Layouts/MainLayout';

// Lazy рендерит только если нам нужно загрузить конкретный файл
const FullPizza = React.lazy(() => import(/* webpackChunkName: "FullPizza" */'./Pages/FullPizza'))
// const Cart = React.lazy(() => import(/*  webpackChunkName: "Cart" */'./Pages/Cart'));
const NotFound = React.lazy(() => import(/*  webpackChunkName: "NotFound" */'./Pages/NotFound'));

// Для SSR
const Cart = Loadable({
  loader: () => import('./Pages/Cart'),
  loading: 'Loading',
})

function App() {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/cart" element={
          <React.Suspense>
            <Cart />
          </React.Suspense>
        } />
        <Route path="*" element={<NotFound />} />
        <Route path="/pizza/:id" element={
          // React Suspence если FullPizza не подгрузилась, отображает то что в fallback
          <React.Suspense fallback={<div>Идёт загрузка ПИЦЫ</div>}>
            <FullPizza />
          </React.Suspense>
        } />
      </Route>
    </Routes>
  );
}

export default App;
