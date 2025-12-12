import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav style={{ padding: 20, background: "#eef", marginBottom: 20 }}>
      <Link to="/">Home</Link> | 
      <Link to="/dashboard"> Dashboard</Link> | 
      <Link to="/flights"> Voos</Link>
    </nav>
  );
}
