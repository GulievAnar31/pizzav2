import React from 'react'
import { context } from '../../Pages/Home';
import { useSelector, useDispatch } from 'react-redux'
import { changeCategories } from '../../store/reducers/categoriesReducer';

const categories = [
  'Все', 'Мясные', 'Вегетарианская', 'Гриль', 'Острые', 'Закрытые'
]

export default function Categories() {
  const currentCategorie = useSelector((state) => state.categories);
  const [activeIndex, setActiveIndex] = React.useState(currentCategorie.categorie);
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
