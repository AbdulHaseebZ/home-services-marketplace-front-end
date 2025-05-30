// scr/lib/api/client.ts
import axios from "axios";

export const apiClient = axios.create({
  baseURL: "/api", // Next.js API routes
  headers: {
    "Content-Type": "application/json",
  },
});

// Add request interceptor for JWT
apiClient.interceptors.request.use((config) => {
  if (typeof window !== "undefined") {
    const token = localStorage.getItem("token");
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
  }
  return config;
});