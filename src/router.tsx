// router.js
import { createBrowserRouter } from 'react-router-dom';
import RootLayout from './layouts/root-layout';
import Home from './pages/home/HomePage';
import MealPage from './pages/meal/MealPage';

const router = createBrowserRouter([
  {
    element: <RootLayout />,
    children: [
      { path: '/', element: <Home /> },
      { path: '/recipe/:id', element: <MealPage />}
    ],
  },
]);

export default router;
