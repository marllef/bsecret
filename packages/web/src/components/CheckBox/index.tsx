import { FormControlLabel, Checkbox as MCheckbox } from "@mui/material";
import { ReactNode } from "react";
import colors from "tailwindcss/colors";

interface Props {
  children?: ReactNode;
}

export const CheckBox = ({ children }: Props) => {
  return (
    <FormControlLabel
      control={
        <MCheckbox
          sx={{
            color: `${colors.emerald[600]}`,
            "&.Mui-checked": {
              color: `${colors.emerald[600]}`,
            },
          }}
        />
      }
      className="text-slate-50"
      label={children}
    />
  );
};
