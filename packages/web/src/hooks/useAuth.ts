import { useContext } from "react";
import { AuthContext } from "~/contexts/auth/AuthContext";

export default () => {
  return useContext(AuthContext)!;
};
