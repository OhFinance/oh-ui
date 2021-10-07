import { Typography, TypographyProps } from "@material-ui/core";
import { FC } from "react";

export const Subheader: FC<TypographyProps> = ({ children, ...props }) => {
  return (
    <Typography variant="h6" gutterBottom {...props}>
      {children}
    </Typography>
  );
};
