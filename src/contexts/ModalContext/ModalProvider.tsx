import { Backdrop } from "@material-ui/core";
import {
  cloneElement,
  FC,
  isValidElement,
  ReactNode,
  useCallback,
  useState,
} from "react";
import { ModalContext } from "./ModalContext";

export const ModalProvider: FC = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [content, setContent] = useState<ReactNode>();

  const handlePresent = useCallback(
    (modalContent: ReactNode) => {
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
