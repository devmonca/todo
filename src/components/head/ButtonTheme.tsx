import { FiMoon } from "react-icons/fi";
import { CiSun } from "react-icons/ci";
import styles from './ButtonTheme.module.css'
import { useContext, useState } from "react";
import { ThemeContext } from "../../context/ThemeContext";
export function ButtonTheme(){

    const {theme,setTheme} = useContext(ThemeContext)
    const [isLight, setIsLight]= useState(true)
    const toggleTheme = () => {
        setTheme(theme === "light" ? "dark" : "light") // Alteração aqui
        setIsLight(!isLight)
    }
    return (
        <button className={styles.theme} onClick={toggleTheme}>
            {isLight? (
                <FiMoon size={30} color='white'/>
            ): (
                <CiSun size={30} color='white'/>
            )}
        </button>
    )
}