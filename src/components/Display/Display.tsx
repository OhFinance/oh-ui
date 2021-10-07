import { Theme, Toolbar } from "@material-ui/core";
import { useTheme } from "@material-ui/styles";
import { Flex, FlexProps } from "../Flex";

export interface DisplayProps extends FlexProps {
  offset?: boolean;
}

export const Display: React.FC<DisplayProps> = ({
  offset,
  children,
  ...props
}) => {
  const theme = useTheme<Theme>();

  return (
    <Flex
      column
      minHeight="100vh"
      height="100%"
      width="100%"
      marginTop={!!offset && `-${theme.mixins.toolbar.minHeight}px`}
      {...props}
    >
      {children}
    </Flex>
  );
};
