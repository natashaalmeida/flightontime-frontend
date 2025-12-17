// src/pages/Home.jsx
import { useEffect, useState } from 'react';
import { api } from '@services/api';

export default function Home() {
  const [status, setStatus] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);
    setError(null);

    api.get('/check') // Vai para /api/check → proxy redireciona pro back
      .then(res => setStatus(res.data))
      .catch(err => setError('Não foi possível conectar com o servidor.'))
      .finally(() => setLoading(false));
  }, []);

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Status do Servidor</h1>

      {loading && <p>Carregando...</p>}
      {error && <p className="text-red-500">{error}</p>}
      {status && <p className="text-green-600">{status}</p>}
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