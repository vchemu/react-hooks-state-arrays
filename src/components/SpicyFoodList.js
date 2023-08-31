import React, { useState } from "react";
import { spicyFoods, getNewRandomSpicyFood } from "../data";

function SpicyFoodList() {
  const [foods, setFoods] = useState(spicyFoods);
  const [filterBy, setFilterBy] = useState("All");

  const foodsToDisplay = foods.filter((food) => {
    if(filterBy === "All") {
      return true;
    } else {
      return food.cuisine === filterBy;
    }
  });

  function handleChangeFilter(event) {
    
    setFilterBy(event.target.value)
  }

  function handleAddFood() {
    const newFood = getNewRandomSpicyFood();
    const updatedFoods = [...foods, newFood]
  setFoods(updatedFoods);
  }

  function handleClick(id) {
    const updatedFoods = foods.filter((food) => food.id !== id);
    setFoods(updatedFoods)
  }
   function handleClick(id) {
    const updatedFoods = foods.map((food) =>{
      if(food.id === id) {
        return {
          ...food,
          heatLevel: food.heatlevel + 1,
        };
      } else {
        return food;
      }
    });
    setFoods(updatedFoods);
   }
  const foodList = foodsToDisplay.map((food) => (
    <li key={food.id} onClick={() => handleClick(food.id)}>
      {food.name} | Heat: {food.heatLevel} | Cuisine: {food.cuisine}
    </li>
  ));

  return (
    <div>
      <button onClick={handleAddFood}>Add New Food</button>
      <ul>{foodList}</ul>
      <select name="filter" onChange={handleChangeFilter}>
        <option value="All">All</option>
        <option value="American">American</option>
        <option value="Sichuan">Sichuan</option>
        <option value="Thai">Thai</option>
        <option value="Mexican">Mexican</option>
      </select>
    </div>
  );
}

export default SpicyFoodList;
