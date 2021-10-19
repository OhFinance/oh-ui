import { IconButton } from "./IconButton";
import {
  FaGithub,
  FaTelegramPlane,
  FaMediumM,
  FaTwitter,
} from "react-icons/fa";
import {
  TELEGRAM_URL,
  TWITTER_URL,
  MEDIUM_URL,
  GITHUB_URL,
} from "../../config";
import { useCallback } from "react";

export const GithubButton = () => {
  return (
    <SocialMediaButton href={GITHUB_URL}>
      <FaGithub size="32px" />
    </SocialMediaButton>
  );
};

export const MediumButton = () => {
  return (
    <SocialMediaButton href={MEDIUM_URL}>
      <FaMediumM size="32px" />
    </SocialMediaButton>
  );
};

export const TelegramButton = () => {
  return (
    <SocialMediaButton href={TELEGRAM_URL}>
      <FaTelegramPlane size="32px" />
    </SocialMediaButton>
  );
};

export const TwitterButton = () => {
  return (
    <SocialMediaButton href={TWITTER_URL}>
      <FaTwitter size="32px" />
    </SocialMediaButton>
  );
};

export const SocialMediaButton = ({ href, children }) => {
  const onClick = useCallback(() => {
    const newWindow = window.open(href, "_blank", "noopener,noreferrer");
    if (newWindow) {
      newWindow.opener = null;
    }
  }, [href]);

  return <IconButton onClick={onClick}>{children}</IconButton>;
};
