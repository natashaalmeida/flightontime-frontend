import { useEffect, useState } from "react";
import {
  listarVoosAdmin,
  criarVoo,
  deletarVoo,
} from "@services/voosAdmin";

export default function Admin() {
  const [voos, setVoos] = useState([]);
  const [origem, setOrigem] = useState("");
  const [destino, setDestino] = useState("");

  async function carregar() {
    const dados = await listarVoosAdmin();
    setVoos(dados);
  }

  useEffect(() => {
    carregar();
  }, []);

  async function handleCriar(e) {
    e.preventDefault();
    await criarVoo({ origem, destino, status: "NO_HORARIO" });
    setOrigem("");
    setDestino("");
    carregar();
  }

  async function handleDeletar(id) {
    await deletarVoo(id);
    carregar();
  }

  return (
    <div>
      <h1>🔐 Admin - Gerenciar Voos</h1>

      <form onSubmit={handleCriar}>
        <input
          placeholder="Origem"
          value={origem}
          onChange={(e) => setOrigem(e.target.value)}
        />

        <input
          placeholder="Destino"
          value={destino}
          onChange={(e) => setDestino(e.target.value)}
        />

        <button type="submit">Criar Voo</button>
      </form>

      <ul>
        {voos.map((voo) => (
          <li key={voo.id}>
            {voo.origem} → {voo.destino}

            <button onClick={() => handleDeletar(voo.id)}>
              ❌ Excluir
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
