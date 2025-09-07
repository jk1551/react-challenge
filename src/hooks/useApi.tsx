import type { AxiosInstance, AxiosResponse } from "axios";
import axios from "axios";
import { createContext, useContext, useMemo, type ReactNode } from "react";
import type { Meal } from "../types/meal";

export interface ApiContextType {
    api: AxiosInstance;
    getRandomMeal: () => Promise<Meal>
    getMealById: (id: number) => Promise<Meal>
}



const ApiContext = createContext<ApiContextType | null>(null);

export const useApi = (): ApiContextType => {
    const context = useContext(ApiContext);
    if (!context) {
      throw new Error('useApi must be used within an ApiProvider');
    }
    return context;
  };

interface ApiProviderProps {
    children: ReactNode;
  }
  
export const ApiProvider: React.FC<ApiProviderProps> = ({ children }) => {

    const api = useMemo(() => {
        const instance = axios.create({
          baseURL: 'https://www.themealdb.com/api/json/v1/1',
          headers: {
            'Content-Type': 'application/json',
          },
        });
    
        return instance;
      }, []);

      // This endpoint returns an array of meals so we just need to take the first one
      const getRandomMeal = async (): Promise<Meal> => {
        const response: AxiosResponse<{ meals: Meal[] }> = await api.get(
          '/random.php'
        );
        return response.data.meals[0];
      };
    
      const getMealById = async (id: number): Promise<Meal> => {
        if (id == null) {
          throw new Error('Missing id');
        }
      
        const response: AxiosResponse<{ meals: Meal[] }> =
          await api.get('/lookup.php', {
            params: { i: id }
          });
      
        if (!response.data.meals || response.data.meals.length === 0) {
          throw new Error('No meal found');
        }
      
        return response.data.meals[0];
      };
      

    const value: ApiContextType = {
        api,
        getRandomMeal,
        getMealById
      };

    return <ApiContext.Provider value={value}>{children}</ApiContext.Provider>;
}