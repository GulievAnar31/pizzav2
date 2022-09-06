import React from 'react'
import styles from './Search.module.scss'
import { useDispatch } from 'react-redux/es/exports';
import { changeSearch } from '../../store/slices/PizzaSlice';
import { debounce } from 'lodash';

export default function Search() {
  const dispatch = useDispatch();
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
}