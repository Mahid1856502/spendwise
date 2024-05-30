import { api } from "./api.";

export const signup = async (data) => {
  const response = await api.post("/users", data);
  return response;
};

export const signin = async (data) => {
  const response = await api.post("/auth/login", data);
  return response;
};

export const fetchAllUsers = async (data) => {
  const response = await api.get("/users", data);
  return response;
};

export const fetchUserById = async (id) => {
  const response = await api.get(`/users/${id}`);
  return response?.data;
};
