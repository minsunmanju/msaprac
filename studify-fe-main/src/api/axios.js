// src/api/axios.js
import axios from "axios";

const api = axios.create({
  baseURL: '/api', // ✅ Vercel이 /api → team4.store/api 로 프록시
  withCredentials: true,
});

api.interceptors.request.use((config) => {
  const token = localStorage.getItem("accessToken");
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export default api;
