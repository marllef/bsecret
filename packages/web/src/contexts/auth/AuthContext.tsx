import { Account } from "@prisma/client";
import { createContext } from "react";
import { LoginCredentials } from "~/interfaces/auth/Login";

type AuthState = {
  isAuthenticated: boolean;
  currentUser: Account | null;
  signIn: { (credentials: any): Promise<boolean> };
};

export const AuthContext = createContext<AuthState | null>(null);
