import React from "react";

function Categories({ categoryId, onClickCategory }) {
  const categoryNames = [
    "Все",
    "Мясные",
    "Вегетарианская",
    "Гриль",
    "Острые",
    "Закрытые",
  ];

  return (
    <ul className="categories">
      {categoryNames.map((name, index) => (
        <li className="categories__item" key={index}>
          <a
            href="#"
            className={`categories__link button button_type_light ${
              categoryId === index ? "categories__link_active" : ""
            }`}
            onClick={() => onClickCategory(index)}
          >
            {name}
          </a>
        </li>
      ))}
    </ul>
  );
}

export default Categories;
