import React from 'react'
import { Link } from 'react-router-dom';

export default function Cart() {
  return (
                <div className="cart">
            <div className="cart__top">
              <h2 className="content__title">Корзина</h2>
              <div className="cart__clear">
                <span>Очистить корзину</span>
              </div>
            </div>
            <div style={{display: 'block'}} className="content__items">
              <div>
                aaaa
              </div>
              <div>
                aaaa
              </div>
              <div>
                aaaa
              </div>
            </div>
            <div className="cart__bottom">
              <div className="cart__bottom-details">
                <span> Всего пицц: <b>3 шт.</b> </span>
                <span> Сумма заказа: <b>900 ₽</b> </span>
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
}
