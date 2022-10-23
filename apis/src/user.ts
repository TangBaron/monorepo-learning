import api from "./api";

export const userApi = {
  getUser: (id: number) => api.get(`/api/users/${id}`),
  createUser: (data: Record<string, any>) => api.post('/api/users', data),
  getUserByid: (id: string) => Promise.resolve(id)
}