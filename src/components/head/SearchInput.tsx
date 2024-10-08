import styles from './SearchInput.module.css'
import { ChangeEvent, useState } from 'react';
import { IoSearchOutline } from "react-icons/io5";

interface SearchInputProps{
    setSearchTerm: React.Dispatch<React.SetStateAction<string>>; // Props-> Define qual o termo de pesquisa
}
export function SearchInput({setSearchTerm}: SearchInputProps){
    const [newTextSearch, setNewTextSearch] = useState('') // Por padrão é vazia para alcançar todas as tasks

    function handleNewSearch(event: ChangeEvent<HTMLInputElement>){ // Define o termo a cada caractere digitado
        setNewTextSearch(event.target.value)
        setSearchTerm(event.target.value)
    }
    
    return (
        <div className="flex items-center bg-transparent border-secondary border
        py-0 px-2.5 rounded-md max-w-xl w-3/4 hover:outline-transparent hover:shadow-2 hover:shadow-secondary focus:shadow-2 focus:shadow-secondary">
            <input
                type="text"
                placeholder='Search your task'
                value={newTextSearch}
                onChange={handleNewSearch} 
                className='border-none outline-none flex-1 py-0 px-2.5
                text-base rounded-md text-secondary bg-transparent
                focus:outline-none focus:shadow-none 
                placeholder:text-gray-300 max-[575px]:w-3/5 md:w-2/4
                font-inter'
            />
            <button className='bg-transparent'>
                < IoSearchOutline className="border-none text-3xl bg-transparent text-secondary "/>
            </button>
        </div>
    )
}
