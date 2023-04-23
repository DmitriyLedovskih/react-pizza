import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, selectCartItemById } from "../redux/slices/cartSlice";
import { Link } from "react-router-dom";
import { selectItemsData, setItem } from "../redux/slices/itemsSlice";
import ParamsBlock from "./ParamsBlock";
import { ReactComponent as StarIcon } from "../assets/images/star_icon.svg";

function Card({ id, title, price, images, sizes, types, rating, info }) {
  const counter = useSelector(selectCartItemById(id));
  const { activeSize, activeType } = useSelector(selectItemsData);

  const count = counter && counter.count;

  const dispatch = useDispatch();

  const cardItem = {
    id,
    title,
    price,
    images,
    sizes,
    types,
    rating,
    info,
  };

  const cartItem = {
    id,
    title,
    price,
    images,
    size: sizes[activeSize],
    type: types[activeType],
    rating,
    info,
  };

  return (
    <article className="card">
      <div className="card__rating">
        <StarIcon className="card__rating-icon" />
        <span className="card__rating-text">{rating}</span>
      </div>
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
      <ParamsBlock className="card__params-block" types={types} sizes={sizes} />
      <div className="card__footer">
        <span className="card__price">от {price} ₽</span>
        <button
          className="card__button button button_type_primary-outlined"
          onClick={() => dispatch(addToCart(cartItem))}
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
