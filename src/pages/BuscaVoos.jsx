import { useState } from "react";
import FlightCard from "../components/CardVoo";
import SkeletonCard from "../components/SkeletonCard";

export default function BuscaVoos() {
  const [origem, setOrigem] = useState("");
  const [destino, setDestino] = useState("");
  const [companhia, setCompanhia] = useState("");
  const [dataHora, setDataHora] = useState("");
  const [voos, setVoos] = useState([]);
  const [loading, setLoading] = useState(false);

  function buscarVoos() {
    setLoading(true);
    setVoos([]);

    setTimeout(() => {
      setVoos([
        {
          origem,
          destino,
          companhia,
          dataHora,
          previsao: "No horário",
          probabilidade: 0.15,
          nivelRisco: "BAIXO",
        },
        {
          origem,
          destino,
          companhia,
          dataHora,
          previsao: "Atraso provável",
          probabilidade: 0.78,
          nivelRisco: "ALTO",
        },
      ]);
      setLoading(false);
    }, 1500);
  }

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center py-10 px-4">

      {/* CARD DE BUSCA */}
      <div className="bg-white w-full max-w-xl rounded-xl shadow p-6 mb-8">
        <h2 className="text-xl font-semibold mb-6 text-center">
          ✈️ Consulta de voo
        </h2>

        {/* Companhia */}
        <input
          className="w-full border rounded-lg p-3 mb-4"
          placeholder="Companhia aérea (ex: GOL)"
          value={companhia}
          onChange={(e) => setCompanhia(e.target.value)}
        />

        {/* Origem + Destino */}
        <div className="grid grid-cols-2 gap-4 mb-4">
          <input
            className="border rounded-lg p-3"
            placeholder="Origem (GRU)"
            value={origem}
            onChange={(e) => setOrigem(e.target.value)}
          />
          <input
            className="border rounded-lg p-3"
            placeholder="Destino (GIG)"
            value={destino}
            onChange={(e) => setDestino(e.target.value)}
          />
        </div>

        {/* Data/Hora */}
        <input
          type="datetime-local"
          className="w-full border rounded-lg p-3 mb-6"
          value={dataHora}
          onChange={(e) => setDataHora(e.target.value)}
        />

        {/* Botão */}
        <button
          onClick={buscarVoos}
          className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 rounded-lg transition"
        >
          Consultar voo
        </button>
      </div>

      {/* RESULTADOS */}
      <div className="w-full max-w-5xl grid grid-cols-1 md:grid-cols-2 gap-4">
        {loading &&
          Array.from({ length: 2 }).map((_, i) => (
            <SkeletonCard key={i} />
          ))}

        {!loading &&
          voos.map((voo, i) => <FlightCard key={i} voo={voo} />)}
      </div>
    </div>
  );
}
