import React from 'react';

import { Categories, Sort, MyLoader, PizzaBlock } from '../components';

import { useSelector } from 'react-redux';
import { useAppDispatch } from '../store/store';
import { useNavigate } from 'react-router-dom';
import { fetchPizzas } from '../lib/asyncService';
import { setFilters, selectorPizzas } from '../store/slices/PizzaSlice';
import qs from 'qs'
import { IQueryObjType } from '../interfaces/interfaces';

export const Home: React.FC = () => {
  const { page, categorie, sort, search, pizzas, status } = useSelector(selectorPizzas);
  const [isLoading, setIsLoading] = React.useState(false);
  const isMounted = React.useRef(false);
  const isSearch = React.useRef(false);
  const isFirstReq = React.useRef(true)
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

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
    import('../lib/addParamsInUrl').then((addParamsInUrl) => {
      // @ts-ignore
      addParamsInUrl(page, categorie, sort, search, isMounted, navigate, qs);
    })
  }, [page, categorie, sort, search]);

  React.useEffect(() => {
    if (!isSearch.current) {
      // @ts-ignore
      dispatch(fetchPizzas({ page, categorie, sort, search, isFirstReq } as ParamsType));
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
};