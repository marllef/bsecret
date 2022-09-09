import { useEffect, useState } from "react";
import { Navigate, useParams } from "react-router-dom";
import { Footer } from "~/components/Footer";
import { Avatar } from "~/components/Avatar";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { AskInputField } from "./InputField";
import { QuestionList } from "./QuestionList";
import MessageServices from "~/services/MessageServices";
import { MessagesWithReplies } from "~/interfaces/IMessages";
import useAuth from "~/hooks/useAuth";
import { Button } from "~/components/Button";
import colors from "tailwindcss/colors";

export const AskPage = () => {
  const [value, setValue] = useState("");
  const [isOpen, setIsOpen] = useState<boolean>();
  const { username } = useParams();
  const [messages, setMessages] = useState<MessagesWithReplies[]>();
  const { isAuthenticated } = useAuth();

  useEffect(() => {
    const find = async () => {
      const messages = await MessageServices.findAll();
      setMessages(messages);
    };

    find().catch(console.error);
  }, []);

  const handleClose = () => {
    setIsOpen(false);
  };

  return (
    <div className="flex flex-col w-full h-screen bg-slate-900 overflow-hidden">
      <header className="flex items-center justify-center px-4 text-slate-50 w-full min-h-[3rem] bg-slate-800">
        <span className="italic">
          <span className="text-sky-400">By</span>
          <span className="font-bold">{"Secret"}</span>
        </span>
      </header>

      {!isAuthenticated && <Navigate to={"/login"} />}

      <div className="w-full px-4 pb-3 space-y-2 max-w-3xl mx-auto">
        <div className="flex py-2 items-center justify-between mt-1">
          <span className="flex space-x-3 items-center">
            <Avatar size={30} name={"Marllef H"} loading={false} />
            <div className="flex flex-col leading-none">
              <span className="text-sm font-semibold text-slate-50 capitalize">
                Marllef H. A. Freitas
              </span>
              <span className="text-xs  text-slate-500">@{username}</span>
            </div>
          </span>
          <MoreVertIcon className="text-slate-600" />
        </div>

        <AskInputField
          placeholder={`Faça sua pergunta secreta para @${username}...`}
          isOpen={isOpen === true}
          onChange={setValue}
          onOpen={setIsOpen}
        >
          <Button onClick={handleClose} color={colors.red[600]}>
            Cancelar
          </Button>
          <Button disabled={!!!value}>Perguntar</Button>
        </AskInputField>
      </div>
      <div className=" w-full max-w-3xl h-full mb-8 mx-auto p-3 text-slate-50 rounded">
        <h5 className="text-center uppercase py-2 font-semibold border-slate-700">
          Minhas Perguntas
        </h5>
        <QuestionList data={messages!} />
      </div>

      <Footer />
    </div>
  );
};
