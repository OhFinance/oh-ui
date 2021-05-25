import { MediaButton } from "./components/MediaButton";
import { FaHome } from "react-icons/fa";
import urls from "../../config/urls";

export const HomeButton = () => {
  return <MediaButton name="home" href={urls.home} icon={<FaHome />} />;
};
