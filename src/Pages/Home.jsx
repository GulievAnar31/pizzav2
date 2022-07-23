import React from 'react';
import Categories from '../components/Categories';
import Sort from '../components/Sort';
import MyLoader from '../components/Loader';
import PizzaBlock from '../components/PizzaBlock'
import { getPizzas, sortCategoryPizza, sortedPizza } from '../service/main.service';
import { searchContext } from '../App';
import Pagination from '../components/Pagination';

export const context = React.createContext()

const Home = () => {
  const [Pizzas, setPizzas] = React.useState();
  const [isLoading, setIsLoading] = React.useState(false);
  const [category, setCategory] = React.useState(0);
  const [sort, setSort] = React.useState();
  const { searchValue } = React.useContext(searchContext);
  const [ currentPage, setCurrentPage ] = React.useState(1);

  React.useEffect(() => {
    getPizzas(setPizzas, setIsLoading, 1);
    window.scrollTo(0, 0);
  }, []);

  React.useEffect(() => {
    getPizzas(setPizzas, setIsLoading, currentPage);
  }, [currentPage]);

  React.useEffect(() => {
    Pizzas && sortCategoryPizza(category, setPizzas, setIsLoading);
  }, [category]);

  React.useEffect(() => {
    Pizzas && sortedPizza(category, sort, setPizzas, searchValue, setIsLoading);
  }, [sort, searchValue])

  return <>
  <div className="content__top">
    <context.Provider value={{setSort, setCategory}}>
      <Categories />
      <Sort />
    </context.Provider>
  </div>
  <h2 className="content__title">Все пиццы</h2>
  <div className="content__items">
    {!isLoading
      ? Pizzas && Pizzas?.map((item, index) => {
      return <PizzaBlock key={index} {...item} />;
    })
      : [...new Array(6)].fill(0).map((_, index) => <MyLoader key={index} />)}
  </div>
  <Pagination items={3} setCurrentPage={setCurrentPage}  currentPage={currentPage}/>
</>
}

export default Home;