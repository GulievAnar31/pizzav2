import React from 'react';
import Categories from '../components/Categories';
import Sort from '../components/Sort';
import MyLoader from '../components/Loader';
import PizzaBlock from '../components/PizzaBlock'
import { getPizzas } from '../service/main.service';
import Pagination from '../components/Pagination';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { setFilters } from '../store/slices/PizzaSlice.js';
import qs  from 'qs'

const Home = () => {
  const { categorie, sort, search } = useSelector((state) => state.pizza);
  const [Pizzas, setPizzas] = React.useState();
  const [isLoading, setIsLoading] = React.useState(false);
  const [ currentPage, setCurrentPage ] = React.useState(1);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  React.useEffect(() => {
    if(window.location.search){
      const queryObj = qs.parse(window.location.search.substring(1))
      console.log(queryObj);
      dispatch(setFilters(qs.parse(queryObj)));
    }
    window.scrollTo(0, 0);
  }, [window.location.search]);

  React.useEffect(() => {
    getPizzas(setPizzas, setIsLoading, currentPage, categorie, sort, search);
  }, [currentPage, sort, search, categorie]);

  React.useEffect(() => {
    if(window){
      const queryObj = {
        page: currentPage,
        sortBy: sort,
        search: search,
        category: categorie
      };
      const queryStr = qs.stringify(queryObj);

      navigate(`?${queryStr}`);
    }
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