import { NavLink } from 'react-router-dom';

export default function Header() {
  return (
    <div>
      <nav>
        <NavLink to="/">Home</NavLink>
        <NavLink to="movies">Movies</NavLink>
      </nav>
    </div>
  );
}
