import React from 'react'
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useAppDispatch } from '../store/store';
import { addAllPizzas, removeAllPizzas } from '../store/slices/BasketSlice';
import { deleteInfo } from '../store/slices/BasketInfoSlice';
import PizzaInBasket from '../components/PizzaInBasket/index';
import { IState } from '../interfaces/interfaces';

const Cart: React.FC = () => {
  const dispatch = useAppDispatch();
  const { basket, basketInfo } = useSelector(state => state as IState);
  const isFirstRender = React.useRef(true);

  const addBasketInfoInStore = React.useCallback(() => {
    const jsonBasket = JSON.stringify(basket);
    const jsonBasketInfo = JSON.stringify(basketInfo);
    const storagePizzas = JSON.parse(localStorage.getItem('pizzas'));

    if (storagePizzas.length > 0) {

    } else {

    }
  }, []);

  React.useEffect(() => {
    addBasketInfoInStore();
    console.log(basket, basketInfo);
  }, [basket, basketInfo]);

  return (
    <div className="cart">
      <div className="cart__top">
        <h2 className="content__title">Корзина</h2>
        <div className="cart__clear">
          <span onClick={() => {
            dispatch(removeAllPizzas())
            dispatch(deleteInfo());
          }}>Очистить корзину</span>
        </div>
      </div>
      <div style={{ display: 'block' }} className="content__items">
        {basket && basket.map((item, index) => {
          return <PizzaInBasket key={index} index={index} item={item} />
        })}
      </div>
      <div className="cart__bottom">
        <div className="cart__bottom-details">
          <span> Всего пицц: <b>{`${basketInfo.allPizzas} .шт`}</b> </span>
          <span> Сумма заказа: <b>{`${basketInfo.price} ₽`}</b> </span>
        </div>
        <div className="cart__bottom-buttons">
          <Link to="/" className="button button--outline button--add go-back-btn">
            <span>Вернуться назад</span>
          </Link>
          <div className="button pay-btn">
            <span>Оплатить сейчас</span>
          </div>
        </div>
      </div>
    </div>
  )
};

export default Cart;
