import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import useAuth from "~/hooks/useAuth";

export const HomePage = () => {
  const { currentUser } = useAuth();
  const navigate = useNavigate();
  
  return (
    <div className=" flex flex-col h-screen justify-center items-center font-bold text-lg text-center">
      {currentUser ? (
        `Bem vindo, ${currentUser.displayName}`
      ) : (
        <div className="flex flex-col">
          {"Realize a autenticação para continuar"}{" "}
          <Button onClick={() => navigate("/login")}>Tela de Login </Button>
        </div>
      )}
    </div>
  );
};
