import axios from "axios";
import type { AdminDashboard } from "../types/admin";

const API = "http://localhost:8080/api/admin";

export const getDashboard = async (): Promise<AdminDashboard> => {
  const token = localStorage.getItem("token");

  const response = await axios.get(`${API}/dashboard`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  return response.data;
};