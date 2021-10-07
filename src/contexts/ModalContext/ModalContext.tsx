import { createContext, ReactNode } from "react";

export interface IModalContext {
  content?: ReactNode;
  isOpen?: boolean;
  onPresent: (content: ReactNode) => void;
  onDismiss: () => void;
}

export const ModalContext = createContext<IModalContext>(undefined);
