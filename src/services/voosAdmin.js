import api from "./api";

export async function listarVoosAdmin() {
  const response = await api.get("/voos");
  return response.data;
}

export async function criarVoo(voo) {
  return api.post("/voos", voo);
}

export async function atualizarVoo(id, voo) {
  return api.put(`/voos/${id}`, voo);
}

export async function deletarVoo(id) {
  return api.delete(`/voos/${id}`);
}
