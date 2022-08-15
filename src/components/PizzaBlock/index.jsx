import React from 'react';
import { useSelector } from 'react-redux/es/hooks/useSelector';
import { useDispatch } from 'react-redux/es/hooks/useDispatch';
import { addPizza } from '../../store/slices/BasketSlice';
import { changePrice, changeAllPizzas } from '../../store/slices/BasketInfoSlice';

const typeNames = ['тонкое', 'традиционное'];

const PizzaBlock = ({title, price, imageUrl, id, sizes, types}) => {
  const { basket } = useSelector(state => state);
  const [pizzaCount, setPizzaCount] = React.useState(0);
  const [typeActive, setTypeActive] = React.useState();
  const [sizeActive, setSizeActive] = React.useState();
  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(changeAllPizzas(basket.length));
  }, [basket]);

  function addNewPizza() {
    setPizzaCount(1 + pizzaCount);
    dispatch(addPizza({id: id, name: title, price: price}))
    dispatch(changePrice(price));
  }

  return <div className='pizza-block-wrapper'>
  <div key={id} className="pizza-block">
  <img
    className="pizza-block__image"
    src={imageUrl}
    alt="Pizza"
  />
  <h4 className="pizza-block__title">{title}</h4>
  <div className="pizza-block__selector">
    <ul>
      {types.map((item, index) => {
        return <li 
        onClick={() => setTypeActive(index)} 
        key={index}
        className={typeActive === index ? 'active' : ''}>
          {typeNames[item]}
        </li>
      })}
    </ul>
    <ul>
      {sizes.map((item, index) => {
        return <li 
        onClick={() => setSizeActive(index)}
        className={sizeActive === index ? 'active' : ''}
        key={index}>
          {item}
        </li>
      })}
    </ul>
  </div>
  <div className="pizza-block__bottom">
    <div className="pizza-block__price">от {price} ₽</div>
    <div onClick={addNewPizza} className="button button--outline button--add">
      <svg
        width="12"
        height="12"
        viewBox="0 0 12 12"
        fill="none"
        xmlns="http://www.w3.org/2000/svg">
        <path
          d="M10.8 4.8H7.2V1.2C7.2 0.5373 6.6627 0 6 0C5.3373 0 4.8 0.5373 4.8 1.2V4.8H1.2C0.5373 4.8 0 5.3373 0 6C0 6.6627 0.5373 7.2 1.2 7.2H4.8V10.8C4.8 11.4627 5.3373 12 6 12C6.6627 12 7.2 11.4627 7.2 10.8V7.2H10.8C11.4627 7.2 12 6.6627 12 6C12 5.3373 11.4627 4.8 10.8 4.8Z"
          fill="white"
        />
      </svg>
      <span>Добавить</span>
      <i>{pizzaCount}</i>
    </div>
  </div>
</div>
</div> 
};

export default PizzaBlock