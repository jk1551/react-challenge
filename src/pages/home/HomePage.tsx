import { useEffect, useState } from 'react'
import { useApi } from '../../hooks/useApi'
import { MealCard } from '../../components/cards/Meal'
import type { Meal } from '../../types/meal';
import styles from './HomePage.module.scss';

const Home: React.FC = () => {
  const { getRandomMeal } = useApi();
  const [meals, setMeals] = useState<Meal[]>([]);

  const fetchMeals = async () => {
    try {
      const promises = Array.from({ length: 5 }, () => getRandomMeal());
      const results = await Promise.all(promises);
      setMeals(results);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    fetchMeals();
  }, [getRandomMeal]);

  return (
    <div>
    <h1>Recipes of the Day</h1>
    <div className={styles.cards}>
      {meals.map((meal) => (
        <div key={meal.idMeal} className={styles.card}>
          <MealCard meal={meal} />
        </div>
      ))}
    </div>
  </div>
  );
}

export default Home