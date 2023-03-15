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
          <button
            type="button"
            className={`categories__button button button_type_light ${
              categoryId === index ? "categories__button_active" : ""
            }`}
            onClick={() => dispatch(onClickCategory(index))}
          >
            {name}
          </button>
        </li>
      ))}
    </ul>
  );
}

export default Categories;
