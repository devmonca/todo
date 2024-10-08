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
            <div className='fixed top-0 bottom-0 right-0 left-0 bg-background-dark-7 flex justify-center items-center max-[576px]:w-11/12'>
                <div className='w-500 h-72 bg-primary border border-white rounded-2xl py-4 px-8 relative flex flex-col items-center'>
                    <h1 className='text-center font-semibold text-2xl mb-6 font-kanit'>EDIT TASK</h1>
                    <input
                        className='rounded text-base bg-transparent py-2 px-4 font-inter w-full mb-16 text-secondary border border-solid border-secondary focus:outline-none focus:shadow-2 focus:shadow-secondary focus:border focus:border-secondary hover:shadow-2 hover:shadow-secondary hover:outline-none'      
                        type="text"
                        value={newValue}
                        onChange={handleNewValueInput}
                        autoFocus
                    />
                    <footer className='absolute bottom-4 flex justify-between w-11/12'>
                        <button 
                        className='font-kanit py-1 px-2 rounded border border-solid border-secondary cursor-pointer text-lg w-28 h-9 font-semibold bg-primary text-secondary'
                        onClick={handleCloseModal}>
                            CANCEL
                        </button>
                        <button 
                        className='font-kanit py-1 px-2 rounded border border-solid border-secondary cursor-pointer text-lg w-28 h-9 font-semibold text-primary bg-secondary'
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