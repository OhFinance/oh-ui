import { Typography, TypographyProps } from "@material-ui/core";
import { FC } from "react";

export const Text: FC<TypographyProps> = ({ children, ...props }) => {
  return (
    <Typography variant="body1" color={props.color ?? "textPrimary"} {...props}>
      {children}
    </Typography>
  );
};
