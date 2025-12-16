import { useState } from "react";
 import { predictFlight } from "../../services/api";


function PredictFlight() {
  const [form, setForm] = useState({
    flightNumber: "",
    origin: "",
    destination: "",
    date: "",
    hour: "",
  });

  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState(null);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    // tenho que trocar aqui tbm!!!
    // const response = await predictFlight(form);
    const response = await PredictFlight(form);
    setResult(response);

    setLoading(false);
  };

  return (
    <div style={{ maxWidth: 400, margin: "auto" }}>
      <h2>✈️ Previsão de atraso</h2>

      <form onSubmit={handleSubmit}>
        <input name="flightNumber" placeholder="Número do voo" onChange={handleChange} />
        <input name="origin" placeholder="Origem (GRU)" onChange={handleChange} />
        <input name="destination" placeholder="Destino (SDU)" onChange={handleChange} />
        <input type="date" name="date" onChange={handleChange} />
        <input type="number" name="hour" placeholder="Hora" onChange={handleChange} />

        <button type="submit">
          {loading ? "Analisando..." : "Prever"}
        </button>
      </form>

      {result && (
        <div style={{ marginTop: 20 }}>
          {result.delayed ? (
            <p style={{ color: "red" }}>
              ⚠️ Atraso provável ({Math.round(result.probability * 100)}%)
            </p>
          ) : (
            <p style={{ color: "green" }}>
              ✅ Voo provável no horário
            </p>
          )}
        </div>
      )}
    </div>
  );
}

export default PredictFlight;