import { useParams } from "react-router-dom";
import { useApi, type Meal } from "../hooks/useApi";
import { useEffect, useState } from "react";

export default function Recipe () {

    const { getMealById } = useApi();
    const { id } = useParams();
    const mealId = Number(id);
    const [meal, setMeal] = useState<Meal | null>(null);

    const fetchMeals = async () => {
        try {
          const result = await getMealById(mealId)
          setMeal(result);
        } catch (err) {
          console.error(err);
        }
      };

      useEffect(() => {
        fetchMeals();
      }, [getMealById, mealId])

    return (
        <div>Recipe {meal?.idMeal}</div>
    )
}