import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, selectCartItemById } from "../redux/slices/cartSlice";
import Slider from "../components/Slider";
import ParamsBlock from "../components/ParamsBlock";
import Rating from "../components/Rating";

function Pizza() {
  const item = JSON.parse(localStorage.getItem("item"));
  const cartItem = useSelector(selectCartItemById(item.id));

  const sizes = item.sizes;
  const types = item.types;

  const count = cartItem && cartItem.count;

  const dispatch = useDispatch();
  return (
    <div className="pizza-page">
      <div className="pizza-page__header">
        <h1 className="pizza-page__title">{item.title}</h1>
        <Rating />
      </div>
      <div className="pizza-page__row">
        <Slider />
        <div className="pizza-page__blocks">
          <div className="pizza-page__info">
            <h2 className="pizza-page__info-title">Ингредиенты:</h2>
            <ul className="pizza-page__info-list">
              {item.info.map((element, index) => (
                <li className="pizza-page__info-item" key={index}>
                  {element}
                </li>
              ))}
            </ul>
          </div>
          <div className="pizza-page__block">
            <span className="pizza-page__price">{item.price} ₽</span>
            <ParamsBlock
              params={{ sizes, types }}
              className="pizza-page__params-block"
            />
            <button
              className="pizza-page__button button button_type_primary"
              onClick={() => dispatch(addToCart(item))}
            >
              <span className="card__button-icon">+</span>
              Добавить в корзину
              {count && <span className="card__button-counter">{count}</span>}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Pizza;
