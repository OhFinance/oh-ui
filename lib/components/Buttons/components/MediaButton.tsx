import { IconButton } from "@material-ui/core";
import React, { ReactNode } from "react";

interface SocialMediaButtonProps {
  name: string;
  href: string;
  icon: ReactNode;
}

export const MediaButton: React.FC<SocialMediaButtonProps> = ({
  name,
  href,
  icon,
}) => {
  return (
    <IconButton aria-label={name} href={href} style={{ fontSize: 32 }}>
      {icon}
    </IconButton>
  );
};
