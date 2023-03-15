import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { onClickSort } from "../redux/slices/categorySlice";

function Sorting() {
  const [isVisible, setIsVisible] = React.useState(false);
  const sortItem = useSelector((state) => state.category.sortingItem);
  const dispatch = useDispatch();
  const order = sortItem.order.includes("asc") ? "desc" : "asc";

  const sortingItems = [
    { name: "популярности", sortProperty: "rating", order },
    { name: "цене", sortProperty: "price", order },
    { name: "алфавиту", sortProperty: "title", order },
  ];

  function onClickSortingButton(item) {
    dispatch(onClickSort(item));
    setIsVisible(false);
  }

  return (
    <div className="sorting">
      <p
        className={`sorting__text ${
          sortItem.order.includes("desc")
            ? "sorting__text_type_asc"
            : "sorting__text_type_desc"
        }`}
      >
        Сортировка по:
        <span
          className="sorting__text-link"
          onClick={() => setIsVisible(!isVisible)}
        >
          {sortItem.name}
        </span>
      </p>
      <ul
        className={`sorting__list ${isVisible ? "sorting__list_opened" : ""}`}
      >
        {sortingItems.map((item, index) => (
          <li className="sorting__list-item" key={index}>
            <button
              type="button"
              className={`sorting__list-button button ${
                sortItem.sortProperty === item.sortProperty
                  ? "sorting__list-button_active"
                  : ""
              }`}
              onClick={() => {
                onClickSortingButton(item);
              }}
            >
              {item.name}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Sorting;
