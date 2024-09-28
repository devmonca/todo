import styles from './Filter.module.css'
import { useState } from 'react';
import { IoIosArrowDown } from "react-icons/io";
import { IoIosArrowUp } from "react-icons/io";

interface FilterProps{
    filterState: string // estado do filtro
    setFilterState: React.Dispatch<React.SetStateAction<string>>; // define o estado
}

export function Filter({filterState,setFilterState}: FilterProps){
    const [isOpen, setIsOpen] = useState(false); // estado do dropdown
    const [selectedOption, setSelectedOption] = useState(filterState); // variável auxiliar que vem do App
    
    const toggleDropdown = () => setIsOpen(!isOpen) // abre e fecha o dropdown

    const handleOptionClick = (option: string)=>{ // seleciona o estado do filtro
        setFilterState(option)
        setSelectedOption(option)
        setIsOpen(false)
    }
    
    return (
        <div className={styles.dropdownContainer}>
            <div className={`${styles.dropdownHeader} ${isOpen? styles.border : ''}`} onClick={toggleDropdown}>
                {selectedOption} {/*estado do filtro*/}
                <span>
                    {isOpen ?
                        (<IoIosArrowDown className={styles.arrow}/>) 
                        :(<IoIosArrowUp className={styles.arrow}/>)
                    }
                </span>
            </div>
            {isOpen && (
            <ul className={styles.dropdownList} role="listbox">
                <li
                    className={`${styles.dropdownOption} ${selectedOption === 'All' ? styles.selected : ''}`}
                    onClick={() => handleOptionClick('ALL')}
                    role="option"
                    aria-selected={selectedOption === 'ALL'}
                >
                    All
                </li>
                <li
                    className={`${styles.dropdownOption} ${selectedOption === 'Complete' ? styles.selected : ''}`}
                    onClick={() => handleOptionClick('Complete')}
                    role="option"
                    aria-selected={selectedOption === 'Complete'}
                >
                    Complete
                </li>
                <li
                    className={`${styles.dropdownOption} ${selectedOption === 'Incomplete' ? styles.selected : ''}`}
                    onClick={() => handleOptionClick('Incomplete')}
                    role="option"
                    aria-selected={selectedOption === 'Incomplete'}
                >
                    Incomplete
                </li>
            </ul>
            )}
        </div>
    )
}

