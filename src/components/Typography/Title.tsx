import { Typography, TypographyProps } from "@material-ui/core";
import { FC } from "react";

export const Title: FC<TypographyProps> = ({ children, ...props }) => {
  return (
    <Typography
      variant="h3"
      gutterBottom={props.gutterBottom ?? true}
      {...props}
    >
      {children}
    </Typography>
  );
};
