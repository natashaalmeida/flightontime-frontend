import { useEffect, useState } from "react";
import { api } from "@services/api";

export default function Home() {
  const [status, setStatus] = useState("");

  useEffect(() => {
    api.get("/check")
      .then(res => setStatus(res.data))
      .catch(() => setStatus("Erro ao conectar com a API"));
  }, []);

  return (
    <div>
      <h1>Flight On Time</h1>
      <p>Status da API: {status}</p>
    </div>
  );
}



/* export default function Home() {
  return (
    <div style={{ padding: 40 }}>
      <h1>Flight On Time ✈️</h1>
      <p style={{ marginTop: 10 }}>
        Sistema de previsão de atrasos de voos usando Machine Learning.
      </p>

      <div style={{ display: "flex", gap: 20, marginTop: 30 }}>
        <div style={cardStyle}>
          <h3>📊 Dashboard</h3>
          <p>Análises e indicadores de atrasos.</p>
        </div>

        <div style={cardStyle}>
          <h3>✈️ Previsão</h3>
          <p>Descubra se seu voo vai atrasar.</p>
        </div>

        <div style={cardStyle}>
          <h3>📁 Voos</h3>
          <p>Lista e histórico de voos.</p>
        </div>
      </div>
    </div>
  );
}

const cardStyle = {
  background: "#fff",
  padding: 20,
  borderRadius: 8,
  width: 220,
  boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
};
 */