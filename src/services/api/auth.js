import { apiClient } from "./config";

export const authService = {
  signup: (data) => apiClient.post("/auth/register", data),
  login: (data) => apiClient.post("/auth/login", data),
  verifyEmail: (token) => apiClient.post("/auth/verify-email", { token }),
};
