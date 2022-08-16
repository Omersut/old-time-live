import { RiFolderWarningFill } from "react-icons/ri";
import Info from "./Info";

const Footer = () => {
  return (
    <div className="footer">
      <ul className="nav">
        <li>
          <RiFolderWarningFill size={60} />
        </li>
        <Info />
      </ul>
    </div>
  );
};

export default Footer;
