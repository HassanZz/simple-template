import { useState } from "react";
import { useEffect } from "react";
import App from "./App";
import Navbar from "./Navbar";

const useDarkMode = () => {
  const [theme, setTheme] = useState("light");
  const toggleTheme = () => {
    if (theme === "light") {
      localStorage.setItem("theme", "dark");
      setTheme("dark");
    } else {
      localStorage.setItem("theme", "light");
      setTheme("light");
    }
  };
  useEffect(() => {
    const localTheme = localStorage.getItem("theme");
    if (localTheme) {
      setTheme(localTheme);
    }
  }, [Navbar, App]);
  return [theme, toggleTheme];
};

export default useDarkMode;
