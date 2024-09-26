import { ChangeEvent, useState } from 'react';
import styles from './Modal.module.css'
import { TaskType } from './TaskItem'

interface ModalAddTaskProps{
    isOpen: boolean
    setOpenModal: React.Dispatch<React.SetStateAction<boolean>>
    tasks: TaskType[];
    setTasks: React.Dispatch<React.SetStateAction<TaskType[]>>;
}

export function ModalAddTask({ isOpen,setOpenModal,setTasks }: ModalAddTaskProps){
    const [inputValue, setInputValue] = useState('')

    function handleNewTaskChange(event: ChangeEvent<HTMLInputElement>){
        setInputValue(event.target.value)
    }
    
    const handleCloseModal = () =>{
        setOpenModal(false)
 
    }

    const handleCreateNewTask = ()=>{
        setTasks((prevTasks)=>[...prevTasks, {id: String(prevTasks.length+1),content: inputValue, status: false}])
        handleCloseModal()
        setInputValue('')
    }

    
    if(isOpen){
        return (
            <div className={styles.modal}>
                <div className={styles.container}>
                    <h1>NEW TASK</h1>
                    <input
                        placeholder='Input you task'
                        className={styles.inputTask} 
                        type="text"
                        onChange={handleNewTaskChange}
                        value={inputValue}
                        autoFocus
                    />
                    <footer>
                        <button 
                          className={`${styles.decisionBtn} ${styles.cancel}`}
                          onClick={handleCloseModal}>
                            CANCEL
                        </button>
                        <button 
                          className={`${styles.decisionBtn} ${styles.confirm}`}
                          onClick={handleCreateNewTask}>
                            SAVE
                        </button>
                    </footer>
                </div>
                {/* <h1>{content}</h1> */}
                
            </div>
        )
    }
    return null
}