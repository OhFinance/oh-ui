import { Backdrop } from "@material-ui/core";
import {
  cloneElement,
  createContext,
  isValidElement,
  useCallback,
  useState,
} from "react";

export interface IModalContext {
  content?: React.ReactNode;
  isOpen?: boolean;
  onPresent: (content: React.ReactNode) => void;
  onDismiss: () => void;
}

export const ModalContext = createContext<IModalContext>({
  onDismiss: () => {},
  onPresent: (content: React.ReactNode) => {},
});

export const ModalProvider: React.FC = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [content, setContent] = useState<React.ReactNode>();

  const handlePresent = useCallback(
    (modalContent: React.ReactNode) => {
      setContent(modalContent);
      setIsOpen(true);
    },
    [setContent, setIsOpen]
  );

  const handleDismiss = useCallback(() => {
    setContent(undefined);
    setIsOpen(false);
  }, [setContent, setIsOpen]);

  return (
    <ModalContext.Provider
      value={{
        isOpen,
        content,
        onPresent: handlePresent,
        onDismiss: handleDismiss,
      }}
    >
      {children}
      {isOpen && (
        <Backdrop open={isOpen}>
          {/* https://material-ui.com/components/backdrop/ */}
          {isValidElement(content) &&
            cloneElement(content, {
              isOpen,
              onDismiss: handleDismiss,
            })}
        </Backdrop>
      )}
    </ModalContext.Provider>
  );
};
