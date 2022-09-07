interface Props {
  value: number;
  title?: string;
}

export const CardMetric = ({ title = "Metrica", value }: Props) => {
  return (
    <div className="flex flex-col space-y-1 w-full max-w-xs justify-between text-white bg-[#6365f1a6] border-[#6366f1] border rounded text-center p-2    ">
      <div className="text-4xl font-semibold">{`${value}${"K"}`}</div>
      <span className="text-xs">{title}</span>
    </div>
  );
};
