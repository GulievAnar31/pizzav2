import React from 'react';
import Header from './components/Header';
import Home from './Pages/Home';
import Cart from './Pages/Cart';
import NotFound from './Pages/NotFound';
import './scss/app.scss';
import { Routes, Route } from 'react-router-dom';

export const searchContext = React.createContext();

function App() {
  const [searchValue, setSearchValue] = React.useState('');

  return (
    <div className="App">
      <searchContext.Provider value={{ searchValue, setSearchValue }}>
        <div className="wrapper">
          <Header />
          <div className="content">
            <div className="container">
              <Routes>
                <Route path="/" exact element={<Home />} />
                <Route path="/cart" exact element={<Cart />} />
                <Route path="*" exact element={<NotFound />} />
              </Routes>
            </div>
          </div>
        </div>
      </searchContext.Provider>
    </div>
  );
}

export default App;
