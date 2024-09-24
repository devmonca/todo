import styles from './SearchInput.module.css'
import { IoSearchOutline } from "react-icons/io5";


export function SearchInput(){

    return (
        <div className={styles.searchBar}>
            <input type="text" placeholder='Search your task'/>
            <button>
                < IoSearchOutline className={styles.iconSearch}/>
            </button>
        </div>
    )
}
