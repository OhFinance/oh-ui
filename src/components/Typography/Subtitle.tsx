import { Typography, TypographyProps } from "@material-ui/core";
import { FC } from "react";

export const Subtitle: FC<TypographyProps> = ({ children, ...props }) => {
  return (
    <Typography
      variant="subtitle1"
      color={props.color ?? "textPrimary"}
      paragraph={props.paragraph ?? true}
      {...props}
    >
      {children}
    </Typography>
  );
};
