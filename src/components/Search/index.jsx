import React from 'react'
import styles from './Search.module.scss'
import { SearchContext } from '../../App'

export default function Search() {
  const { searchValue, setSearchValue } = React.useContext(SearchContext);

  return (
    <div>
      <input
        value={searchValue}
        onChange={(e) => {
          setSearchValue(e.target.value)
        }} 
        className={styles.searchBtn} 
        type="text" 
        placeholder='Поиск пиццы' />
    </div>
  )
}
