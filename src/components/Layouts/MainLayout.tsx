import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../Header';

const MainLayout: React.FC = () => {

  return <div className="App">
    <div className="wrapper">
      <Header />
      <div className="content">
        <div className="container">
          {/* Здесь находятся все дочерние компоненты */}
          <Outlet />
        </div>
      </div>
    </div>
  </div>
};

export default MainLayout;