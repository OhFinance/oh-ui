import { useMediaQuery, useTheme } from "@material-ui/core";

export const useMobile = () => {
  const theme = useTheme();
  const mobile = useMediaQuery(theme.breakpoints.down("sm"));
  return mobile;
};
