import { ListItem, ListItemButton, MenuItem } from "@mui/material";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { useEffect } from "react";
import { Menu } from "~/components/Menu";

interface Props {
  index: string | number;
  question: string;
  date: string;
}

export const QuestionListItem = ({ index, question, date }: Props) => {
  return (
    <ListItem disablePadding>
      <div className="flex  items-center rounded bg-slate-800 w-full overflow-hidden">
        <ListItemButton className="">
          <div className="flex w-full space-x-4 items-center leading-none">
            <span className="text-sky-500 font-bold">#{index}</span>
            <div className="flex w-full flex-col justify-center space-y-1">
              <span className="">{question}</span>
              <span className="text-xs text-slate-500">Feita em: {date}</span>
            </div>
          </div>
        </ListItemButton>
        <Menu>
          <MenuItem>Excluir</MenuItem>
          <MenuItem>Revelar</MenuItem>
        </Menu>
      </div>
    </ListItem>
  );
};
