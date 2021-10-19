import {
  IconButton as MuiIconButton,
  IconButtonProps as MuiIconButtonProps,
} from "@material-ui/core";
import { FC } from "react";

export interface IconButtonProps extends MuiIconButtonProps {
  label?: string;
  href?: string;
  fontSize?: number;
  onClick?: () => void;
}

export const IconButton: FC<IconButtonProps> = ({
  label,
  href,
  fontSize,
  onClick,
  children,
  ...props
}) => {
  return (
    <MuiIconButton
      aria-label={label}
      href={href}
      onClick={onClick}
      size={props.size ?? "medium"}
      {...(props as any)}
    >
      {children}
    </MuiIconButton>
  );
};
