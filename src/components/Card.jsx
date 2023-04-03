import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, selectCartItemById } from "../redux/slices/cartSlice";

function Card({ id, title, price, imageUrl, sizes, types }) {
  const [activeType, setActiveType] = React.useState(0);
  const [activeSize, setActiveSize] = React.useState(0);
  const cartItem = useSelector(selectCartItemById(id));

  const count = cartItem && cartItem.count;

  const dispatch = useDispatch();

  const typeNames = ["тонкое", "традиционное"];

  function addCart() {
    dispatch(
      addToCart({
        id,
        title,
        price,
        imageUrl,
        size: sizes[activeSize],
        type: typeNames[activeType],
      })
    );
  }

  return (
    <article className="card">
      <img src={imageUrl} alt={title} className="card__image" />
      <h2 className="card__title">{title}</h2>
      <div className="card__block">
        <ul className="card__block-list">
          {types.map((typeId) => (
            <li className="card__block-item" key={typeId}>
              <button
                className={`card__block-button button ${
                  activeType === typeId ? "card__block-button_active" : ""
                }`}
                type="button"
                onClick={() => setActiveType(typeId)}
              >
                {typeNames[typeId]}
              </button>
            </li>
          ))}
        </ul>
        <ul className="card__block-list">
          {sizes.map((size, index) => (
            <li className="card__block-item" key={index}>
              <button
                className={`card__block-button button ${
                  activeSize === index ? "card__block-button_active" : ""
                }`}
                type="button"
                onClick={() => setActiveSize(index)}
              >
                {size} см.
              </button>
            </li>
          ))}
        </ul>
      </div>
      <div className="card__footer">
        <span className="card__price">от {price} ₽</span>
        <button
          className="card__button button button_type_primary-outlined"
          onClick={addCart}
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
