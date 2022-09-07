import { Button, FormControl, TextField } from "@mui/material";
import { FormEvent, FormEventHandler, useState } from "react";
import { useNavigate } from "react-router-dom";
import useAuth from "~/hooks/useAuth";
import { Background } from "~/components/Background";
import { Footer } from "~/components/Footer";

export const LoginPage = () => {
  const [itens, setItens] = useState<any>();
  const { signIn } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      if (itens) {
        const authenticated = await signIn(itens);

        if (!authenticated) throw new Error("Erro ao realizar autenticação");

        navigate("/profile");
      }
    } catch (err: any) {
      console.error(err.message);
    }
  };

  return (
    <div className="flex flex-col relative w-full h-screen justify-center items-center p-5">
      <Background />
      <form
        name="login"
        onSubmit={handleSubmit}
        className="flex flex-col max-w-sm space-y-3 w-full bg-white p-2 rounded border"
      >
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

          <Button type="submit" variant="contained">
            Login
          </Button>
        </div>
      </form>
      <Footer />
    </div>
  );
};
