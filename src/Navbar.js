import { ReactComponent as CLogo } from "./img/companyLogo.svg";
import { ReactComponent as Home } from "./img/home.svg";
import { ReactComponent as Help } from "./img/Help.svg";
import { ReactComponent as Profile } from "./img/Profile.svg";
import { ReactComponent as Sun } from "./img/Sun.svg";
import { ReactComponent as Three } from "./img/treeLine.svg";

const Navbar = () => {
  return (
    <nav>
      <div className="background"></div>
      <div className="logo">
        <CLogo></CLogo>
      </div>
      <div className="items">
        <div className="profile">
          <Profile></Profile>
        </div>
        <div className="home">
          <Home></Home>
        </div>
        <div className="help">
          <Help></Help>
        </div>
        <div className="sun">
          <Sun></Sun>
        </div>
        <div className="three">
          <Three></Three>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
