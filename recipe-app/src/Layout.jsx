
import { Outlet, Link } from "react-router-dom";

function Layout() {
  return (
    <div>
      <header>
        <h1>Recipe App</h1>
        <Link to="/">Home</Link>
      </header>

      <main>
        <Outlet />
      </main>
    </div>
  );
}

export default Layout;