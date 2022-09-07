import { ChangeEvent, TextareaHTMLAttributes, useState } from "react";

interface Props extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  maxLength?: number;
}

export const TextInput = ({
  maxLength = 130,
  onChange = () => {},
  ...rest
}: Props) => {
  const [count, setCount] = useState(0);

  const handleChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
    onChange(event);
    setCount(event.target.value.length);
  };

  return (
    <>
      <div className="px-1 text-slate-50 border border-slate-700 rounded bg-slate-800">
        <textarea
          className="bg-inherit w-full h-32 min-h-[8rem] p-2 focus:outline-none"
          maxLength={maxLength}
          onChange={handleChange}
          {...rest}
        />
      </div>
      <p
        className={`${
          count === maxLength ? "text-red-600" : "text-slate-600"
        } w-full leading-none text-xs px-2 text-end`}
      >
        {count}/{maxLength}
      </p>
    </>
  );
};
