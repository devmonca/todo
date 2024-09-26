import styles from './TaskItem.module.css'
import { GoPencil } from "react-icons/go";
import { GoTrash } from "react-icons/go";
import { useContext } from "react";
import { ModalContext } from "../../context/ModalEditContext";

export interface TaskType {
    id: string,
    content: string,
    status: boolean
}

export interface TaskProps {
    task: TaskType;
    setTasks: React.Dispatch<React.SetStateAction<TaskType[]>>;
    tasks: TaskType[];
    setTaskToEdit: React.Dispatch<React.SetStateAction<TaskType | null>>
}

export function TaskItem({ task, setTasks, tasks,setTaskToEdit }: TaskProps) {

    function handleDeleteTask(textTask: string) {
        if (!setTasks || !tasks) return;
        const tasksWithoutTaskRemoved = tasks.filter(tarefa => tarefa.content !== textTask);
        console.log(tasksWithoutTaskRemoved);
        setTasks(tasksWithoutTaskRemoved);
    }

    function handleModifiedStatus(textTask: string) {
        if (!setTasks || !tasks) return;
        const tasksWithTaskUpdate = tasks.map(tarefa =>
            tarefa.content === textTask? 
                { ...tarefa, status: !tarefa.status }
                : tarefa
        );
        console.log(tasksWithTaskUpdate);
        setTasks(tasksWithTaskUpdate);
    }

    const {isOpen,setIsOpen} = useContext(ModalContext)

    const handleOpenModalEdit = (task: TaskType)=>{
        setTaskToEdit(task)
        setIsOpen(!isOpen)
    }

    return (
        <>
            <label id={task.id} className={`${styles.taskItem} ${task.status? styles.complete: ''}`}>
                <div className={styles.aboutTask}>
                    <button onClick={()=>handleModifiedStatus(task.content)}>
                        <img 
                            className={styles.status}
                            src={task.status? 
                            "../src/assets/retangulocheck.svg"
                            :"../src/assets/retangulovazio.svg"}
                        />
                    </button>
                    <p>{task.content}</p>
                </div>
                
                <div className={styles.options}>
                    <button 
                        onClick={()=>{handleOpenModalEdit(task)}} 
                        className={`${styles.optionBtn} ${styles.edit}`}
                    >
                        <GoPencil/>
                    </button>
                    <button 
                        onClick={()=>handleDeleteTask(task.content)}
                        className={`${styles.optionBtn} ${styles.delete}`}
                    > 
                        <GoTrash/>
                    </button>
                </div>
            </label>
        </>
       
    );
}

