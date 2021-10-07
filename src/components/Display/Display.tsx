import { makeStyles } from "@material-ui/core";
import { Flex, FlexProps } from "../Flex";

const useStyles = makeStyles((theme) => ({
  pullBottom: {
    marginBottom: `-${theme.mixins.toolbar.minHeight}px`,
  },
  pullTop: {
    marginTop: `-${theme.mixins.toolbar.minHeight}px`,
  },
  pushBottom: {
    marginBottom: `${theme.mixins.toolbar.minHeight}px`,
  },
  pushTop: {
    marginTop: `${theme.mixins.toolbar.minHeight}px`,
  },
}));

export interface DisplayProps extends FlexProps {
  pullBottom?: boolean;
  pullTop?: boolean;
  pushBottom?: boolean;
  pushTop?: boolean;
}

export const Display: React.FC<DisplayProps> = ({
  pullBottom,
  pullTop,
  pushBottom,
  pushTop,
  children,
  ...props
}) => {
  const classes = useStyles();

  return (
    <Flex
      column
      minHeight={props.minHeight ?? "100vh"}
      height={props.height ?? "100%"}
      width={props.width ?? "100%"}
      className={`${pullBottom && classes.pullBottom} ${
        pullTop && classes.pullTop
      } ${pushTop && classes.pushTop} ${pushBottom && classes.pushBottom}`}
      {...props}
    >
      {children}
    </Flex>
  );
};
