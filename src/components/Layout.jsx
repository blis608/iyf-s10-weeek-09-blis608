import { NavLink, Outlet } from 'react-router-dom';

function Layout() {
  return (
    <div className="app-shell">
      <header className="layout-header">
        <nav>
          <NavLink to="/" end>
            Home
          </NavLink>
          <NavLink to="/posts">Posts</NavLink>
          <NavLink to="/create">Create Post</NavLink>
          <NavLink to="/challenges">Challenges</NavLink>
          <NavLink to="/about">About</NavLink>
        </nav>
      </header>

      <main className="layout-main">
        <Outlet />
      </main>

      <footer className="layout-footer">
        <p>SocialLink • React Advanced · Week 9</p>
      </footer>
    </div>
  );
}

export default Layout;
