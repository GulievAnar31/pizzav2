import React from 'react';
import Categories from '../components/Categories';
import Sort from '../components/Sort';
import MyLoader from '../components/Loader';
import PizzaBlock from '../components/PizzaBlock'
import { getPizzas } from '../service/main.service';
import { SearchContext } from '../App';
import Pagination from '../components/Pagination';

export const context = React.createContext()

const Home = () => {
  const [Pizzas, setPizzas] = React.useState();
  const [isLoading, setIsLoading] = React.useState(false);
  const [category, setCategory] = React.useState(0);
  const [sort, setSort] = React.useState();
  const { searchValue } = React.useContext(SearchContext);
  const [ currentPage, setCurrentPage ] = React.useState(1);

  React.useEffect(() => {
    getPizzas(setPizzas, setIsLoading, 1);
    window.scrollTo(0, 0);
  }, []);

  React.useEffect(() => {
    getPizzas(setPizzas, setIsLoading, currentPage, category, sort, searchValue);
  }, [currentPage, category, sort, searchValue]);

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
  <Pagination items={2} setCurrentPage={setCurrentPage}  currentPage={currentPage}/>
</>
}

export default Home;