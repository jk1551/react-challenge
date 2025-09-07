import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import styles from './MealPage.module.scss';
import type { Meal } from '../../types/meal';
import { useApi } from '../../hooks/useApi';

export default function MealPage() {
  const { id } = useParams<{ id: string }>();
  const mealId = Number(id);
  const [meal, setMeal] = useState<Meal | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const { getMealById } = useApi();

  useEffect(() => {
    if (!mealId) return;

    const fetchMeal = async () => {
      try {
        const result = await getMealById(mealId);
        setMeal(result);
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchMeal();
  }, [mealId]);


  if (loading) return <div className={styles.loading}>Loading…</div>;
  if (!meal) return <div className={styles.loading}>Meal not found</div>;

  const ingredients: string[] = [];
  for (let i = 1; i <= 20; i++) {

    const key: string = `strMeasure${i}`;

    // have to do meal as any here because typescript doesn't know how to handle this key
    const ingredient = (meal as any)[`strIngredient${i}`];
    const measure = (meal as any)[key];

    if (ingredient && ingredient.trim() !== '') {
      ingredients.push((measure ? measure + ' ' : '') + ingredient);
    }
  }

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>{meal.strMeal}</h1>
      <img
        className={styles.image}
        src={meal.strMealThumb}
        alt={meal.strMeal}
      />

      <h2>Ingredients</h2>
      <ul className={styles.ingredients}>
        {ingredients.map((ingredient, i) => (
          <li key={i}>{ingredient}</li>
        ))}
      </ul>

      <h2>Instructions</h2>
      <p className={styles.instructions}>{meal.strInstructions}</p>
    </div>
  );
}
