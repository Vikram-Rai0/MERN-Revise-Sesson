import React, { useState } from "react";
import { ThemeContext } from "./ThemeContext";
import Navbar from "./Navbar";
import Content from "./Content";

const ToggleColor = () => {
    const [theme, setTheme] = useState("light");

    const toggleTheme = () => {
        setTheme((prev) => (prev === "light" ? "dark" : "light"));
    };

    return (
        <ThemeContext.Provider value={{ theme, toggleTheme }}>
            <div
                className={`min-h-screen ${theme === "light" ? "bg-white text-black" : "bg-gray-900 text-white"
                    }`}
            >
                <Navbar />
                <Content />
            </div>
        </ThemeContext.Provider>
    );
};

export default ToggleColor;
