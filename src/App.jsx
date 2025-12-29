import { useState } from "react";
import axios from "axios";

export default function App() {
  const [voo, setVoo] = useState("");
  const [resultado, setResultado] = useState(null);

  const buscarVoo = async () => {
    try {
      const res = await axios.get(
        `http://localhost:8080/predict?flight=${voo}`
      );
      setResultado(res.data);
    } catch (e) {
      console.error(e);
      alert("Erro ao consultar voo");
    }
  };

  return (
    <div className="min-h-screen bg-sky-100 flex items-center justify-center">
      <div className="bg-white p-8 rounded-xl shadow-lg w-full max-w-md">
        <h1 className="text-2xl font-bold text-center mb-4">
          ✈️ Flight On Time
        </h1>

        <input
          className="w-full border p-2 rounded mb-3"
          placeholder="Ex: GOL1234"
          value={voo}
          onChange={(e) => setVoo(e.target.value)}
        />

        <button
          onClick={buscarVoo}
          className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700"
        >
          Ver status do voo
        </button>

        {resultado && (
          <div className="mt-4 p-4 rounded bg-gray-100">
            <p><b>Voo:</b> {resultado.flight}</p>
            <p>
              <b>Status:</b>{" "}
              {resultado.atrasado ? "⏰ Atrasado" : "✅ No horário"}
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
