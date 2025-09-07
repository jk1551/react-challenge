import type { AxiosInstance, AxiosResponse } from "axios";
import axios from "axios";
import { createContext, useContext, useMemo, type ReactNode } from "react";

export interface ApiContextType {
    api: AxiosInstance;
    getRandomMeal: () => Promise<AxiosResponse<Meal>>
}

export interface Meal {
    idMeal: string
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
          baseURL: 'https://www.themealdb.com/',
          headers: {
            'Content-Type': 'application/json',
          },
        });
    
        return instance;
      }, []);

    const value: ApiContextType = {
        api,
        getRandomMeal: () => api.get<Meal>('/api/json/v1/1/random.php'),
      };

    return <ApiContext.Provider value={value}>{children}</ApiContext.Provider>;
}