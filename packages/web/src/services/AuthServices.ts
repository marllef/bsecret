import { AxiosError } from "axios";
import { api } from "./Api";

export default {
  async login(username: string, password: string) {
    try {
      const response = await api.post<{ token: string }>("/auth/login", {
        username,
        password,
      });

      return response.data.token;
    } catch (err: any) {
      if (err instanceof AxiosError) {
        console.error(err.response?.data);
      } else {
        console.error(err.mesage);
      }
    }
  },

  async register() {},
};
