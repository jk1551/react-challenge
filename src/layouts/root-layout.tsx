// Layout.jsx
import { Outlet, Link } from 'react-router-dom';

export default function RootLayout() {
  return (
    <div>
      <header>
        <Link to="/">Home</Link> | <Link to="favorites">Favorites</Link>
      </header>
      <main>
        <Outlet />
      </main>
    </div>
  );
}
