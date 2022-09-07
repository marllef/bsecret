import { Account, Prisma } from "@prisma/client";
import { AxiosError } from "axios";
import { keys } from "~/configs";
import { IAccount } from "~/interfaces/account";
import { InternalError } from "~/utils";
import { api } from "./Api";

api.interceptors.request.use(
  async (config) => {
    const token = localStorage.getItem(keys.AUTH_TOKEN);

    if (token && config.headers) {
      config.headers["Authorization"] = `Bearer ${token}`;
    }

    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default {
  async login(username: string, password: string) {
    try {
      const response = await api.post<{ token: string }>("/auth/login", {
        username,
        password,
      });

      return response.data.token;
    } catch (err: any) {
      throw new InternalError(err);
    }
  },

  async register(data: Prisma.AccountCreateInput) {
    try {
      const response = await api.post("/auth/register", data);
      return response.data;
    } catch (err: any) {
      throw new InternalError(err);
    }
  },

  async validate() {
    try {
      const response = await api.get<IAccount>("/auth/validate");
      return response.data;
    } catch (err: any) {
      throw new InternalError(err);
    }
  },
};
