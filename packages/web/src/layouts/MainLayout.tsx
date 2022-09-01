import { ReactNode } from "react";

interface Props {
  children?: ReactNode;
}

export const MainLayout = (props: Props) => {
  return <>{props.children}</>;
};
