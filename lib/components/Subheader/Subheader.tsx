import { Typography } from "@material-ui/core";
import { FC } from "react";

export interface SubheaderProps {}

export const Subheader: FC<SubheaderProps> = ({ children }) => {
  return (
    <Typography variant="h6" gutterBottom>
      {children}
    </Typography>
  );
};
