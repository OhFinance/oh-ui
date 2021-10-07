import { Typography, TypographyProps } from "@material-ui/core";
import { FC } from "react";

export const Text: FC<TypographyProps> = ({ children, ...props }) => {
  return (
    <Typography variant="body1" {...props}>
      {children}
    </Typography>
  );
};
