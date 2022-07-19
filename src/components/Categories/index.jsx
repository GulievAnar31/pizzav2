import React from 'react'
import { context } from '../../Pages/Home';

const categories = [
  'Все', 'Мясные', 'Вегетарианская', 'Гриль', 'Острые', 'Закрытые'
]

export default function Categories() {
  const contextCategories = React.useContext(context);
  const [activeIndex, setActiveIndex] = React.useState(0);

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
                      contextCategories.setCategory(index);
                      onClickCategory(index);
                    }} className={activeIndex === index ? 'active' : ''}>{item}</li>
                  })
                  }
                </ul>
              </div>
    </>
  )
}
