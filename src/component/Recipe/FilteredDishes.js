import React, { useState } from "react";
import "./FilteredDishes.scss";

function FilteredDishes(props) {
  let { menuCategories, specialMenu } = props;
  let [allMenu, setAllMenu] = useState(specialMenu);
  console.log(allMenu);
  let [filteredDishes, setFilteredDishes] = useState([]);
  

  //show dishes on click
  function handleShowFilteredDishes(category) {
    // alert(`Please show dishes of ${category}`);
    let filteredDishesare = allMenu
      .filter((item) => {
        return item.strCategory === category
      })
      .map((item) => {
        return (
          <li>
            <img className="br-10" src={`${item.strMealThumb}`} alt="" />
            <h4 className="text-center">{item.strMeal}</h4>
          </li>
        );
      });
      setFilteredDishes(filteredDishesare)
  }
  // Lets show all the category
  let menuCategoriesData = menuCategories.map((item) => {
    return (
      <li
        onClick={() => {
          handleShowFilteredDishes(item.strCategory);
        }}
        key={item.strCategory}
      >
        {item.strCategory}
      </li>
    );
  });

  return (
    <div className="filtered-dishes-container section">
      <div className="container">
        <div className="text-center">
          <h2>Choose Your Dishes</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Et in
            laborum libero assumenda fugiat voluptatibus animi saepe quasi?
            Accusantium, modi?
          </p>
        </div>
        <div className="filtered-dishes">
          <ul>{menuCategoriesData}</ul>
        </div>
        <div className="filtered-dishes-result">
          <ul className="flex flex-wrap gap-30">
            {filteredDishes}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default FilteredDishes;
