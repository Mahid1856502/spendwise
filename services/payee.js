import { api } from "./api.";

export const fetchPayees = async () => {
  const response = await api.get(`/payee`);
  return response;
};

export const fetchPayeesByUserId = async (id) => {
  debugger;
  const response = await api.get(`/payee/user/${id}`);
  return response;
};

export const addPayee = async (payload) => {
  const response = await api.post(`/payee/Payee`, payload);
  return response;
};

export const deletePayee = async (values) => {
  debugger;
  const response = await api.delete(
    `/payee/${values?.userId}/${values?.payeeId}`
  );
  return response;
};

export const transfer = async (payload) => {
  debugger;
  const response = await api.post(`/transaction`, payload);
  return response?.data;
};
