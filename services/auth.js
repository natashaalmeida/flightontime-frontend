import { api } from "./api";

/* LOGIN */
export async function login({ email, senha }) {
  const response = await api.post("/login", {
    email,
    senha,
  });

  return response.data;
}

/* VERIFICA TOKEN */
export function isAuthenticated() {
  const token = localStorage.getItem("token");
  return !!token;
}

/* LOGOUT (opcional, mas recomendado) */
export function logout() {
  localStorage.removeItem("token");
}
