import styles from './Modal.module.css'
import { ChangeEvent, useContext, useState,useEffect } from 'react'
import { ModalContext } from '../../context/ModalEditContext'
import { TaskType } from './TaskItem'

interface ModalEditTaskProps{
    tasks: TaskType[]; 
    setTasks: React.Dispatch<React.SetStateAction<TaskType[]>>;
    task: TaskType | null;  
}

export function ModalEditTask({ task,tasks,setTasks}: ModalEditTaskProps){
    if (!task) return null; // se não tiver task
    
    const {isOpen, setIsOpen} = useContext(ModalContext) // estado do modal
    const [newValue, setNewValue] = useState(task.content)

    const handleCloseModal = () =>{
        setIsOpen(false)
    }

    function handleSave() {
        const updatedTasks = tasks.map(tarefa =>
            tarefa.id === task!.id ? 
            { ...tarefa, content: newValue } 
            : tarefa
        );
        setTasks(updatedTasks);
        setIsOpen(false);
    }

    useEffect(() => {
        if (task) {
            setNewValue(task.content); // atualiza com o valor da task
        }
    }, [task]);

    function handleNewValueInput(event: ChangeEvent<HTMLInputElement>){
        setNewValue(event.target.value)
    }
    
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
                          onClick={handleSave}>
                            SAVE
                        </button>
                    </footer>
                </div>
            </div>
        )
    }
    return null
}