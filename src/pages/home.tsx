import { useEffect, useState } from 'react'
import { useApi } from '../hooks/useApi'
import { MealCard } from '../components/cards/Meal'
import type { Meal } from '../types/meal';

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
      <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
        {meals.map((meal) => (
          <MealCard meal={meal} />
        ))}
      </div>
    </div>
  );
}

export default Home