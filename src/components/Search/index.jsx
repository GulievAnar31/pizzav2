import React from 'react'
import styles from './Search.module.scss'
import { searchContext } from '../../App'

export default function Search() {
  const { searchValue, setSearchValue } = React.useContext(searchContext);

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
