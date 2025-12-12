import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [erro, setErro] = useState("");

  function handleLogin(e) {
    e.preventDefault();

    // Validação simples
    if (!email || !senha) {
      setErro("Preencha todos os campos!");
      return;
    }

    // Autenticação fictícia (depois integramos ao backend)
    if (email === "admin@flight.com" && senha === "1234") {
      navigate("/dashboard");
    } else {
      setErro("Credenciais inválidas!");
    }
  }

  return (
    <div style={styles.container}>
      <div style={styles.card}>
        <h2 style={styles.title}>FlightOnTime</h2>
        <p style={{ marginBottom: 10 }}>Faça login para continuar</p>

        <form onSubmit={handleLogin} style={{ width: "100%" }}>
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            style={styles.input}
          />

          <input
            type="password"
            placeholder="Senha"
            value={senha}
            onChange={(e) => setSenha(e.target.value)}
            style={styles.input}
          />

          {erro && <p style={styles.error}>{erro}</p>}

          <button type="submit" style={styles.button}>
            Entrar
          </button>
        </form>
      </div>
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
    fontSize: 15,
  },
  button: {
    width: "100%",
    padding: 12,
    borderRadius: 8,
    background: "#4b7bec",
    color: "white",
    fontSize: 16,
    border: "none",
    cursor: "pointer",
  },
  error: {
    color: "red",
    marginBottom: 10,
  },
};
