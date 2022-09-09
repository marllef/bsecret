import { Prisma, User } from "@prisma/client";
import { ReactNode, useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { keys } from "~/configs";
import { IAccount } from "~/interfaces/account";
import { LoginCredentials } from "~/interfaces/auth/Login";
import AuthServices from "~/services/AuthServices";
import { AuthContext } from "./AuthContext";

interface Props {
  children?: ReactNode;
}

export const AuthProvider = ({ children }: Props) => {
  const [isAuthenticated, setIsAuthenticated] = useState(
    !!localStorage.getItem(keys.AUTH_TOKEN)
  );
  const [currentUser, setCurrentUser] = useState<IAccount | null>(null);
  const [loading, setLoading] = useState(true);
  const location = useLocation();
  const navigate = useNavigate()

  useEffect(() => {
    setLoading(true);

    const validate = async () => {
      const user = await AuthServices.validate();
      if (user) {
        setCurrentUser(user);
        setIsAuthenticated(true);
        setLoading(false);
      }
    };

    const hasToken = !!localStorage.getItem(keys.AUTH_TOKEN);

    if (hasToken) validate().catch(console.error);

    return () => {};
  }, [location]);

  const signIn = async (credentials: LoginCredentials) => {
    const token = await AuthServices.login(
      credentials.username,
      credentials.password
    );

    if (!token) {
      signOut();
      return false;
    }

    localStorage.setItem(keys.AUTH_TOKEN, token);
    setIsAuthenticated(true);

    return true;
  };

  const register = async (data: Prisma.UserCreateInput) => {
    const account = await AuthServices.register(data);
    if (!account) return false;

    return true;
  };

  const signOut = () => {
    localStorage.setItem(keys.AUTH_TOKEN, "");
    setIsAuthenticated(false);
    setCurrentUser(null);
  };

  return (
    <AuthContext.Provider
      value={{
        isAuthenticated,
        signIn,
        signOut,
        register,
        loading,
        currentUser,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
