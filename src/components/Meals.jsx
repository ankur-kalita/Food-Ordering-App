// import { useState, useEffect } from "react";
import MealItem from "./MealItem";
import useHttp from "../hooks/useHttp";

const requestConfig = {};
export default function Meals() {
    // const [loadedMeals, setLoadedMeals] = useState([]);
    // useEffect(() => {
    //     async function fetchMeals() {
    //         const response = await fetch('http://localhost:3000/meals');

    //         if(!response) {
    //             //
    //         }

    //         const meals = await response.json();
    //         setLoadedMeals(meals);
    //     }
    //     fetchMeals();
    // }, []);

    const {data: loadedMeals, isLoading, error} = useHttp('http://localhost:3000/meals', requestConfig, []);

    if(isLoading) {
        return <p>Fetching meals...</p>
    }
        
   
    return (
        <ul id="meals">
            {loadedMeals.map((meal) => 
                <MealItem key={meal.id} meal={meal}/>
            )}
        </ul>
    )
}