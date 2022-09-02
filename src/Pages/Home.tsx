import React from 'react';
import Categories from '../components/Categories';
import Sort from '../components/Sort';
import MyLoader from '../components/Loader';
import PizzaBlock from '../components/PizzaBlock'
import { addParamsInUrl } from '../lib/addParamsInUrl';
import { useSelector, useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { setFilters, fetchPizzas, selectorPizzas } from '../store/slices/PizzaSlice';
import qs from 'qs'

type IQueryObjType = {
  category: string;
  page: string;
  search: string;
  sortBy: string;
}

const Home: React.FC = () => {
  const { page, categorie, sort, search, pizzas, status } = useSelector(selectorPizzas);
  const [isLoading, setIsLoading] = React.useState(false);
  const isMounted = React.useRef(false);
  const isSearch = React.useRef(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  React.useEffect(() => {
    status === 'loaded' ? setIsLoading(false) : setIsLoading(true);
  }, [status]);

  React.useEffect(() => {
    if (window.location.search) {
      const queryObj = qs.parse(window.location.search.substring(1)) as IQueryObjType;
      console.log(queryObj);
      dispatch(setFilters(qs.parse(queryObj)));
      isSearch.current = true;
    }
    window.scrollTo(0, 0);
  }, []);

  React.useEffect(() => {
    addParamsInUrl(page, categorie, sort, search, isMounted, navigate, qs);
  }, [page, categorie, sort, search]);

  React.useEffect(() => {
    if (!isSearch.current) {
      // @ts-ignore
      dispatch(fetchPizzas({ page, categorie, sort, search } as ParamsType));
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
        ? pizzas && pizzas.map((item, index) => {
          return <PizzaBlock key={index} {...item} />;
        })
        : [...new Array(6)].fill(0).map((_, index) => <MyLoader key={index} />)}
    </div>
    {/* i dont need pagination */}
    {/* <Pagination items={2} setCurrentPage={setCurrentPage}  currentPage={currentPage}/> */}
  </>
}

export default Home;