import React, { useContext } from "react";
import { ThemeContext } from "./ThemeContext";

const Content = () => {
    const { theme } = useContext(ThemeContext);

    return (
        <div className="p-10">
            <h2 className="text-2xl">Welcome to {theme} mode 🌗</h2>
            <p>
                This content changes its style based on the theme provided by context.
            </p>
        </div>
    );
};

export default Content;
