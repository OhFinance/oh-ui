import { Typography, TypographyProps } from "@material-ui/core";
import { FC } from "react";

export const Subtitle: FC<TypographyProps> = ({ children, ...props }) => {
  return (
    <Typography
      variant="subtitle1"
      paragraph={props.paragraph ?? true}
      {...props}
    >
      {children}
    </Typography>
  );
};
