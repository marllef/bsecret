import { List, ListItem, ListItemButton } from "@mui/material";
import { useEffect, useState } from "react";
import { QuestionListItem } from "./QuestionListItem";

interface Props {
  data: any[];
}

export const QuestionList = ({ data }: Props) => {
  const [itens, setItens] = useState<any[]>();

  useEffect(() => {
    setItens(data ?? []);
  }, [data]);

  return (
    <List className="space-y-2" disablePadding>
      {(itens || []).map((item, index) => (
        <QuestionListItem
          key={index}
          date={item.createdAt}
          index={index + 1}
          question={item.question}
        />
      ))}
    </List>
  );
};
