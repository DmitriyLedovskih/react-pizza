import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  dicrementCount,
  incrementCount,
  removeItem,
  selectCartItemById,
} from "../redux/slices/cartSlice";
import { selectItemsData, setItem } from "../redux/slices/itemsSlice";
import { Link } from "react-router-dom";

type CartCardType = {
  id: string;
  images: string[];
  title: string;
  types: number[];
  sizes: number[];
  price: number;
  rating: number;
  info: string[];
  count: number;
  reviews: number;
};

const CartCard: React.FC<CartCardType> = ({
  id,
  images,
  title,
  types,
  sizes,
  price,
  rating,
  info,
  reviews,
}) => {
  const dispatch = useDispatch();
  const { typeNames, activeType, activeSize } = useSelector(selectItemsData);
  const counter = useSelector(selectCartItemById(id));
  const count: number = counter ? counter.count : 0;

  const cardItem: CartCardType = {
    id,
    images,
    title,
    types,
    sizes,
    price,
    rating,
    info,
    count,
    reviews,
  };

  const type = types[activeType];
  const size = sizes[activeSize];

  return (
    <article className="cart__card cart__row">
      <div className="cart__card-block cart__row">
        <img src={images[0]} alt={title} className="cart__card-image" />
        <div className="cart__card-content">
          <h2 className="cart__card-title">
            <Link
              to={`/pizza/${id}`}
              className="cart__card-link"
              onClick={() => dispatch(setItem(cardItem))}
            >
              {title}
            </Link>
          </h2>
          <p className="cart__card-subtitle">
            {typeNames[type]} тесто, {size} см.
          </p>
        </div>
      </div>
      <div className="cart__card-block">
        <h2 className="cart__card-title">Цена</h2>
        <p className="cart__card-price cart__card-subtitle">{price} ₽</p>
      </div>
      <div className="cart__card-block">
        <h2 className="cart__card-title">Количество</h2>
        <div className="cart__row">
          <button
            type="button"
            className={`cart__card-buttonCounter cart__card-button button button_type_primary-outlined ${
              count === 1 ? "button_disabled" : ""
            }`}
            onClick={() => dispatch(dicrementCount(id))}
            disabled={count === 1}
          >
            -
          </button>
          <span className="cart__card-count">{count}</span>
          <button
            type="button"
            className="cart__card-buttonCounter cart__card-button button button_type_primary-outlined"
            onClick={() => dispatch(incrementCount(id))}
          >
            +
          </button>
        </div>
      </div>
      <button
        type="button"
        className="button cart__card-button cart__card-buttonDelete"
        onClick={() => dispatch(removeItem(id))}
      ></button>
    </article>
  );
};

export default CartCard;
