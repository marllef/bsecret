import { List, ListItem, ListItemButton } from "@mui/material";
import { useEffect, useState } from "react";
import { MessagesWithReplies } from "~/interfaces/IMessages";
import { QuestionListItem } from "./QuestionListItem";

interface Props {
  data: any[];
}

export const QuestionList = ({ data }: Props) => {
  const [itens, setItens] = useState<MessagesWithReplies[]>();

  useEffect(() => {
    setItens(data ?? []);
  }, [data]);

  return (
    <List className="space-y-2" disablePadding>
      {(itens || []).map((item, index) => (
        <QuestionListItem
          key={index}
          date={item.timestamp}
          index={index + 1}
          question={item.text}
          replies={item.replies}
        />
      ))}
    </List>
  );
};
