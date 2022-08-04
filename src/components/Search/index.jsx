import React from 'react'
import styles from './Search.module.scss'
import { useDispatch } from 'react-redux/es/exports';
import { changeSearch } from '../../store/slices/PizzaSlice';

export default function Search() {
  const dispatch = useDispatch();

  return (
    <div>
      <input
        onChange={(e) => {
          dispatch(changeSearch(e.target.value));
        }} 
        className={styles.searchBtn} 
        type="text" 
        placeholder='Поиск пиццы' />
    </div>
  )
}