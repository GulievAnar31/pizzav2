import React from 'react';
import Categories from '../components/Categories';
import Sort from '../components/Sort';
import MyLoader from '../components/Loader';
import PizzaBlock from '../components/PizzaBlock'
import { getPizzas } from '../service/main.service';

const Home = () => {
  const [Pizzas, setPizzas] = React.useState();
  const [isLoading, setIsLoading] = React.useState(false);

  React.useEffect(() => {
    getPizzas(setPizzas, setIsLoading);
    window.scrollTo(0, 0);
  }, []);

  return <>
    <div className="content__top">
  <Categories />
  <Sort />
</div>
<h2 className="content__title">Все пиццы</h2>
<div className="content__items">
  {!isLoading
    ? Pizzas?.map((item, index) => {
        return <PizzaBlock key={index} {...item} />;
      })
    : [...new Array(6)].fill(0).map((_, index) => <MyLoader key={index} />)}
</div>
  </>
}

export default Home;