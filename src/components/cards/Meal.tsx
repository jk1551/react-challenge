import type { FC } from "react";
import styles from './Card.module.scss';
import { useNavigate } from "react-router-dom";
import type { Meal } from "../../types/meal";


interface MealCardProps {
  meal: Meal
}

export const MealCard: FC<MealCardProps> = ({ meal }) => {
  const navigate = useNavigate();

    return (
        <div key={meal.idMeal} className={styles.card} onClick={() => navigate(`/recipe/${meal.idMeal}`)}>
            <img
              src={meal.strMealThumb}
              alt={meal.strMeal}
              className={styles.image}
            />
            <h3 className={styles.title}>{meal.strMeal}</h3>
            <div>
            <span>{meal.strCategory}</span> - <span>{meal.strArea}</span>
            </div>
          </div>
    )
}