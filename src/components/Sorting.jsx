import React from "react";

function Sorting({ sortValue, onClickSortButton, a }) {
  const [isVisible, setIsVisible] = React.useState(false);
  const sortingItems = [
    { name: "популярности", sortProperty: "rating", order: "desc" },
    { name: "цене", sortProperty: "price", order: "desc" },
    { name: "алфавиту", sortProperty: "title", order: "desc" },
  ];

  function onClickSortingButton(index) {
    onClickSortButton(index);
    setIsVisible(false);
  }

  return (
    <div className="sorting">
      <p
        className={`sorting__text ${
          sortValue.order.includes("desc")
            ? "sorting__text_type_asc"
            : "sorting__text_type_desc"
        }`}
      >
        Сортировка по:
        <span
          className="sorting__text-link"
          onClick={() => setIsVisible(!isVisible)}
        >
          {sortValue.name}
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
                sortValue.sortProperty === item.sortProperty
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
