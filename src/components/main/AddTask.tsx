import { IoIosAdd } from "react-icons/io";
import styles from './AddTask.module.css'
import React from "react";

interface SendProps{
    openModal: boolean
    setOpenModal: React.Dispatch<React.SetStateAction<boolean>>
}
export function AddTask({setOpenModal, openModal}: SendProps){

    return (
        <button className={styles.btn} onClick={()=>{
            setOpenModal(!openModal)
            console.log(openModal)
        }}>
            <IoIosAdd className={styles.icon} color="white"/>
        </button>
    )
}