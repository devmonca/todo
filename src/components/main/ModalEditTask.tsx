import styles from './Modal.module.css'
import { ChangeEvent, useContext, useState } from 'react'
import { ModalContext } from '../../context/ModalEditContext'

interface ModalEditTaskProps{
    oldValue: string
}

export function ModalEditTask({ oldValue }: ModalEditTaskProps){
    const [newValue, setNewValue] = useState(oldValue)
    const {isOpen, setIsOpen} = useContext(ModalContext)
    const handleCloseModal = () =>{
        setIsOpen(false)
    }

    function handleNewValueInput(event: ChangeEvent<HTMLInputElement>){
        setNewValue(event?.target.value)
    }

    console.log(isOpen)
    if(isOpen){
        console.log('modal on')
        return (
            <div className={styles.modal}>
                <div className={styles.container}>
                    <h1>EDIT TASK</h1>
                    <input 
                        value={newValue}
                        className={styles.inputTask}
                        type="text"
                        onChange={handleNewValueInput}
                        />
                    <footer>
                        <button 
                          className={`${styles.decisionBtn} ${styles.cancel}`}
                          onClick={handleCloseModal}>
                            CANCEL
                        </button>
                        <button 
                          className={`${styles.decisionBtn} ${styles.confirm}`}
                          onClick={handleCloseModal}>
                            SAVE
                        </button>
                    </footer>
                </div>
            </div>
        )
    }
    return null
}