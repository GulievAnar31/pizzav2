import React from 'react'
import styles from './Search.module.scss'
import { useAppDispatch } from '../../store/store';
import { changeSearch } from '../../store/slices/PizzaSlice';
import { debounce } from 'lodash';

export const Search: React.FC = () => {
  const dispatch = useAppDispatch();
  const inputRef = React.useRef<HTMLInputElement>(null);

  const fetchSearch = React.useCallback(
    debounce((e: React.ChangeEvent<HTMLInputElement>) => {
      dispatch(changeSearch(e.target.value));
    }, 1000), []);

  return (
    <div>
      <input
        ref={inputRef}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
          fetchSearch(e);
        }}
        className={styles.searchBtn}
        type="text"
        placeholder='Поиск пиццы' />
    </div>
  )
};