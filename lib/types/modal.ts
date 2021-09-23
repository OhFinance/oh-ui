import { ReactNode } from "react";

export interface ModalProps {
  title: string;
  isOpen: boolean;
  onDismiss: () => void;
}
