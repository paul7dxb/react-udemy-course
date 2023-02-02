import Card from "../UI/Card";
import MealItem from "./MealItem/MealItem";
import classes from "./AvailableMeals.module.css";
import { useCallback, useEffect, useState } from "react";

// const DUMMY_MEALS = [
//   {
//     id: "m1",
//     name: "Sushi",
//     description: "Finest fish and veggies",
//     price: 22.99,
//   },
//   {
//     id: "m2",
//     name: "Schnitzel",
//     description: "A german specialty!",
//     price: 16.5,
//   },
//   {
//     id: "m3",
//     name: "Barbecue Burger",
//     description: "American, raw, meaty",
//     price: 12.99,
//   },
//   {
//     id: "m4",
//     name: "Green Bowl",
//     description: "Healthy...and green...",
//     price: 18.99,
//   },
// ];

const AvailableMeals = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [meals, setMeals] = useState([]);
  const [error, setError] = useState();

  const fetchAvailableMeals = async () => {

    //send request
    const response = await fetch(
      "https://react-meals-5783c-default-rtdb.firebaseio.com/meals.json"
    );

    //Throw error to the try / catch in useEfect()
    if(!response.ok){
      console.log("trhorw error")
      throw new Error("something went wrong")
    }

    //get back data
    const data = await response.json();
    console.log(Object.keys[0]);

    //store data
    const loadedMeals = [];
    for (const key in data) {
      loadedMeals.push({
        id: key,
        name: data[key].name,
        description: data[key].description,
        price: data[key].price,
      });
    }

    // const transformedMeals = data.map((mealData) => {
    //   return {
    //     id: mealData.id,
    //     name: mealData.name,
    //     description: mealData.description,
    //     price: mealData.price,
    //   };
    // });
    setMeals(loadedMeals);
    setIsLoading(false);

    //set DUMMY Meals to API meals
  }

  useEffect(() => {
      fetchAvailableMeals().catch(error => {
        setIsLoading(false)
        setError(error.message);
      });
  }, []);

  const mealsList = meals.map((meal) => (
    <MealItem
      key={meal.id}
      id={meal.id}
      name={meal.name}
      description={meal.description}
      price={meal.price}
    />
  ));

  let content = (
    <section className={classes.mealsLoading}>
      <p>No Meals Available</p>
    </section>
  );

  if (isLoading) {
    content = (
      <section className={classes.mealsLoading}>
        <p>Loading Meals...</p>
      </section>
    );
  }

  if (error) {
    content = (
      <section className={classes.mealsError}>
        <p>Something Went wrong...{error}</p>
      </section>
    );
  }

  if (mealsList.length > 0) {
    content = (
      <section className={classes.meals}>
        <Card>
          <ul>{mealsList}</ul>
        </Card>
      </section>
    );
  }

  return content;
};

export default AvailableMeals;
