import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, selectCartItemById } from "../redux/slices/cartSlice";
import { Link } from "react-router-dom";
import { setItem } from "../redux/slices/itemsSlice";
import ParamsBlock from "./ParamsBlock";

function Card({ id, title, price, images, sizes, types, rating, info }) {
  const cartItem = useSelector(selectCartItemById(id));

  const count = cartItem && cartItem.count;

  const dispatch = useDispatch();

  const cardItem = { id, title, price, images, sizes, types, rating, info };

  return (
    <article className="card">
      <img src={images[0]} alt={title} className="card__image" />
      <h2 className="card__title">
        <Link
          to={`/pizza/${id}`}
          className="card__link"
          onClick={() => dispatch(setItem(cardItem))}
        >
          {title}
        </Link>
      </h2>
      <ParamsBlock params={{ sizes, types }} className="card__params-block" />
      <div className="card__footer">
        <span className="card__price">от {price} ₽</span>
        <button
          className="card__button button button_type_primary-outlined"
          onClick={() => dispatch(addToCart(cardItem))}
        >
          <span className="card__button-icon">+</span>
          Добавить
          {count && <span className="card__button-counter">{count}</span>}
        </button>
      </div>
    </article>
  );
}

export default Card;
