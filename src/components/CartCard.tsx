import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  dicrementCount,
  incrementCount,
  removeItem,
} from "../redux/slices/cartSlice";
import { selectItemsData } from "../redux/slices/itemsSlice";

type CartCardProps = {
  id: string;
  images: string[];
  title: string;
  type: number;
  size: number;
  price: number;
  count: number;
};

const CartCard: React.FC<CartCardProps> = ({
  id,
  images,
  title,
  type,
  size,
  price,
  count,
}) => {
  const dispatch = useDispatch();
  const { typeNames } = useSelector(selectItemsData);

  return (
    <article className="cart__card cart__row">
      <div className="cart__card-block cart__row">
        <img src={images[0]} alt={title} className="cart__card-image" />
        <div className="cart__card-content">
          <h2 className="cart__card-title">{title}</h2>
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
            className="cart__card-buttonCounter cart__card-button button button_type_primary-outlined"
            onClick={() => dispatch(dicrementCount(id))}
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
