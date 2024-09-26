import { TaskItem } from './TaskItem'
import styles from './TaskList.module.css'
import { TaskType } from './TaskItem'

interface TaskListProps {
    tasks: TaskType[];
    setTasks: React.Dispatch<React.SetStateAction<TaskType[]>>;
    setTaskToEdit: React.Dispatch<React.SetStateAction<TaskType | null>>;
}

export function TaskList({ tasks, setTasks,setTaskToEdit }: TaskListProps) {
    return (
        <div className={styles.list}>
            {tasks?.map(task => (
                <TaskItem
                    key={task.id} 
                    setTaskToEdit={(task) => setTaskToEdit(task)}
                    task={task}
                    setTasks={setTasks}
                    tasks={tasks} />
            ))}
        </div>
    );
}