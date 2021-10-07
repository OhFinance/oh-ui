import {
  IconButton as MuiIconButton,
  IconButtonProps as MuiIconButtonProps,
} from "@material-ui/core";
import { FC } from "react";
import { FaHome, FaMediumM, FaTelegramPlane, FaTwitter } from "react-icons/fa";
import { BASE_URL, MEDIUM_URL, TELEGRAM_URL, TWITTER_URL } from "../../config";

export interface IconButtonProps extends MuiIconButtonProps {
  label?: string;
  href?: string;
  fontSize?: number;
}

export const IconButton: FC<IconButtonProps> = ({
  name,
  href,
  fontSize,
  children,
}) => {
  return (
    <MuiIconButton
      aria-label={name}
      href={href}
      style={{ fontSize: fontSize ?? 32 }}
    >
      {children}
    </MuiIconButton>
  );
};

export const HomeButton = () => {
  return (
    <IconButton label="home" href={BASE_URL}>
      <FaHome />
    </IconButton>
  );
};

export const MediumButton = () => {
  return (
    <IconButton label="medium" href={MEDIUM_URL}>
      <FaMediumM />
    </IconButton>
  );
};

export const TelegramButton = () => {
  return (
    <IconButton label="telegram" href={TELEGRAM_URL}>
      <FaTelegramPlane />
    </IconButton>
  );
};

export const TwitterButton = () => {
  return (
    <IconButton label="twitter" href={TWITTER_URL}>
      <FaTwitter />
    </IconButton>
  );
};
