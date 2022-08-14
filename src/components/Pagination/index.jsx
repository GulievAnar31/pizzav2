import React from 'react'
import styles from './Pagination.module.scss';

export default function Pagination({ items, setCurrentPage, currentPage }) {
  const [paginationState, setPaginationState] = React.useState();

  React.useEffect(() => {
    if(items){
      let itemsArr = [];

      for(let i = 0; i <= items; i++){
        itemsArr.push(i + 1);
      }
      if(itemsArr.length > items) setPaginationState({ items: itemsArr, currentItem: 0 });
    }
  }, [items]);

  return (
    <div>
      <ul className={styles.paginate}>
      {paginationState && paginationState.items.map((item, index) => {
          return <li key={item} className={currentPage && item === currentPage ? 'active' : ''} onClick={() => {
            setCurrentPage(Number(item));
          }}>{item}</li>
      })}
      </ul>
    </div>
  )
}