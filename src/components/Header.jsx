import React from "react";
import { Link, NavLink } from "react-router-dom";
import "../index.css"; // ensure global styles are loaded

export default function Header() {
  return (
    <header className="site-header">
      <div className="container header-inner">
        <Link to="/" className="brand">
          <div className="brand-mark" aria-hidden="true">🦅</div>
          <div className="brand-text">
            <span className="brand-title">Koladevi Garuda Temple</span>
            <small className="brand-sub">Garuda — Unique Deity</small>
          </div>
        </Link>

        <nav className="main-nav" aria-label="Primary">
          <NavLink to="/" end className={({isActive}) => isActive ? "nav-link active" : "nav-link"}>Home</NavLink>
          <NavLink to="/about" className={({isActive}) => isActive ? "nav-link active" : "nav-link"}>About</NavLink>
          <NavLink to="/unique-deity" className={({isActive}) => isActive ? "nav-link active" : "nav-link"}>Unique Deity</NavLink>
          <NavLink to="/legend" className={({isActive}) => isActive ? "nav-link active" : "nav-link"}>Legend</NavLink>
          <NavLink to="/gallery" className={({isActive}) => isActive ? "nav-link active" : "nav-link"}>Gallery</NavLink>
          <NavLink to="/sevas" className={({isActive}) => isActive ? "nav-link active" : "nav-link"}>Sevas</NavLink>
          <NavLink to="/contact" className={({isActive}) => isActive ? "nav-link active" : "nav-link"}>Contact</NavLink>
        </nav>
      </div>
    </header>
  );
}
