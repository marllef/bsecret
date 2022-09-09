interface Props {
  value: number;
  title?: string;
}

export const CardMetric = ({ title = "Metrica", value }: Props) => {
  return (
    <div className="flex flex-col space-y-1 w-full max-w-xs justify-between text-white bg-slate-700 rounded text-center p-2">
      <div className="text-4xl font-semibold">{`${value}${"K"}`}</div>
      <span className="text-xs">{title}</span>
    </div>
  );
};
