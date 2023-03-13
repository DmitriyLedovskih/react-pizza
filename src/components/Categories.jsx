import React from "react";

function Categories() {
  const categoryNames = ['Все', 'Мясные', 'Вегетарианская', 'Гриль', 'Острые', 'Закрытые'];

  const [categoryActive, setCategoryActive] = React.useState(0);

  return (
    <ul className="categories">
      {categoryNames.map((name, index) => (
      <li className="categories__item" key={index}>
        <a href="#" className={`categories__link button button_type_light ${categoryActive === index ? "categories__link_active" : ""}`} onClick={() => setCategoryActive(index)}>
          {name}
        </a>
      </li>
      ))}
    </ul>
  );
}

export default Categories;
