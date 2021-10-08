import { Typography, TypographyProps } from "@material-ui/core";
import { FC } from "react";

export const Paragraph: FC<TypographyProps> = ({ children, ...props }) => {
  return (
    <Typography variant="body1" paragraph={props.paragraph ?? true} {...props}>
      {children}
    </Typography>
  );
};
