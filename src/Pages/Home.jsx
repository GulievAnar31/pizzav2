import React from 'react';
import Categories from '../components/Categories';
import Sort from '../components/Sort';
import MyLoader from '../components/Loader';
import PizzaBlock from '../components/PizzaBlock'
import { getPizzas } from '../service/main.service';
import Pagination from '../components/Pagination';
import { useSelector, useDispatch } from 'react-redux'

const Home = () => {
  const { categorie, sort, search } = useSelector((state) => state.pizza);
  const [Pizzas, setPizzas] = React.useState();
  const [isLoading, setIsLoading] = React.useState(false);
  const [ currentPage, setCurrentPage ] = React.useState(1);

  React.useEffect(() => {
    getPizzas(setPizzas, setIsLoading, 1);
    window.scrollTo(0, 0);
  }, []);

  React.useEffect(() => {
    getPizzas(setPizzas, setIsLoading, currentPage, categorie, sort, search);
  }, [currentPage, sort, search, categorie]);

  return <>
  <div className="content__top">
      <Categories />
      <Sort />
  </div>
  <h2 className="content__title">Все пиццы</h2>
  <div className="content__items">
    {!isLoading
      ? Pizzas && Pizzas?.map((item, index) => {
      return <PizzaBlock key={index} {...item} />;
    })
      : [...new Array(6)].fill(0).map((_, index) => <MyLoader key={index} />)}
  </div>
  <Pagination items={2} setCurrentPage={setCurrentPage}  currentPage={currentPage}/>
</>
}

export default Home;