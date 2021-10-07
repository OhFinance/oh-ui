import { Toolbar } from "@material-ui/core";
import { Flex, FlexProps } from "../Flex";

export interface DisplayProps extends FlexProps {
  offset?: boolean;
}

export const Display: React.FC<DisplayProps> = ({
  offset,
  children,
  ...props
}) => {
  return (
    <Flex height="100vh" minHeight="100%" {...props}>
      {!!offset && <Toolbar />}
      {children}
    </Flex>
  );
};
