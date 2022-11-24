import React, { useState } from "react";
import "./FilteredDishes.scss";

function FilteredDishes(props) {
  let { menuCategories, specialMenu } = props;
  let [allMenu, setAllMenu] = useState(specialMenu);
  console.log(allMenu);
  let [filteredDishes, setFilteredDishes] = useState([]);
  let [activeState, setActiveDish] = useState("Beef");

  // let show only single lists
  let singleDishItems = props.singleDish.map((item) => {
    
    return (
      <li>
        <img className="br-10" src={`${item.strMealThumb}`} alt="" />
        <h4 className="text-center">{item.strMeal}</h4>
      </li>
    );
  });
  //show dishes on click
  function handleShowFilteredDishes(category) {
    setActiveDish(category);
    // alert(`Please show dishes of ${category}`);
    let filteredDishesare = allMenu
      .filter((item) => {
        return item.strCategory === category;
      })
      .map((item) => {
        return (
          <li>
            <img className="br-10" src={`${item.strMealThumb}`} alt="" />
            <h4 className="text-center">{item.strMeal}</h4>
          </li>
        );
      });
    setFilteredDishes(filteredDishesare);
  }
  // Lets show all the category
  let menuCategoriesData = menuCategories.map((item, index) => {
    return (
      <li
        key={index}
        className={item.strCategory == activeState  ? "active" : ""}
        onClick={() => {
          handleShowFilteredDishes(item.strCategory);
        }}
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
            {singleDishItems}
            {filteredDishes.length != 0 ? (
              filteredDishes
            ) : (
              <div className="alert">
                <h2>Sorry No items Found</h2>
                <h4>Please choose another dish</h4>
              </div>
            )}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default FilteredDishes;
