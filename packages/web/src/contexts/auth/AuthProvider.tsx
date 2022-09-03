import { ReactNode, useEffect, useState } from "react";
import { keys } from "~/configs";
import { LoginCredentials } from "~/interfaces/auth/Login";
import AuthServices from "~/services/AuthServices";
import { AuthContext } from "./AuthContext";

interface Props {
  children?: ReactNode;
}

export const AuthProvider = ({ children }: Props) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [currentUser, setCurrentUser] = useState(null);

  useEffect(() => {}, []);

  const signIn = async (credentials: LoginCredentials) => {
    const token = await AuthServices.login(
      credentials.username,
      credentials.password
    );

    if (!token) {
      localStorage.setItem(keys.AUTH_TOKEN, "");
      setIsAuthenticated(false);
      return false;
    }

    localStorage.setItem(keys.AUTH_TOKEN, token);
    setIsAuthenticated(true);

    return true;
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, signIn, currentUser }}>
      {children}
    </AuthContext.Provider>
  );
};
