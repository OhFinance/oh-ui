import { FC } from "react";
import {
  Button as MuiButton,
  ButtonProps as MuiButtonProps,
  makeStyles,
} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  label: {
    textTransform: "none",
  },
}));

export const Button: FC<MuiButtonProps> = ({ children, ...props }) => {
  const classes = useStyles();

  return (
    <MuiButton classes={{ label: classes.label }} {...props}>
      {children}
    </MuiButton>
  );
};
