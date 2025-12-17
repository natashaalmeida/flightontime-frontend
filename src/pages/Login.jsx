// Login.jsx
import { useState } from "react";
import { api } from "./services/api";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      const response = await api.post("/login", { email, password });
      const token = response.data.token; // supondo que o back retorne { token: "..." }
      localStorage.setItem("token", token); // salva token
      setError("");
      alert("Login realizado com sucesso!");
      // aqui você pode redirecionar para Home ou dashboard
    } catch (err) {
      console.error("Erro no login:", err);
      setError("Email ou senha inválidos.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={{ padding: "2rem", fontFamily: "Arial, sans-serif" }}>
      <h1>Login</h1>
      <form onSubmit={handleLogin} style={{ display: "flex", flexDirection: "column", maxWidth: "300px" }}>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          style={{ marginBottom: "1rem", padding: "0.5rem" }}
        />
        <input
          type="password"
          placeholder="Senha"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
          style={{ marginBottom: "1rem", padding: "0.5rem" }}
        />
        <button type="submit" disabled={loading} style={{ padding: "0.5rem" }}>
          {loading ? "Entrando..." : "Login"}
        </button>
      </form>
      {error && <p style={{ color: "red", marginTop: "1rem" }}>{error}</p>}
    </div>
  );
}


const styles = {
  container: {
    width: "100vw",
    height: "100vh",
    background: "#f3f5f7",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  card: {
    background: "#fff",
    padding: "40px 30px",
    width: 350,
    borderRadius: 12,
    boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
    textAlign: "center",
  },
  title: {
    marginBottom: 20,
    fontSize: 26,
    fontWeight: "bold",
    color: "#334",
  },
  input: {
    width: "100%",
    padding: "12px 10px",
    marginBottom: 15,
    borderRadius: 8,
    border: "1px solid #ccc",
    font
  },
}