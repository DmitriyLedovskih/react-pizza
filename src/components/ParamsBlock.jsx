import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  selectItemsData,
  setActiveSize,
  setActiveType,
} from "../redux/slices/itemsSlice";

function ParamsBlock({ params, className }) {
  const { typeNames, activeSize, activeType } = useSelector(selectItemsData);
  const dispatch = useDispatch();

  return (
    <div className={`card__block ${className}`}>
      <ul className="card__block-list">
        {params.types.map((typeId, index) => (
          <li className="card__block-item" key={index}>
            <button
              className={`card__block-button button ${
                activeType === typeId ? "card__block-button_active" : ""
              }`}
              type="button"
              onClick={() => dispatch(setActiveType(typeId))}
            >
              {typeNames[typeId]}
            </button>
          </li>
        ))}
      </ul>
      <ul className="card__block-list">
        {params.sizes.map((size, index) => (
          <li className="card__block-item" key={index}>
            <button
              className={`card__block-button button ${
                activeSize === index ? "card__block-button_active" : ""
              }`}
              type="button"
              onClick={() => dispatch(setActiveSize(index))}
            >
              {size} см.
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ParamsBlock;
