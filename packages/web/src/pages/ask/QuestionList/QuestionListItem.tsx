import { ListItem, ListItemButton, MenuItem } from "@mui/material";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { useEffect } from "react";
import { Menu } from "~/components/Menu";
import { MessagesWithReplies } from "~/interfaces/IMessages";
import { Message } from "@prisma/client";

interface Props {
  index: string | number;
  question: string;
  date: string | Date;
  replies: Message[];
}

export const QuestionListItem = ({ index, question, date, replies }: Props) => {
  return (
    <ListItem disablePadding>
      <div className="flex  items-center rounded bg-slate-800 w-full overflow-hidden">
        <ListItemButton className="">
          <div className="flex w-full space-x-4 items-center">
            <span className="text-sky-500 font-bold">#{index}</span>
            <div className="flex w-full flex-col justify-center space-y-1">
              <span className="">{question}</span>
              <div className="flex space-x-2">
                <span className="text-xs text-slate-500">
                  Respostas: {replies.length}
                </span>
                <span className="text-xs text-slate-500">
                  Feita em: {new Date(date).toLocaleDateString()}
                </span>
              </div>
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
