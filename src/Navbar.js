import { ReactComponent as CLogo } from "./img/companyLogo.svg";
import { ReactComponent as Home } from "./img/home.svg";
import { ReactComponent as Help } from "./img/Help.svg";
import { ReactComponent as Profile } from "./img/Profile.svg";
import { ReactComponent as Sun } from "./img/Sun.svg";
import { ReactComponent as Three } from "./img/treeLine.svg";
import useDarkMode from "./useDarkMode";
const Navbar = () => {
  const [theme, toggleTheme] = useDarkMode();
  return (
    <nav>
      <div className="background"></div>
      <div className="logo">
        <CLogo></CLogo>
      </div>
      <div className="navbar-items">
        <div className="right-items">
          <div className="navbar-item">
            <Profile></Profile>
          </div>
          <div className="navbar-item">
            <Home></Home>
          </div>
          <div className="navbar-item">
            <Help></Help>
          </div>
          <div className="navbar-item">
            <Sun cursor="pointer" onClick={toggleTheme}></Sun>
          </div>
        </div>
        <div className="three navbar-item">
          <Three></Three>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
