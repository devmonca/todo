import styles from './AddTask.module.css'
import { IoIosAdd } from "react-icons/io";
import React from "react";

interface SendProps{
    openModal: boolean
    setOpenModal: React.Dispatch<React.SetStateAction<boolean>>
}
export function AddTask({setOpenModal, openModal}: SendProps){

    return (
        <button className={styles.btn} onClick={()=>{
            setOpenModal(!openModal)
        }}>
            <IoIosAdd className={styles.icon} color="white"/>
        </button>
    )
}