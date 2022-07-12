import React from 'react'

const categories = [
  'Все', 'Мясные', 'Вегетарианская', 'Гриль', 'Острые', 'Закрытые'
]

export default function Categories() {
  const [activeIndex, setActiveIndex] = React.useState(5);

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
                    }} className={activeIndex === index ? 'active' : ''}>{item}</li>
                  })
                  }
                </ul>
              </div>
    </>
  )
}
