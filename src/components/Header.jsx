import { NavLink } from "react-router-dom";
import "./Header.css";

export default function Header() {
  return (
    <header className="site-header">
      <div className="logo">
        <span>Koladevi Garuda Temple</span>
        <small>Garuda — Unique Deity</small>
      </div>

      <nav className="nav-links">
        <NavLink to="/" end>Home</NavLink>
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
