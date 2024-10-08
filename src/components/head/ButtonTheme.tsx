import { FiMoon } from "react-icons/fi";
import { CiSun } from "react-icons/ci";
import { useContext, useState } from "react";
import { ThemeContext } from "../../context/ThemeContext";

export function ButtonTheme(){

    const {theme,setTheme} = useContext(ThemeContext) // usando as props vindas do contexto
    const [isLight, setIsLight]= useState(true)
    
    const toggleTheme = () => {
        setTheme(theme === "light" ?
            "dark" 
            : "light"
        )
        setIsLight(!isLight)
    }
    
    return (
        <button 
            className="bg-secondary border-none rounded-md p-1 max-h-10 
            cursor-pointer active:shadow-2 max-[575px]:absolute max-[575px]:top-6 max-[575px]:right-6"
            onClick={toggleTheme}
        >
            {isLight? (
                <FiMoon size={30} color='white'/>
            ): (
                <CiSun size={30} color='white'/>
            )}
        </button>
    )
}