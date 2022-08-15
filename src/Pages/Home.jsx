import React from 'react';
import Categories from '../components/Categories';
import Sort from '../components/Sort';
import MyLoader from '../components/Loader';
import PizzaBlock from '../components/PizzaBlock'
import { getPizzas } from '../service/main.service';
import { addParamsInUrl } from '../lib/addParamsInUrl.js';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { setFilters } from '../store/slices/PizzaSlice.js';
import qs  from 'qs'

const Home = () => {
  const { page, categorie, sort, search } = useSelector((state) => state.pizza);
  const [Pizzas, setPizzas] = React.useState();
  const [isLoading, setIsLoading] = React.useState(false);
  const isMounted = React.useRef(false);
  const isSearch = React.useRef(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  React.useEffect(() => {
    if(window.location.search){
      const queryObj = qs.parse(window.location.search.substring(1));
      dispatch(setFilters(qs.parse(queryObj)));
      isSearch.current = true;
    }
    window.scrollTo(0, 0);
  }, []);

  React.useEffect(() => {
    addParamsInUrl(page, categorie, sort, search, isMounted, navigate, qs);
  }, [page, categorie, sort, search]);

  React.useEffect(() => {
    if(!isSearch.current){
      getPizzas(setPizzas, setIsLoading, Number(page), Number(categorie), sort, search);
    }

    isSearch.current = false
  }, [page, categorie, sort, search]);

  return <>
  <div className="content__top">
      <Categories />
      <Sort />
  </div>
  <h2 className="content__title">Все пиццы</h2>
  <div className="content__items">
    {!isLoading
      ? Pizzas && Pizzas.map((item, index) => {
      return <PizzaBlock key={index} {...item} />;
    })
      : [...new Array(6)].fill(0).map((_, index) => <MyLoader key={index} />)}
  </div>
  {/* i dont need pagination */}
  {/* <Pagination items={2} setCurrentPage={setCurrentPage}  currentPage={currentPage}/> */}
</>
}

export default Home;