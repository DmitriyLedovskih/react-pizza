import React from "react";
import { useSelector } from "react-redux";
import { selectItemsData } from "../redux/slices/itemsSlice";

function Slider() {
  const { item } = useSelector(selectItemsData);
  const [mainImage, setMainImage] = React.useState(item.images[0]);
  const [imageActive, setImageActive] = React.useState(0);
  function onClickImage(evt, index) {
    setMainImage(evt.target.currentSrc);
    setImageActive(index);
  }

  return (
    <div className="slider">
      <img src={mainImage} alt={item.title} className="slider__image" />
      <ul className="slider__mini-list">
        {item.images.map((image, index) => (
          <li className="slider__mini-item" key={index}>
            <img
              src={image}
              alt=""
              className={`slider__mini-image ${
                imageActive === index ? "slider__mini-image_active" : ""
              }`}
              onClick={(evt) => onClickImage(evt, index)}
            />
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Slider;
