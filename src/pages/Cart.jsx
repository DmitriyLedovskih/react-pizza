import React from "react";
import { Link } from "react-router-dom";
import img from "../assets/images/pizza-image.png";

function Cart() {
  return (
    <div className="cart">
      {/* <div className="cart__row cart__header">
        <h1 className="title cart__title">Корзина</h1>
        <button
          type="button"
          className="cart__button-clear button button_type_primary"
        >
          Очистить корзину
        </button>
      </div>
      <div className="cart__cards">
        <article className="cart__card cart__row">
          <div className="cart__card-block cart__row">
            <img src={img} alt="" className="cart__card-image" />
            <div className="cart__card-content">
              <h2 className="cart__card-title">Пицца</h2>
              <p className="cart__card-subtitle">тонкое тесто, 26 см.</p>
            </div>
          </div>
          <div className="cart__card-block">
            <h2 className="cart__card-title">Цена</h2>
            <p className="cart__card-price cart__card-subtitle">540 ₽</p>
          </div>
          <div className="cart__card-block">
            <h2 className="cart__card-title">Количество</h2>
            <div className="cart__row">
              <button
                type="button"
                className="cart__card-buttonCounter cart__card-button button button_type_primary"
              >
                -
              </button>
              <span className="cart__card-count">2</span>
              <button
                type="button"
                className="cart__card-buttonCounter cart__card-button button button_type_primary"
              >
                +
              </button>
            </div>
          </div>
          <button
            type="button"
            className="button cart__card-button cart__card-buttonDelete"
          ></button>
        </article>
      </div>
      <div className="cart__row cart__footer">
        <p className="cart__text">
          Всего пицц:
          <span className="cart__text-label">3 шт.</span>
        </p>
        <p className="cart__text">
          Сумма заказа:
          <span className="cart__text-label">900 ₽</span>
        </p>
      </div>
      <div className="cart__row cart__footer">
        <a href="#" className="button button_type_light cart__button">
          Вернуться назад
        </a>
        <a
          href="#"
          className="button button_type_primary-outlined cart__button"
        >
          Оплатить
        </a>
    </div>*/}
      <div className="cart__empty">
        <h1 className="title cart__empty-title">Корзина пуста ☹️</h1>
        <p className="cart__empty-descr">
          Вероятней всего, вы не заказывали ещё пиццу. Для того, чтобы заказать
          пиццу, перейди на главную страницу.
        </p>
        <Link to="/" className="cart__empty-button button button_type_primary">
          Вернуться назад
        </Link>
      </div>
    </div>
  );
}

export default Cart;
