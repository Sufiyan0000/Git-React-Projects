import { useContext,createContext,useState } from "react";

const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
    const [theme,setTheme] = useState("light");
    
    return (
        <ThemeContext.Provider value={{theme,toggleTheme: () => setTheme((theme) => theme === "light" ? "dark" : "light")}}>
            {children}
        </ThemeContext.Provider>
    )
}

export const useTheme = () => {
    return useContext(ThemeContext);
}