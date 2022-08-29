import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { changeCategories, selectorPizzas } from '../../store/slices/PizzaSlice';

const categories = [
  'Все', 'Мясные', 'Вегетарианская', 'Гриль', 'Острые', 'Закрытые'
]

export default function Categories() {
  const { categorie } = useSelector(selectorPizzas);
  const [activeIndex, setActiveIndex] = React.useState(categorie);
  const dispatch = useDispatch();

  const onClickCategory  = (index) => {
    setActiveIndex(index);
  }

  return (
    <>
              <div className="categories">
                <ul>
                  {
                  categories.map((item, index) => {
                    return <li key={index} onClick={() => {
                      onClickCategory(index);
                      dispatch(changeCategories(index));
                    }} className={activeIndex === index ? 'active' : ''}>{item}</li>
                  })
                  }
                </ul>
              </div>
    </>
  )
}
