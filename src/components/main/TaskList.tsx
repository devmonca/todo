import { TaskItem } from './TaskItem'
import styles from './TaskList.module.css'
import { TaskType } from './TaskItem'

interface TaskListProps {
    tasks?: TaskType[];
    setTasks: React.Dispatch<React.SetStateAction<TaskType[]>>;
}

export function TaskList({ tasks, setTasks }: TaskListProps) {
    return (
        <div className={styles.list}>
            {tasks?.map(task => (
                <TaskItem key={task.id} task={task} setTasks={setTasks} tasks={tasks} />
            ))}
        </div>
    );
}