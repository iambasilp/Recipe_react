import React, { useEffect } from "react";
import { useState } from "react";
import Hero from "./Hero";
import SpecialDishes from "./SpecialDishes";
import FilteredDishes from "./FilteredDishes";
import "./Menus.scss";
import Loader from "./Loader";

export default function Menus() {
  let [menu, setMenu] = useState([]);
  let [categories, setCategories] = useState([]);
  let [loading, setLoading] = useState(true);

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
  useEffect(() => {
    fetchMeals().then((data) => {
      setMenu(data);
      setLoading(false);
    });

    fetchCategory().then((response) => {
      setCategories(response);
      // console.log(response);
    });
  }, []);
  return (
    <div>
      <Hero />
      {!loading ? (
        <SpecialDishes specialMenu={menu} />
      ) : <Loader/>}
      {!loading ? (
        <FilteredDishes menuCategories={categories} specialMenu={menu} />
      ) : null}
    </div>
  );
}
