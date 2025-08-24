import axios from "axios";

const api = axios.create({ baseURL: "http://localhost:8000/api/" });
const endpoint = "payments";

type ID = string | number;

export const apiPayments = <T>() => {
  return {
    getAll: async (): Promise<T[]> => {
      const response = await api.get<T[]>(`${endpoint}/`);
      return response.data;
    },

    getById: async (id: ID): Promise<T> => {
      const response = await api.get<T>(`${endpoint}/${id}/`);
      return response.data;
    },

    create: async (data: T): Promise<T> => {
      const response = await api.post<T>(`${endpoint}/`, data);
      return response.data;
    },

    update: async (id: ID, data: T): Promise<T> => {
      const response = await api.put<T>(`${endpoint}/${id}/`, data);
      return response.data;
    },

    delete: async (id: ID): Promise<void> => {
      await api.delete<T>(`${endpoint}/${id}/`);
    },
  };
};

export default apiPayments;
