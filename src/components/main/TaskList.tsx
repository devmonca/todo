import styles from './TaskList.module.css'
import { useContext } from 'react';
import { ThemeContext } from '../../context/ThemeContext'
import { TaskItem } from './TaskItem'
import { TaskType } from './TaskItem'

interface TaskListProps {
    tasks: TaskType[];
    setTasks: React.Dispatch<React.SetStateAction<TaskType[]>>;
    setTaskToEdit: React.Dispatch<React.SetStateAction<TaskType | null>>;
}

export function TaskList({ tasks, setTasks,setTaskToEdit }: TaskListProps) {
    
    const hasTask = tasks.length ===0? false : true // tem item na lista?
    const {theme} = useContext(ThemeContext) // consumindo o contexto

    if(hasTask){
        return (
            <div className={styles.list}>
            {tasks?.map(task => (
                <TaskItem
                    key={task.id} 
                    setTaskToEdit={(task) => setTaskToEdit(task)}
                    task={task}
                    setTasks={setTasks}
                    tasks={tasks}
                />
            ))}
        </div>
        )
    }
    return (
        <div className={styles.found}>
            <img src={theme==='dark'? 
                "/detetivedark.png"
                : "/detetivelight.png"
                }
                alt="detetive procurando tarefas"
            />
        </div>
    )
}