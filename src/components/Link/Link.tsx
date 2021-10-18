import { Box, makeStyles } from "@material-ui/core";
import { FC, useCallback } from "react";
import { useHistory } from "react-router";
import { Text } from "..";

const useStyles = makeStyles((theme) => ({
  hover: {
    cursor: "pointer",
  },
  link: {
    color: theme.palette.text.primary,
    "&:hover": {
      color: theme.palette.text.secondary,
    },
  },
}));

export interface LinkProps {
  href: string;
  external?: boolean;
}

export const Link: FC<LinkProps> = ({ href, external = false, children }) => {
  const classes = useStyles();
  const history = useHistory();

  const handleClick = useCallback(() => {
    if (external) {
      const newWindow = window.open(href, "_blank", "noopener,noreferrer");
      if (newWindow) {
        newWindow.opener = null;
      }
    } else {
      history.push(href);
    }
  }, [external, href, history]);

  return (
    <Box component="a" className={classes.hover} onClick={handleClick}>
      <Text align="center" className={classes.link}>
        {children}
      </Text>
    </Box>
  );
};
