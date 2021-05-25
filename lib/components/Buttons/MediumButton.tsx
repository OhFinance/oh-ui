import { MediaButton } from "./components/MediaButton";
import { FaMediumM } from "react-icons/fa";
import urls from "../../config/urls";

export const MediumButton = () => {
  return <MediaButton name="medium" href={urls.medium} icon={<FaMediumM />} />;
};
