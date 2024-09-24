import { useState } from 'react';
import styles from './Filter.module.css'
import { IoIosArrowDown } from "react-icons/io";
import { IoIosArrowUp } from "react-icons/io";


export function Filter(){
    const [isOpen, setIsOpen] = useState(false);
    const [selectedOption, setSelectedOption] = useState('All');
    
    const toggleDropdown = () => setIsOpen(!isOpen)

    const handleOptionClick = (option: string)=>{
        setSelectedOption(option)
        setIsOpen(false)
    }
    return (
        <div className={styles.dropdownContainer}>
            <div className={`${styles.dropdownHeader} ${isOpen? styles.border : ''}`} onClick={toggleDropdown}>
                {selectedOption}
                <span>
                    {isOpen ? (
                        <IoIosArrowDown className={styles.arrow}/>) : (
                            <IoIosArrowUp className={styles.arrow}/>
                        )}
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

