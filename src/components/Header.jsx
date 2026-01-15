import { NavLink } from "react-router-dom";

export default function Header() {
  return (
    <header style={styles.header}>
      <div style={styles.logo}>
        <strong>Koladevi Garuda Temple</strong>
        <small style={styles.subtitle}>Garuda — Unique Deity</small>
      </div>

      <nav style={styles.nav}>
        <NavLink to="/" style={styles.link}>Home</NavLink>
        <NavLink to="/about" style={styles.link}>About</NavLink>
        <NavLink to="/unique-deity" style={styles.link}>Unique Deity</NavLink>
        <NavLink to="/legend" style={styles.link}>Legend</NavLink>
        <NavLink to="/gallery" style={styles.link}>Gallery</NavLink>
        <NavLink to="/sevas" style={styles.link}>Sevas</NavLink>
        <NavLink to="/contact" style={styles.link}>Contact</NavLink>
      </nav>
    </header>
  );
}

const styles = {
  header: {
    padding: "16px 24px",
    borderBottom: "1px solid #ddd",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    background: "#fffaf2"
  },
  logo: {
    display: "flex",
    flexDirection: "column"
  },
  subtitle: {
    fontSize: "12px",
    color: "#777"
  },
  nav: {
    display: "flex",
    gap: "16px"
  },
  link: {
    textDecoration: "none",
    color: "#6b3f1d",
    fontWeight: 500
  }
};
