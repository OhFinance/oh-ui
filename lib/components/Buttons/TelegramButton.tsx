import { MediaButton } from "./components/MediaButton";
import { FaTelegramPlane } from "react-icons/fa";
import urls from "../../config/urls";

export const TelegramButton = () => {
  return (
    <MediaButton
      name="telegram"
      href={urls.telegram}
      icon={<FaTelegramPlane />}
    />
  );
};
