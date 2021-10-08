import { FaBars } from "react-icons/fa";
import { FC } from "react";
import { Flex } from "../Flex";
import { IconButton } from "../IconButton";

export interface MobileMenuProps {
  onClick: () => void;
  image: string;
}

export const MobileMenu: FC<MobileMenuProps> = ({ onClick, image }) => {
  return (
    <Flex align="center">
      <IconButton onClick={onClick}>
        <FaBars />
      </IconButton>
      <Flex center>
        <img src={image} alt="oh-finance" height="24px" width="auto" />
      </Flex>
    </Flex>
  );
};
