import React, { useEffect } from "react";
import { useState } from "react";
import "./Menus.css";

export default function Menus() {
  let [menu, setMenu] = useState([]);
  useEffect(() => {
    async function fetchMeals() {
      const response = await fetch(
        "https://www.themealdb.com/api/json/v1/1/search.php?f=c"
      );
      let data = await response.json();
      return data.meals;
    }
    fetchMeals().then((data) => {
      console.log(data);
      return setMenu(data);
    });
  }, []);
  return (
    <div className="menu">
      <div className="container">
        {menu.map((item) => {
          return (
            <div key={item.strMealThumb}>
              <h3>{item.strMeal}</h3>
              <img src={`${item.strMealThumb}`} alt="" />
            </div>
          );
        })}
      </div>
    </div>
  );
}
