import React from "react";

function Card({ title, price, imageUrl, sizes, types }) {
  const [activeType, setActiveType] = React.useState(0);
  const [activeSize, setActiveSize] = React.useState(0);

  const typeNames = ['тонкое', 'традиционное'];

  return (
    <article className="card">
      <img
        src={imageUrl}
        alt={title}
        className="card__image"
      />
      <h2 className="card__title">{title}</h2>
      <div className="card__block">
        <ul className="card__block-list">
          {types.map(type => (
            <li className="card__block-item">
              <button
                className={`card__block-button button ${activeType === type ? 'card__block-button_active' : ''}`}
                type="button"
                onClick={() => setActiveType(type)}
              >
                {typeNames[type]}
              </button>
            </li>
          ))}
        </ul>
        <ul className="card__block-list">
          {sizes.map((size, index) => (
            <li className="card__block-item">
              <button
                className={`card__block-button button ${activeSize === index ? 'card__block-button_active' : ''}`}
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
        <button className="card__button button button_type_primary-outlined">
          <span className="card__button-icon">+</span>
          Добавить
          <span className="card__button-counter">0</span>
        </button>
      </div>
    </article>
  );
}

export default Card;
