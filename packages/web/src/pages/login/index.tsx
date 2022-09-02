import { Box, Button, TextField } from "@mui/material";
import { useState } from "react";
import { Footer } from "./footer";

export const LoginPage = () => {
  const [itens, setItens] = useState<any>();

  const handleSubmit = () => {
    console.log(itens);
  };

  return (
    <div className="flex flex-col relative w-full h-screen justify-center items-center bg-slate-100 p-5">
      <div className="flex flex-col max-w-sm space-y-3 w-full bg-white p-2 rounded border">
        <h3 className="w-full text-center text-2xl border-b  pb-3 pt-2">
          Realizar Login
        </h3>

        <div className="flex flex-col w-full space-y-3 p-5">
          <TextField
            size="small"
            label="Login"
            value={itens?.username || ""}
            onChange={(e) => setItens({ ...itens, username: e.target.value })}
          />
          <TextField
            size="small"
            type={"password"}
            label="Senha"
            value={itens?.password || ""}
            onChange={(e) => setItens({ ...itens, password: e.target.value })}
          />
          <div className="flex w-full justify-end items-center">
            <a href="#" className="text-xs text-left text-blue-700">
              Esqueceu a senha?
            </a>
          </div>

          <Button variant="contained" onClick={handleSubmit}>
            Login
          </Button>
        </div>
      </div>
      <Footer />
    </div>
  );
};
