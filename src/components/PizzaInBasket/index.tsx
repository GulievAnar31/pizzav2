import React from 'react';
import styles from './style.module.scss';
import { useSelector, useDispatch } from 'react-redux';
import { deletePizza } from '../../store/slices/BasketSlice';
import { decreasePrice, decreaseCount } from '../../store/slices/BasketInfoSlice';

type PizzaInBasketProps = {
  item: {
    img: string;
    name: string;
    price: number;
  },
  index: number;
}

type IState = {
  basket: PizzaItemType[];
}

type PizzaItemType = {
  id: string;
  name: string;
  price: number;
  type: number;
  size: number;
  img: string;
}

const PizzaInBasket: React.FC<PizzaInBasketProps> = ({ item, index }) => {
  const dispatch = useDispatch();
  const { basket } = useSelector(state => state as IState);

  console.log(basket);

  const deletePizzaId = (id, price) => {
    const newPizzasArr = basket.filter((item) => item !== basket[id]);
    dispatch(deletePizza(newPizzasArr));
    dispatch(decreasePrice(price));
    dispatch(decreaseCount(1));
  };

  return <>
    <div className={styles.block} key={index}>
      <img className={styles.block_img} src={item.img} alt="" />
      <span className={styles.block_txt}>{item.name}</span>
      <button className={styles.block_btnDelete} onClick={() => deletePizzaId(index, item.price)}>Х</button>
    </div>
    <hr />
  </>
}

export default PizzaInBasket;