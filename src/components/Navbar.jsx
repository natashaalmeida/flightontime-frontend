import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav
      style={{
        padding: "16px",
        background: "#0b0be9",
        marginBottom: "20px",
        display: "flex",
        gap: "20px",
        alignItems: "center"
      }}
    >
      <Link style={linkStyle} to="/">Home</Link>
      <Link style={linkStyle} to="/dashboard">Dashboard</Link>
      <Link style={linkStyle} to="/flights">Voos</Link>
      <Link style={linkStyle} to="/predict">Previsão</Link>
    </nav>
  );
}

const linkStyle = {
  color: "white",
  textDecoration: "none",
  fontWeight: "bold"
};
