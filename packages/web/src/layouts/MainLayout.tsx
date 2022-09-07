import { ReactNode } from "react";
import { Background } from "~/components/Background";
import { Footer } from "~/components/Footer";
import MenuIcon from "@mui/icons-material/Menu";
import useAuth from "~/hooks/useAuth";
import { Navigate, useNavigate } from "react-router-dom";
interface Props {
  children?: ReactNode;
}

export const MainLayout = (props: Props) => {
  const { isAuthenticated } = useAuth();
  const navigate = useNavigate();

  const handleSignout = () => {
    navigate("/signout");
  };

  return (
    <>
      {!isAuthenticated && <Navigate to={"/signout"} replace />}
      <div className="flex flex-col relative h-screen overflow-hidden">
        <Background />
        <header className="flex w-full items-center h-14 text-white bg-[#6365f1a6] border-[#6366f1]">
          <div className="flex w-full items-center justify-between h-full max-w-4xl sm:mx-auto px-8">
            <button className="flex items-center p-1">
              <MenuIcon />
            </button>
            <div className="space-x-4 hidden sm:flex">
              <button className="px-2 py-1 rounded bg-[#6365f1de] border border-[#9295eb] hover:bg-[#6365f15b]">
                Início
              </button>
              <button>Perguntas</button>
              <button>Preferências</button>
            </div>
            <button
              onClick={handleSignout}
              className="rounded text-sm font-semibold bg-[#6365f1de] border border-[#9295eb] hover:bg-[#6365f15b] px-2 py-1"
            >
              Sair
            </button>
          </div>
        </header>
        <div className="h-full w-full max-w-4xl m-auto pb-8">
          {props.children}
        </div>
        <Footer />
      </div>
    </>
  );
};
