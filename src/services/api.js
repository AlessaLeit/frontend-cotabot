import axios from "axios";

const apiBaseUrl = "http://localhost:8000/";

/** Sem timeout, uma API travada deixaria a interface carregando para sempre. */
export const REQUEST_TIMEOUT_MS = 10_000_000;

const api = axios.create({
  baseURL: apiBaseUrl,
  withCredentials: false,
  timeout: REQUEST_TIMEOUT_MS,
});

export default api;