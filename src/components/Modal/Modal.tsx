import { FC } from "react";
import CloseIcon from "@material-ui/icons/Close";
import {
  Box,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  IconButton,
  makeStyles,
} from "@material-ui/core";

export interface ModalProps {
  title?: string;
  isOpen?: boolean;
  onDismiss?: () => void;
  maxWidth?: "sm" | "md" | "lg";
  fullWidth?: boolean;
  scroll?: "paper" | "body";
  restrict?: boolean;
  p?: number;
}

const useStyles = makeStyles((theme) => ({
  closeButton: {
    position: "absolute",
    top: theme.spacing(1),
    right: theme.spacing(1),
    color: theme.palette.grey[500],
  },
}));

export const Modal: FC<ModalProps> = ({
  title,
  isOpen,
  onDismiss,
  maxWidth,
  fullWidth,
  scroll,
  p,
  children,
}) => {
  const classes = useStyles();

  return (
    <Dialog
      open={!!isOpen}
      onClose={onDismiss}
      maxWidth={maxWidth || "md"}
      fullWidth={!!fullWidth}
      scroll={scroll || undefined}
    >
      <DialogTitle>
        {title}

        <IconButton
          aria-label="close"
          className={classes.closeButton}
          onClick={onDismiss}
        >
          <CloseIcon />
        </IconButton>
      </DialogTitle>
      <DialogContent dividers>
        <Box p={p ?? 3}>{children}</Box>
      </DialogContent>
      {/* <DialogActions>

      </DialogActions> */}
    </Dialog>
  );
};
