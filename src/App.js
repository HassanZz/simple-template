import "./App.css";
import Footer from "./footer";
import Form from "./Form";
import { ReactComponent as Logo } from "./img/logo.svg";
import Navbar from "./Navbar";
import { useMediaQuery } from "react-responsive";
import useDarkMode from "./useDarkMode";

const App = () => {
  const DesktopOrLaptop = useMediaQuery({ query: "(min-width: 1024px)" });
  const isTablet = useMediaQuery({ query: "(max-width: 1024px)" });
  const isMobile = useMediaQuery({ query: "(max-width: 480px)" });
  return (
    <div
      className="App"
      style={{
        background:
          localStorage.getItem("theme") === "light" ? "#111111" : "#ffffff",
        transition: ".2s all",
      }}
    >
      <Navbar />
      <Footer></Footer>

      <div className="container">
        <div className="app-form">
          <Form />
        </div>
        <div className="woman-img">{!isMobile && <Logo />}</div>
      </div>
    </div>
  );
};

export default App;
