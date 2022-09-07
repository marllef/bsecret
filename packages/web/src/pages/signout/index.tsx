import { useEffect } from "react";
import { Navigate } from "react-router-dom";
import useAuth from "~/hooks/useAuth";

export const SignOutPage = () => {
  const { signOut, currentUser } = useAuth();
  useEffect(() => {
    signOut();
  }, []);
  return <>{!currentUser && <Navigate to={"/"} replace />}</>;
};
