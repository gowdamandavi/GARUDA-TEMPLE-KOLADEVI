import { NavLink } from "react-router-dom";

export default function Header() {
  const headerStyle = {
    backgroundColor: "#fff7ed",
    borderBottom: "1px solid #e6d3b1",
    padding: "14px 24px",
  };

  const logoStyle = {
    fontSize: "18px",
    fontWeight: "600",
    color: "#7a4a00",
  };

  const subTitleStyle = {
    display: "block",
    fontSize: "12px",
    color: "#9a6a2a",
  };

  const navStyle = {
    display: "flex",
    gap: "16px",
    marginTop: "10px",
    flexWrap: "wrap",
  };

  const linkStyle = ({ isActive }) => ({
    textDecoration: "none",
    color: isActive ? "#7a4a00" : "#333",
    fontWeight: isActive ? "600" : "400",
  });

  return (
    <header style={headerStyle}>
      <div style={logoStyle}>
        Koladevi Garuda Temple
        <span style={subTitleStyle}>Garuda — Unique Deity</span>
      </div>

      <nav style={navStyle}>
        <NavLink to="/" end style={linkStyle}>Home</NavLink>
        <NavLink to="/about" style={linkStyle}>About</NavLink>
        <NavLink to="/unique-deity" style={linkStyle}>Unique Deity</NavLink>
        <NavLink to="/legend" style={linkStyle}>Legend</NavLink>
        <NavLink to="/gallery" style={linkStyle}>Gallery</NavLink>
        <NavLink to="/sevas" style={linkStyle}>Sevas</NavLink>
        <NavLink to="/contact" style={linkStyle}>Contact</NavLink>
      </nav>
    </header>
  );
}
