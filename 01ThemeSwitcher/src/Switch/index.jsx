import { useTheme } from "../Contexts/ThemeContext";

const Switch = () => {
    const { theme, toggleTheme } = useTheme();
    
    return (
        <div className="switch" onClick={toggleTheme}>
            <div className={`switch__circle ${theme === "dark" ? "switch__circle--dark" : ""}`}></div>
        </div>
    )
}

export default Switch;