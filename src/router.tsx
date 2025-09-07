// router.js
import { createBrowserRouter } from 'react-router-dom';
import RootLayout from './layouts/root-layout';
import Home from './pages/home';
import Recipe from './pages/recipe';

const router = createBrowserRouter([
  {
    element: <RootLayout />,
    children: [
      { path: '/', element: <Home /> },
      { path: '/recipe/:id', element: <Recipe />}
    ],
  },
]);

export default router;
