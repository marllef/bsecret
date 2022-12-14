import { ButtonHTMLAttributes } from "react";
import colors from "tailwindcss/colors";

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {}

export const Button = ({
  children,
  className,
  onClick = () => {},
  color = `${colors.emerald[600]}`,
  ...rest
}: Props) => {
  return (
    <button
      onClick={onClick}
      style={{
        backgroundColor: color,
      }}
      className={`${className} w-full rounded text-slate-50 py-2 hover:opacity-90 active:opacity-80 disabled:opacity-30`}
      {...rest}
    >
      {children}
    </button>
  );
};
