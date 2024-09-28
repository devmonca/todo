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
        <div className={styles.searchBar}>
            <input 
                type="text"
                placeholder='Search your task'
                value={newTextSearch}
                onChange={handleNewSearch}    
            />
            <button>
                < IoSearchOutline className={styles.iconSearch}/>
            </button>
        </div>
    )
}
