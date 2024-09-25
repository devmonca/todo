import styles from './Modal.module.css'
import { ChangeEvent, useContext, useState } from 'react'
import { ModalContext } from '../../context/ModalEditContext'
import { TaskType } from './TaskItem'

interface ModalEditTaskProps{
    isOpen: boolean
    setOpenModal: React.Dispatch<React.SetStateAction<boolean>>
    tasks: TaskType[];
    setTasks: React.Dispatch<React.SetStateAction<TaskType[]>>;
    oldValue: string
}

export function ModalEditTask({ oldValue,tasks,setTasks }: ModalEditTaskProps){
    const [newValue, setNewValue] = useState(oldValue)
    const {isOpen, setIsOpen} = useContext(ModalContext)
    const handleCloseModal = () =>{
        setIsOpen(false)
    }

    function handleEditTask(){
          const updatedTasks = tasks.map(task => {
            if (task.content === oldValue) {
                return { ...task, content: newValue }
            }
            return task
        })
        setTasks(updatedTasks)
        handleCloseModal()
        console.log('Após a edição')
        tasks.forEach(e=>console.log(e))
    }

    function handleNewValueInput(event: ChangeEvent<HTMLInputElement>){
        setNewValue(event?.target.value)
    }
    tasks.forEach(e=>console.log(e))
    if(isOpen){
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
                          onClick={handleEditTask}>
                            SAVE
                        </button>
                    </footer>
                </div>
            </div>
        )
    }
    return null
}