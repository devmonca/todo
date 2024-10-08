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
            <div className="min-[992px]:py-2.5 min-[992px]:px-20">
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
        <div className="flex justify-center">
            <img className="w-56 h-auto my-8 mx-0" src={theme==='dark'? 
                "/detetivedark.png"
                : "/detetivelight.png"
                }
                alt="detetive procurando tarefas"
            />
        </div>
    )
}