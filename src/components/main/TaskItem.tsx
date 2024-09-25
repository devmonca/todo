import { GoPencil } from "react-icons/go";
import { GoTrash } from "react-icons/go";
import styles from './TaskItem.module.css'
import { ModalContext } from "../../context/ModalEditContext";
import { useContext } from "react";
import { ModalEditTask } from "./ModalEditTask";
export interface TaskType {
    id: string,
    content: string,
    status: boolean
}

interface TaskProps {
    task: TaskType;
    setTasks: React.Dispatch<React.SetStateAction<TaskType[]>>;
    tasks: TaskType[];
}

export function TaskItem({ task, setTasks, tasks }: TaskProps) {

    function handleDeleteTask(textTask: string) {
        if (!setTasks || !tasks) return;  // Verificações de segurança
        const tasksWithoutTaskRemoved = tasks.filter(tarefa => tarefa.content !== textTask);
        console.log(tasksWithoutTaskRemoved);
        setTasks(tasksWithoutTaskRemoved);
    }

    function handleModifiedStatus(textTask: string) {
        if (!setTasks || !tasks) return;  // Verificações de segurança
        const tasksWithTaskUpdate = tasks.map(tarefa =>
            tarefa.content === textTask
                ? { ...tarefa, status: !tarefa.status }
                : tarefa
        );
        console.log(tasksWithTaskUpdate);
        setTasks(tasksWithTaskUpdate);
    }

    const {isOpen, setIsOpen} = useContext(ModalContext)

    const handleOpenModalEdit = (content: string)=>{
        console.log('clicado')
        console.log(content)
        setIsOpen(!isOpen)
    }

    let oldValue = task.content

    return (
        <div>
            <label id={task.id} className={`${styles.taskItem} ${task.status? styles.complete: ''}`}>
                <div className={styles.aboutTask}>
                    <button onClick={()=>handleModifiedStatus(task.content)}>
                        <img className={styles.status} src={task.status? "../src/assets/retangulocheck.svg":"../src/assets/retangulovazio.svg"} alt="" />
                    </button>
                    <p>{task.content}</p>
                </div>
                
                <div className={styles.options}>
                    <button onClick={()=>{handleOpenModalEdit(oldValue)}} className={`${styles.optionBtn} ${styles.edit}`}>
                        <GoPencil/>
                    </button>
                    <button onClick={()=>handleDeleteTask(task.content)} className={`${styles.optionBtn} ${styles.delete}`}> 
                        <GoTrash/>
                    </button>
                </div>
            </label>
            {isOpen? (
                <ModalEditTask oldValue={task.content}/>
            ): null}
        </div>
       
    );
}

