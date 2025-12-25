import { useEffect, useState } from "react";
import { api } from "@services/api";

export default function Home() {
  const [status, setStatus] = useState("loading"); // loading | ok | error
  const [message, setMessage] = useState("");

  useEffect(() => {
    api.get("/check")
      .then(res => {
        setMessage(res.data);
        setStatus("ok");
      })
      .catch(() => {
        setMessage("Não foi possível conectar à API");
        setStatus("error");
      });
  }, []);

  return (
    <main style={styles.container}>
      <h1>Flight On Time ✈️</h1>

      {status === "loading" && <p className="spinner">🔄 Conectando à API...</p>}

      {status === "ok" && (
        <div style={{ ...styles.card, ...styles.success }}>
          <p>{message}</p>
        </div>
      )}

      {status === "error" && (
        <div style={{ ...styles.card, ...styles.error }}>
          <p>{message}</p>
          <button onClick={() => window.location.reload()}>
            Tentar novamente
          </button>
        </div>
      )}
    </main>
  );
}

const styles = {
  container: {
    minHeight: "100vh",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    background: "#0f172a",
    color: "#e5e7eb",
    fontFamily: "system-ui, sans-serif",
  },
  card: {
    padding: "20px 32px",
    borderRadius: 12,
    marginTop: 16,
    minWidth: 280,
    textAlign: "center",
  },
  success: {
    background: "#064e3b",
  },
  error: {
    background: "#7f1d1d",
  },
};
