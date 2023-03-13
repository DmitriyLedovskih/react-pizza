import React from "react";

function Sorting() {
  return (
    <div className="sorting">
      <p className="sorting__text">
        Сортировка по:
        <span className="sorting__text-link">популярности</span>
      </p>
      <ul className="sorting__list">
        <li className="sorting__list-item">
          <button
            type="button"
            className="sorting__list-button button button_type_primary-opacity"
          >
            популярности
          </button>
        </li>
        <li className="sorting__list-item">
          <button type="button" className="sorting__list-button button">
            по цене
          </button>
        </li>
        <li className="sorting__list-item">
          <button type="button" className="sorting__list-button button">
            по алфавиту
          </button>
        </li>
      </ul>
    </div>
  );
}

export default Sorting;
