import React from 'react'
import { useSelector } from 'react-redux'
import { useAppDispatch } from '../../store/store';
import { changeCategories, selectorPizzas } from '../../store/slices/PizzaSlice';

const categories = [
  'Все', 'Мясные', 'Вегетарианская', 'Гриль', 'Острые', 'Закрытые'
]

export const Categories: React.FC = () => {
  const { categorie } = useSelector(selectorPizzas);
  const [activeIndex, setActiveIndex] = React.useState(categorie);
  const dispatch = useAppDispatch();

  const onClickCategory = (index: number): void => {
    setActiveIndex(index);
    dispatch(changeCategories(index));
  }

  return (
    <>
      <div className="categories">
        <ul>
          {
            categories.map((item, index) => {
              return <li key={index} onClick={() => {
                onClickCategory(index);
              }} className={activeIndex === index ? 'active' : ''}>{item}</li>
            })
          }
        </ul>
      </div>
    </>
  )
};
