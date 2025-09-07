// Layout.jsx
import { Outlet, Link } from 'react-router-dom';

export default function RootLayout() {
  return (
    <div>
      <header>
        <Link to="/">Home</Link>
      </header>
      <main>
        <Outlet />
      </main>
    </div>
  );
}
