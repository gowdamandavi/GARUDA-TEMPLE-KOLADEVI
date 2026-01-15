import { Link, NavLink } from "react-router-dom";

export default function Header() {
  return (
    <header className="site-header">
      <nav>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/about">About</NavLink>
        <NavLink to="/unique-deity">Unique Deity</NavLink>
        <NavLink to="/legend">Legend</NavLink>
        <NavLink to="/gallery">Gallery</NavLink>
        <NavLink to="/sevas">Sevas</NavLink>
        <NavLink to="/contact">Contact</NavLink>
      </nav>
    </header>
  );
}
