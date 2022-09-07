import { ChangeEvent, useState } from "react";
import colors from "tailwindcss/colors";
import { Button } from "~/components/Button";
import { TextInput } from "~/components/TextInput";

interface Props {
  username?: string;
}

export const AskInputField = ({ username }: Props) => {
  const [open, setOpen] = useState(false);
  const [enable, setEnable] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
    setEnable(!!event.target.value);
  };

  return (
    <>
      {open ? (
        <>
          <TextInput
            onChange={handleChange}
            placeholder={`Faça sua pergunta secreta para @${username}...`}
          />
          <div className="flex space-x-2 w-full justify-end">
            <Button onClick={handleClose} color={colors.red[600]}>
              Cancelar
            </Button>
            <Button disabled={!enable}>Perguntar</Button>
          </div>
        </>
      ) : (
        <Button onClick={handleOpen}>Nova Pergunta</Button>
      )}
    </>
  );
};
