import { createContext, useState } from "react";

const ThemeContext = createContext();

function ThemeProvider({children}){
    const [theme, setTheme] = useState("dark");
    const toggleTheme = () => {
        setTheme(theme === "dark" ? "light" : "dark");
    };
    // const values = {
    //     theme
    // }
    return <ThemeContext.Provider value={{theme, toggleTheme}}>
        {children}
    </ThemeContext.Provider>
}

export {ThemeContext,ThemeProvider};