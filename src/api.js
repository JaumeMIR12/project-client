import axios from "axios";

const API = axios.create({
  baseURL: "http://localhost:8000/api", // Ruta del backend Laravel
  withCredentials: true, // Necesario si usas Sanctum
});

export default API;
