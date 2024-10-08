import { ChangeEvent, useState } from 'react';
import { TaskType } from './TaskItem'

interface ModalAddTaskProps{
    isOpen: boolean
    setOpenModal: React.Dispatch<React.SetStateAction<boolean>>
    tasks: TaskType[]; // não usada / retirar 
    setTasks: React.Dispatch<React.SetStateAction<TaskType[]>>;
}

export function ModalAddTask({ isOpen,setOpenModal,setTasks }: ModalAddTaskProps){

    const [inputValue, setInputValue] = useState('') // valor digitado

    function handleNewTaskChange(event: ChangeEvent<HTMLInputElement>){
        setInputValue(event.target.value) // define o valor a cada caractere digitado
    }
    
    const handleCloseModal = () =>{
        setOpenModal(false)
    }

    const handleCreateNewTask = ()=>{
        setTasks((prevTasks)=>[
            ...prevTasks, {id: String(prevTasks.length+1),content: inputValue, status: false}
        ]) // cria e adiciona uma task
        handleCloseModal()
        setInputValue('')
    }
    
    if(isOpen){
        return (
            <div className='fixed top-0 bottom-0 right-0 left-0 bg-background-dark-7 flex justify-center items-center max-[576px]:w-11/12'>
                <div className='w-500 h-72 bg-primary border border-white rounded-2xl py-4 px-8 relative flex flex-col items-center'>
                    <h1 className='text-center font-semibold text-2xl mb-6 font-kanit'>NEW TASK</h1>
                    <input
                        className='rounded text-base bg-transparent py-2 px-4 font-inter w-full mb-16 text-secondary border border-solid border-secondary focus:outline-none focus:shadow-2 focus:border focus:border-secondary hover:shadow-2 hover:shadow-secondary hover:outline-none'
                        placeholder='Input you task'
                        type="text"
                        onChange={handleNewTaskChange}
                        value={inputValue}
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
                          onClick={handleCreateNewTask}>
                            SAVE
                        </button>
                    </footer>
                </div>
            </div>
        )
    }
    return null
}