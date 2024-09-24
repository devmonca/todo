import { FiMoon } from "react-icons/fi";
import { CiSun } from "react-icons/ci";
import styles from './ButtonTheme.module.css'
import { useState } from "react";
export function ButtonTheme(){
    const [isLight, setIsLight]= useState(true)
    const changeBodyStyle = ()=>{
        document.body.classList.toggle("dark")
        
    }
    return (
        <button className={styles.theme} onClick={changeBodyStyle}>
            {isLight? (
                <FiMoon size={30} color='white'/>
            ): (
                <CiSun size={30} color='white'/>
            )}
        </button>
    )
}