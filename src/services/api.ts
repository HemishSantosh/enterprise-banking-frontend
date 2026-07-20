import axios from "axios";
import { getToken } from "../utils/token";

const api = axios.create({
  baseURL: "https://enterprise-banking-backend-production.up.railway.app/api",
  headers: {
    "Content-Type": "application/json",
  },
});

api.interceptors.request.use(
  (config) => {
    const token = getToken();

    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }

    return config;
  },
  (error) => Promise.reject(error)
);

export default api;