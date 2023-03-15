import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { onClickCategory } from "../redux/slices/categorySlice";

function Categories() {
  const categoryId = useSelector((state) => state.category.categoryId);
  const categoryNames = useSelector((state) => state.category.categoryNames);
  const dispatch = useDispatch();

  return (
    <ul className="categories">
      {categoryNames.map((name, index) => (
        <li className="categories__item" key={index}>
          <a
            href="#"
            className={`categories__link button button_type_light ${
              categoryId === index ? "categories__link_active" : ""
            }`}
            onClick={() => dispatch(onClickCategory(index))}
          >
            {name}
          </a>
        </li>
      ))}
    </ul>
  );
}

export default Categories;
