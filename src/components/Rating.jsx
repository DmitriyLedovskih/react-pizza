import React from "react";
import { ReactComponent as StarIcon } from "../assets/images/star_icon.svg";

function Rating() {
  const [rating, setRating] = React.useState(0);
  const [hover, setHover] = React.useState(0);
  const item = JSON.parse(localStorage.getItem("item"));
  return (
    <p className="rating">
      <div className="rating__icons">
        {[...new Array(5)].map((_, index) => (
          <StarIcon
            key={index}
            className={`rating__icon ${
              index < rating ? "rating__icon_active" : ""
            } ${index < hover ? " rating__icon_hover" : ""}`}
            onClick={() => setRating(index + 1)}
            onMouseEnter={() => setHover(index + 1)}
            onMouseLeave={() => setHover(0)}
          />
        ))}
      </div>
      {item.rating} отзывов
    </p>
  );
}

export default Rating;
