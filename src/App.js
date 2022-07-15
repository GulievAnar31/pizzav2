import React from 'react';
import Categories from './components/Categories';
import Header from './components/Header';
import Sort from './components/Sort';
import PizzaBlock from './components/PizzaBlock';
import './scss/app.scss';
import { getPizzas } from './service/main.service';

function App() {
  const [Pizzas, setPizzas] = React.useState();

  React.useEffect(() => {
    getPizzas(setPizzas);
  }, []);

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
              {Pizzas &&
                Pizzas.map((item, index) => {
                  return <PizzaBlock key={index} {...item} />;
                })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
