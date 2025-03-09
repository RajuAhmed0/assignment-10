import { useEffect, useState } from "react";
import { MdDarkMode, MdOutlineLightMode } from "react-icons/md";


export const ThemeProvider = () => {
    const [theme, setTheme] = useState(localStorage.getItem('theme') || 'light');

    useEffect(() => {
      document.documentElement.setAttribute('data-theme', theme);
      localStorage.setItem('theme', theme);
    }, [theme]);
  
    
    const toggleTheme = () => {
      setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
    };
  
    return (
      <button
        className=""
        onClick={toggleTheme}
      >
        {theme === 'light' ? <MdDarkMode  className="text-xl"/> : <MdOutlineLightMode  className="text-xl"/>}
      </button>
    );
};
