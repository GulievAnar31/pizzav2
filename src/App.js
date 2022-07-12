import React from 'react';
import Categories from './components/Categories';
import Header from './components/Header';
import Sort from './components/Sort';
import PizzaBlock from './components/PizzaBlock';
import './scss/app.scss';

const Pizzas = [
  { name: 'Чизбургер пицца', price: '400' },
  { name: 'Маргарита', price: '500' },
  { name: '4 сыра', price: '200' },
  { name: 'Пицца с ананасами', price: '345' },
];

function App() {
  return (
    <div className="App">
      <div className="wrapper">
        <Header />
        <div className="content">
          <div className="container">
            <div className="content__top">
              <Categories />
              <Sort />
            </div>
            <h2 className="content__title">Все пиццы</h2>
            <div className="content__items">
              {Pizzas.map((item) => {
                return <PizzaBlock name={item.name} price={item.price} />;
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
