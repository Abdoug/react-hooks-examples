import React, { createContext, useContext, useState } from 'react'

export const ThemeContext = createContext();

export const useDarkTheme = () => useContext(ThemeContext); 

function ThemeProvider({ children }) {
    const [darkTheme, setDarkTheme] = useState(true);

    function toggleTheme() {
        setDarkTheme(darkTheme => !darkTheme);
    }

    return (
        <ThemeContext.Provider value={{darkTheme, toggleTheme}}>
            {children}
        </ThemeContext.Provider>
    )
}

export default ThemeProvider