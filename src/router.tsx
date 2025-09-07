// router.js
import { createBrowserRouter } from 'react-router-dom';
import RootLayout from './layouts/root-layout';
import Home from './pages/home';

const router = createBrowserRouter([
  {
    element: <RootLayout />,
    children: [
      { path: '/', element: <Home /> },
    ],
  },
]);

export default router;
