import { api } from "./api.";

export const addCategory = async (category) => {
  const response = await api.post("/categories", category);
  return response.data;
};

export const fetchCategories = async () => {
  const response = await api.get("/categories");
  return response.data;
};

export const deleteCategory = async (id) => {
  debugger;
  const response = await api.delete(`/categories/${id}`);
  return response;
};
