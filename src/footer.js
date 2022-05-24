import { ReactComponent as Telegram } from "./img/Telegram.svg";
import { ReactComponent as Instagram } from "./img/Instagram.svg";
import { ReactComponent as Whatsapp } from "./img/Whatsapp.svg";
import { ReactComponent as C } from "./img/C.svg";

const Footer = () => {
  return (
    <div className="footer">
      <p className="text-style1 footer-p1">
        please don't trust fake accounts. For more info, please follow our
        official channels!
      </p>
      <div className="social-media">
        <span className="social-media-items">
          <Telegram></Telegram>
        </span>
        <span className="social-media-items">
          <Instagram className="insta"></Instagram>
        </span>
        <span className="social-media-items">
          <Whatsapp></Whatsapp>
        </span>
      </div>
      <div className="under-footer">
        <span className="c">
          <C></C>
        </span>
        <p>2021 BM CO. All Rights Reserved</p>
      </div>
    </div>
  );
};

export default Footer;
