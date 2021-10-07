import { Typography, TypographyProps } from "@material-ui/core";
import { FC } from "react";

export const Heading: FC<TypographyProps> = ({ children, ...props }) => {
  return (
    <Typography variant="h3" gutterBottom {...props}>
      {children}
    </Typography>
  );
};
