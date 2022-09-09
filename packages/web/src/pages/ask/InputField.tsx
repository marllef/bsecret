import { ChangeEvent, ReactNode, useEffect, useState } from "react";
import colors from "tailwindcss/colors";
import { Button } from "~/components/Button";
import { TextInput } from "~/components/TextInput";

interface Props {
  username?: string;
  children?: ReactNode;
  isOpen?: boolean;
  placeholder?: string;
  onOpen?: { (value?: boolean): void };
  onClose?: { (value?: boolean): void };
  onChange?: { (value: string): void };
}

export const AskInputField = ({
  children,
  isOpen = false,
  placeholder,
  onChange = () => {},
  onOpen = () => {},
}: Props) => {
  const [open, setOpen] = useState<boolean>(isOpen);

  useEffect(() => {
    setOpen(isOpen);
    onOpen(isOpen);
  }, [isOpen]);

  const handleOpen = () => {
    setOpen(true);
    onOpen(true);
  };

  const handleChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
    onChange(event.target.value);
  };

  return (
    <>
      {open ? (
        <>
          <TextInput onChange={handleChange} placeholder={placeholder} />
          <div className="flex space-x-2 w-full justify-end">{children}</div>
        </>
      ) : (
        <Button onClick={handleOpen}>Nova Pergunta</Button>
      )}
    </>
  );
};
