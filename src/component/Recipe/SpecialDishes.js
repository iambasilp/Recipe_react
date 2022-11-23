import React from "react";
import "./SpecialDishes.css";
function SpecialDishes(props) {
  let maxSpecialDishes = 8;

  let specialMenus = props.specialMenu.map((menuItem, index) => {
    if (index < maxSpecialDishes) {
      return (
        <li key={index}>
          <img className="br-10" src={`${menuItem.strMealThumb}`} alt="" />
          <h4 className="text-center">{menuItem.strMeal}</h4>
        </li>
      );
    }
  });

  return (
    <div className="special-dishes section">
      <div className="container">
        <div className="special-dishes-content text-center">
          <h2>Special Dishes</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia
            tempora facilis officia beatae odio animi, quae neque amet harum
            delectus similique veniam alias voluptas omnis. delectus similique
            veniam alias voluptas omnis.
          </p>
        </div>
        <div className="special-dishes-list">
          <ul className="flex flex-wrap gap-30">{specialMenus}</ul>
        </div>
      </div>
    </div>
  );
}

export default SpecialDishes;
