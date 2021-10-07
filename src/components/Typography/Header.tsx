import { Typography, TypographyProps } from "@material-ui/core";
import { FC } from "react";

export const Header: FC<TypographyProps> = ({ children, ...props }) => {
  return (
    <Typography variant="h1" gutterBottom {...props}>
      {children}
    </Typography>
  );
};
