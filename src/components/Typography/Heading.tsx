import { Typography, TypographyProps } from "@material-ui/core";
import { FC } from "react";

export const Heading: FC<TypographyProps> = ({ children, ...props }) => {
  return (
    <Typography
      variant="h4"
      gutterBottom={props.gutterBottom ?? true}
      {...props}
    >
      {children}
    </Typography>
  );
};
