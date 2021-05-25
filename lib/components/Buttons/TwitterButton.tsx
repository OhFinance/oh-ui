import { MediaButton } from "./components/MediaButton";
import { FaTwitter } from "react-icons/fa";
import urls from "../../config/urls";

export const TwitterButton = () => {
  return (
    <MediaButton name="twitter" href={urls.twitter} icon={<FaTwitter />} />
  );
};
