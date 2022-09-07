import { ButtonHTMLAttributes } from "react";

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {}

export const ProfileButton = (props: Props) => {
  return (
    <div className="w-full">
      <button
        {...props}
        className="p-2 rounded w-full my-1 bg-[#6365f1a6] border border-[#6366f1] hover:bg-[#6365f163] text-white"
      />
    </div>
  );
};
