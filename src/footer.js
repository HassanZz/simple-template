import { ReactComponent as Telegram } from "./img/Telegram.svg";
import { ReactComponent as Instagram } from "./img/Instagram.svg";
import { ReactComponent as Whatsapp } from "./img/Whatsapp.svg";
import { ReactComponent as C } from "./img/C.svg";

const Footer = () => {
  return (
    <div className="footer">
      <p>please don't trust fake accounts</p>
      <div className="social-media">
        <span className="telegram">
          <Telegram></Telegram>
        </span>
        <span className="instagram">
          <Instagram></Instagram>
        </span>
        <span className="whatsapp">
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
