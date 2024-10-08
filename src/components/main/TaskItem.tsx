import { useContext } from "react";
import { ModalContext } from "../../context/ModalEditContext";
import { GoPencil } from "react-icons/go";
import { GoTrash } from "react-icons/go";

export interface TaskType {
    id: string,
    content: string,
    status: boolean
}

export interface TaskProps {
    task: TaskType; // formato de uma task
    setTasks: React.Dispatch<React.SetStateAction<TaskType[]>>;
    tasks: TaskType[]; // formato de uma lista de tasks
    setTaskToEdit: React.Dispatch<React.SetStateAction<TaskType | null>> // definir qual task 
}

export function TaskItem({ task, setTasks, tasks,setTaskToEdit }: TaskProps) {

    function handleDeleteTask(textTask: string) {
        if (!setTasks || !tasks) return; // se for falsy retorna
        const tasksWithoutTaskRemoved = tasks.filter(tarefa => tarefa.content !== textTask);
        setTasks(tasksWithoutTaskRemoved);
    }

    function handleModifiedStatus(textTask: string) {
        if (!setTasks || !tasks) return;
        const tasksWithTaskUpdate = tasks.map(tarefa =>
            tarefa.content === textTask ? 
                { ...tarefa, status: !tarefa.status } // troca o valor booleano da task
                : tarefa
        );
        setTasks(tasksWithTaskUpdate);
    }

    const {isOpen,setIsOpen} = useContext(ModalContext) // consumindo contexto

    const handleOpenModalEdit = (task: TaskType)=>{
        setTaskToEdit(task) // envia a task que foi clicada
        setIsOpen(!isOpen) // abre o ModalEdit
    }

    return (
        <>
            <label id={task.id} className={`flex flex-row justify-between py-4 px-0 bg-primary border-b border-secondary`}>
                <div className='flex flex-row items-center'>
                    <button className='bg-transparent' onClick={()=>handleModifiedStatus(task.content)}>
                        <img 
                            className="text-2xl bg-primary cursor-pointer"
                            src={task.status? 
                            "/retangulocheck.svg"
                            :"/retangulovazio.svg"}
                        />
                    </button>
                    <p className={`text-color-text text-xl ml-4 w-auto  ${task.status? 'text-opaque-text line-through':''}`}>{task.content}</p>
                </div>
                
                <div className="flex gap-2.5 justify-around px-2 max-w-16">
                    <button 
                        onClick={()=>{handleOpenModalEdit(task)}} 
                        className='bg-primary text-gray-300 text-xl cursor-pointer hover:text-secondary active:text-secondary'
                    >
                        <GoPencil/>
                    </button>
                    <button 
                        onClick={()=>handleDeleteTask(task.content)}
                        className='bg-primary text-gray-300 text-xl cursor-pointer  hover:text-red active:text-red'
                    > 
                        <GoTrash/>
                    </button>
                </div>
            </label>
        </>
       
    );
}

