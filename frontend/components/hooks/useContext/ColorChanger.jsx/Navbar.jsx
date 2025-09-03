import React, { useContext } from "react";
import { ThemeContext } from "./ThemeContext";

const Navbar = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <nav
      className={`p-4 ${
        theme === "light" ? "bg-gray-200" : "bg-gray-800 text-white"
      }`}
    >
      <h1 className="text-xl">My App</h1>
      <button
        onClick={toggleTheme}
        className="px-4 py-2 rounded bg-blue-500 text-white ml-4"
      >
        Switch to {theme === "light" ? "Dark" : "Light"} Mode
      </button>
    </nav>
  );
};

export default Navbar;
