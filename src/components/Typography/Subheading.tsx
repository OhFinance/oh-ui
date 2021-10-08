import { Typography, TypographyProps } from "@material-ui/core";
import { FC } from "react";

export const Subheading: FC<TypographyProps> = ({ children, ...props }) => {
  return (
    <Typography
      variant="h6"
      gutterBottom={props.gutterBottom ?? true}
      {...props}
    >
      {children}
    </Typography>
  );
};
