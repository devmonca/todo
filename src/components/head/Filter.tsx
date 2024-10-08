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
        <div className=" relative inline-block duration-500 font-arial">
            <div className={`${isOpen? 'border-2 border-secondary' : ''}
            w-32 duration-500 font-bold bg-secondary
            text-white border-2 border-secondary
            py-0 px-1 h-10 text-base min-[992px]:text-lg cursor-pointer rounded-md
            flex justify-between items-center relative min-[992px]:w-36
            `} onClick={toggleDropdown}>
                {selectedOption} {/*estado do filtro*/}
                <span>
                    {isOpen ?
                        (<IoIosArrowDown className="mr-1 transition-opacity duration-500 ease-in-out"/>) 
                        :(<IoIosArrowUp className="mr-1 transition-opacity duration-500 ease-in-out"/>)
                    }
                </span>
            </div>
            {isOpen && (
            <ul className="duration-500 absolute bg-white border border-secondary rounded-s w-full z-50 p-0 list-none mt-0.5" role="listbox">
                <li
                    className={`p-1 text-base text-secondary cursor-pointer hover:bg-gray-100 active:bg-gray-100 ${selectedOption === 'All' ? 'bg-gray-100' : ''}`}
                    onClick={() => handleOptionClick('ALL')}
                    role="option"
                    aria-selected={selectedOption === 'ALL'}
                >
                    All
                </li>
                <li
                    className={`p-1 text-base text-secondary cursor-pointer hover:bg-gray-100 active:bg-gray-100 ${selectedOption === 'Complete' ? 'bg-gray-100' : ''}`}
                    onClick={() => handleOptionClick('Complete')}
                    role="option"
                    aria-selected={selectedOption === 'Complete'}
                >
                    Complete
                </li>
                <li
                    className={`p-1 text-base text-secondary cursor-pointer hover:bg-gray-100 active:bg-gray-100 ${selectedOption === 'Incomplete' ? 'bg-gray-100' : ''}`}
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

