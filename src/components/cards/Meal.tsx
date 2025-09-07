import type { FC } from "react";
import type { Meal } from "../../hooks/useApi"
import styles from './Card.module.scss';
import { useNavigate } from "react-router-dom";


interface MealCardProps {
  meal: Meal
}

export const MealCard: FC<MealCardProps> = ({ meal }) => {
  const navigate = useNavigate();

    return (
        <div key={meal.idMeal} className={styles.card}>
            <img
              src={meal.strMealThumb}
              alt={meal.strMeal}
              className={styles.cardImage}
            />
            <h3 onClick={() => navigate(`/recipe/${meal.idMeal}`)}>{meal.strMeal}</h3>
            <p>{meal.strCategory}</p>
            <p>{meal.strArea}</p>
          </div>
    )
}