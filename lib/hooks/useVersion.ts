import { useContext } from "react";
import { VersionContext } from "../contexts/VersionContext";

export const useVersion = () => {
  const { version } = useContext(VersionContext);

  return version;
};
