import { IoIosAdd } from "react-icons/io";
import React from "react";

interface SendProps{
    openModal: boolean
    setOpenModal: React.Dispatch<React.SetStateAction<boolean>>
}
export function AddTask({setOpenModal, openModal}: SendProps){

    return (
        <button className="bg-secondary border-4 border-secondary rounded-full absolute bottom-6 
        right-6 flex cursor-pointer text-5xl shadow-2 shadow-secondary md:right-16 xl:right-72 min-[992px]:right-80" onClick={()=>{
            setOpenModal(!openModal)
        }}>
            <IoIosAdd color="white"/>
        </button>
    )
}