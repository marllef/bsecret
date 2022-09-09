import { Prisma } from "@prisma/client";
import { createContext } from "react";
import { IAccount } from "~/interfaces/account";
import { LoginCredentials } from "~/interfaces/auth/Login";

type AuthState = {
  isAuthenticated: boolean;
  currentUser: IAccount | null;
  loading: boolean;
  signIn: { (credentials: LoginCredentials): Promise<boolean> };
  signOut: { (): void };
  register: { (props: Prisma.UserCreateInput): Promise<boolean> };
};

export const AuthContext = createContext<AuthState | null>(null);
