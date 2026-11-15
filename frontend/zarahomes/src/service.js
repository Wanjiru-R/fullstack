import { api } from "./api";

// LOGIN
export async function login(username, password) {
  const { data } = await api.post("/token/", { username, password });
  localStorage.setItem("access", data.access);
  localStorage.setItem("refresh", data.refresh);
  return data;
}

export function logout() {
  localStorage.removeItem("access");
  localStorage.removeItem("refresh");
}

// PRODUCTS
export const getProducts = () => api.get("/products/").then((r) => r.data);
export const getProduct = (id) => api.get(`/products/${id}/`).then((r) => r.data);
export const createProduct = (payload) => api.post("/products/", payload).then((r) => r.data);
export const updateProduct = (id, payload) => api.patch(`/products/${id}/`, payload).then((r) => r.data);
export const deleteProduct = (id) => api.delete(`/products/${id}/`);