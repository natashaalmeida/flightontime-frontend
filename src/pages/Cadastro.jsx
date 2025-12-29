import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { cadastrarUsuario } from "../services/usuario";

export default function Cadastro() {
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [erro, setErro] = useState("");
  const navigate = useNavigate();

  async function handleSubmit(e) {
    e.preventDefault();
    setErro("");

    try {
      await cadastrarUsuario({ nome, email, senha });
      alert("Usuário cadastrado com sucesso!");
      navigate("/login");
    } catch (err) {
      setErro("Erro ao cadastrar usuário");
    }
  }

  return (
    <div style={{ maxWidth: 400, margin: "100px auto" }}>
      <h2>Cadastro</h2>

      <form onSubmit={handleSubmit}>
        <input
          placeholder="Nome"
          value={nome}
          onChange={(e) => setNome(e.target.value)}
          required
        />

        <br /><br />

        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        <br /><br />

        <input
          type="password"
          placeholder="Senha"
          value={senha}
          onChange={(e) => setSenha(e.target.value)}
          required
        />

        <br /><br />

        <button type="submit">Cadastrar</button>

        {erro && <p style={{ color: "red" }}>{erro}</p>}
      </form>
    </div>
  );
}
