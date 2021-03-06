import { Box, Paper } from "@material-ui/core";
import { FC } from "react";

export interface SurfaceProps {
  p?: number;
}

export const Surface: FC<SurfaceProps> = ({ p, children }) => {
  return (
    <Paper variant="outlined" style={{ borderRadius: 16 }}>
      <Box p={p === undefined ? 3 : p}>{children}</Box>
    </Paper>
  );
};
