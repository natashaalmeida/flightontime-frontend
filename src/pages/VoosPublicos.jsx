import { useEffect, useState } from "react";
import { listarVoos } from "@services/voos";

export default function VoosPublicos() {
  const [voos, setVoos] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function carregar() {
      try {
        const dados = await listarVoos();
        setVoos(dados);
      } catch (e) {
        console.error("Erro ao buscar voos", e);
      } finally {
        setLoading(false);
      }
    }

    carregar();
  }, []);

  if (loading) return <p>Carregando voos...</p>;

  return (
    <div>
      <h1>✈️ Voos disponíveis</h1>

      {voos.length === 0 && <p>Nenhum voo encontrado</p>}

      <ul>
        {voos.map((voo) => (
          <li key={voo.id}>
            {voo.origem} → {voo.destino} | {voo.status}
          </li>
        ))}
      </ul>
    </div>
  );
}
