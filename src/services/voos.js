import api from "./api";

// Público (GET não precisa de token)
export async function listarVoos() {
  const response = await api.get("/voos");
  return response.data;
}
