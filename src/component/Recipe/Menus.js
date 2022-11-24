import React, { useEffect } from "react";
import { useState } from "react";
<<<<<<< HEAD
import Hero from "./Hero";
import SpecialDishes from "./SpecialDishes";
import FilteredDishes from "./FilteredDishes";
import Loader from "./Loader"
import "./Menus.scss";


export default function Menus() {
  let [menu, setMenu] = useState([]);
  let [categories, setCategories] = useState([]);
  let [singleDish, setSingleDish] = useState([])
  let [loading, setLoading] = useState(false);

  async function fetchApiAll(url) {
    try {
      const response = await fetch(url);
      const data = await response.json();
      return [data, null];
    } catch (error) {
      return [null, error];
    }
  }
  async function fetchMeals() {
    const [data, error] = await fetchApiAll(
      "https://www.themealdb.com/api/json/v1/1/search.php?f=c"
    );
    if (data) {
      return data.meals;
    } else {
      return error;
    }
  }
  async function fetchCategory() {
    const [data, error] = await fetchApiAll(
      "https://www.themealdb.com/api/json/v1/1/categories.php"
    );
    if (data) {
      return data.categories;
    } else {
      return error;
    }
  }
  async function getOnlyOneDish() {
    const [data, error] = await fetchApiAll(
      "https://www.themealdb.com/api/json/v1/1/filter.php?c=Beef"
    );
    if (data) {
      return data.meals
    } else {
      return error;
    }
  }

  useEffect(() => {
    setLoading(true);
    fetchMeals().then((data) => {
      setMenu(data);
      setLoading(false)
    });

    fetchCategory().then((response) => {
      setCategories(response);
      // console.log(response);
    });
    getOnlyOneDish().then((response)=>{
      setSingleDish(response)
    })
  }, []);
  return (
    <div>
      <Hero />
      {!loading ? (
        <SpecialDishes specialMenu={menu} />
      ) : <Loader/>}
      {!loading ? (
        <FilteredDishes menuCategories={categories} specialMenu={menu} singleDish={singleDish} />
      ) : null}
=======
import "./Menus.css";

export default function Menus() {
  let [menu, setMenu] = useState([]);
  useEffect(() => {
    async function fetchMeals() {
      const response = await fetch(
        "https://www.themealdb.com/api/json/v1/1/search.php?f=a"
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
>>>>>>> refs/remotes/origin/main
    </div>
  );
}
