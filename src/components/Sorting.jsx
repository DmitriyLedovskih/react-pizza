import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { onClickSort, selectFilter } from "../redux/slices/filterSlice";

function Sorting() {
  const [isVisible, setIsVisible] = React.useState(false);
  const { sortingItem } = useSelector(selectFilter);
  const dispatch = useDispatch();
  const order = sortingItem.order.includes("asc") ? "desc" : "asc";
  const sortingItems = [
    { name: "популярности", sortProperty: "rating", order },
    { name: "цене", sortProperty: "price", order },
    { name: "алфавиту", sortProperty: "title", order },
  ];
  const sortingRef = React.useRef();

  function onClickSortingButton(item) {
    dispatch(onClickSort(item));
    setIsVisible(false);
  }

  function onClickOutside(evt) {
    if (evt.target !== sortingRef.current) {
      setIsVisible(false);
    }
  }

  React.useEffect(() => {
    document.addEventListener("click", onClickOutside);
    return () => {
      document.removeEventListener("click", onClickOutside);
    };
  }, []);

  return (
    <div className="sorting">
      <p
        className={`sorting__text ${
          sortingItem.order.includes("desc")
            ? "sorting__text_type_asc"
            : "sorting__text_type_desc"
        }`}
      >
        Сортировка по:
        <span
          className="sorting__text-link"
          onClick={() => setIsVisible(!isVisible)}
          ref={sortingRef}
        >
          {sortingItem.name}
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
                sortingItem.sortProperty === item.sortProperty
                  ? "sorting__list-button_active"
                  : ""
              }`}
              onClick={() => onClickSortingButton(item)}
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
