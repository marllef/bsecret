import { Box, Button, TextField } from "@mui/material";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import useAuth from "~/hooks/useAuth";
import { Background } from "~/components/Background";
import { Footer } from "~/components/Footer";
import { InternalError } from "~/utils";

export const RegisterPage = () => {
  const [itens, setItens] = useState<any>();
  const { register } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = async () => {
    try {
      if (itens) {
        const { password, repassword, ...rest } = itens;
        if (password != repassword) throw new Error("Senhas não coincidem");

        const registered = await register({ ...rest, password });

        if (!registered) throw new Error("Erro ao realizar cadastro");

        navigate("/login");
      }
    } catch (err: any) {
      console.error(err.message);
    }
  };

  return (
    <div className="flex flex-col relative w-full h-screen justify-center items-center p-5">
      <Background />
      <div className="flex  flex-col max-w-sm space-y-3 w-full bg-white p-2 rounded border">
        <h3 className="w-full text-center text-2xl border-b  pb-3 pt-2">
          Realizar Cadastro
        </h3>

        <div className="flex flex-col w-full space-y-3 p-5">
          <TextField
            size="small"
            label="Nome Completo"
            value={itens?.displayName || ""}
            onChange={(e) =>
              setItens({ ...itens, displayName: e.target.value })
            }
          />
          <TextField
            size="small"
            label="Username"
            value={itens?.username || ""}
            onChange={(e) => setItens({ ...itens, username: e.target.value })}
          />
          <TextField
            size="small"
            label="Email"
            value={itens?.email || ""}
            onChange={(e) => setItens({ ...itens, email: e.target.value })}
          />
          <TextField
            size="small"
            type={"password"}
            label="Senha"
            value={itens?.password || ""}
            onChange={(e) => setItens({ ...itens, password: e.target.value })}
          />
          <TextField
            size="small"
            type={"password"}
            label="Confirmar Senha"
            value={itens?.repassword || ""}
            onChange={(e) => setItens({ ...itens, repassword: e.target.value })}
          />
          <div className="flex w-full justify-end items-center"></div>

          <Button variant="contained" onClick={handleSubmit}>
            Cadastrar
          </Button>
        </div>
      </div>
      <Footer />
    </div>
  );
};
