import { createContext } from "react";

export interface IVersionContext {
  version: string;
}

export const VersionContext = createContext<IVersionContext>({
  version: "",
});

export const VersionProvider: React.FC<IVersionContext> = ({
  version,
  children,
}) => {
  return (
    <VersionContext.Provider
      value={{
        version,
      }}
    >
      {children}
    </VersionContext.Provider>
  );
};
