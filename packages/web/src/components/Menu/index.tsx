import MoreVertIcon from "@mui/icons-material/MoreVert";
import { Menu as MuiMenu, MenuItem } from "@mui/material";
import { ReactNode, useState } from "react";

interface Props {
  id?: string;
  children?: ReactNode;
}

export const Menu = ({ children, id = "Menu" }: Props) => {
  const [anchor, setAnchor] = useState<null | HTMLElement>(null);
  const open = Boolean(anchor);
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchor(event.currentTarget);
  };

  const handleClose = () => {
    setAnchor(null);
  };

  return (
    <>
      <button
        onClick={handleClick}
        className="p-2 rounded-full active:bg-slate-700 transition-colors"
      >
        <MoreVertIcon />
      </button>
      <MuiMenu id={id} anchorEl={anchor} open={open} onClose={handleClose}>
        {children}
      </MuiMenu>
    </>
  );
};
