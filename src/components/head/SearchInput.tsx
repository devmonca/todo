import { ChangeEvent, useState } from 'react';
import styles from './SearchInput.module.css'
import { IoSearchOutline } from "react-icons/io5";

interface SearchInputProps{
    setSearchTerm: React.Dispatch<React.SetStateAction<string>>;
}

export function SearchInput({setSearchTerm}: SearchInputProps){
    const [newTextSearch, setNewTextSearch] = useState('')
    
    function handleNewSearch(event: ChangeEvent<HTMLInputElement>){
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
