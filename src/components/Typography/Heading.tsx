import { Typography, TypographyProps } from "@material-ui/core";
import { FC } from "react";

export const Heading: FC<TypographyProps> = ({ children, ...props }) => {
  return (
    <Typography variant="h4" color={props.color ?? "textPrimary"} {...props}>
      {children}
    </Typography>
  );
};
