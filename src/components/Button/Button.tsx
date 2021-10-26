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
  paper: {
    backgroundColor: theme.palette.background.paper,
  },
}));

export interface ButtonProps extends MuiButtonProps {
  paper?: boolean;
  loading?: boolean;
}

export const Button: FC<ButtonProps> = ({
  paper = false,
  loading = false,
  children,
  ...props
}) => {
  const classes = useStyles();

  return (
    <MuiButton
      classes={{ label: classes.label }}
      className={(paper && classes.paper) || undefined}
      {...props}
    >
      {children}
    </MuiButton>
  );
};
