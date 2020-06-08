import React from "react";

function CardBox(props) {
  const food = props.food;
  return (
    <div className="card width m-4 position-relative">
      <img
        src={food.image}
        onClick={() => props.onClick(food.id)}
        height="100%"
        alt=""
        className="food-image"
      />
      <div className="text">{food.name}</div>
    </div>
  );
}

export default CardBox;
