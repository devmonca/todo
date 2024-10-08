import { useContext, useState, useEffect } from 'react'
import { ThemeContext } from './context/ThemeContext'
import { Filter } from './components/head/Filter'
import { ButtonTheme } from './components/head/ButtonTheme'
import { SearchInput } from './components/head/SearchInput'
import { AddTask } from './components/main/AddTask'
import { ModalAddTask } from './components/main/ModalAddTask'
import { TaskType } from './components/main/TaskItem'
import { TaskList } from './components/main/TaskList'
import { ModalEditTask } from './components/main/ModalEditTask'

function App() {

  const [openModalAddTask, setOpenModalAddTask] = useState(false) // Define se o modal de adicionar tarefa está ativo
  const [taskToEdit, setTaskToEdit] = useState<TaskType | null>(null); // Recebe a variável que foi clicada para editar
  const {theme} = useContext(ThemeContext) // Contexto do Tema atual
  const [searchTerm, setSearchTerm] = useState(''); // Recebe e muda o termo a ser pesquisado
  const [filterState, setFilterState] = useState('ALL'); // Filtro das tarefas por padrão ALL

  useEffect(() => {
    if (theme === 'dark') {
      document.body.classList.add('dark');
    } else {
      document.body.classList.remove('dark');
    }
  }, [theme]);

  const [tasks, setTasks] = useState<TaskType[]>([
    {
      id: '1',
      content: 'Primeira tarefa',
      status: false
    }
  ]);

  const filteredTasks = tasks.filter(task => {
    // Cria uma nova lista de tasks com o termo pesquisado
    const matchesSearch = task.content.toLowerCase().includes(searchTerm.toLowerCase()); 
    // Cria uma nova lista de tasks de acordo com o filtro
    const matchesFilter = filterState === 'ALL' ||
      (filterState === 'Complete' && task.status) ||
      (filterState === 'Incomplete' && !task.status);

    return matchesSearch && matchesFilter; // retorna as tarefas filtradas com a pesquisa
  });

  return (
    <>
    <div className={theme === "dark" ? "dark" : ""}> 
      <div className="my-0 mx-auto max-w-3xl">
        <header>
          <h1 className='mt-8 mb-6 text-center font-semibold text-2xl'>TODO LIST</h1>
          <nav className="flex justify-between gap-2">
            <SearchInput setSearchTerm={setSearchTerm}/> {/*permite definir o termo pesquisado*/}
            <Filter 
              filterState={filterState} 
              setFilterState={setFilterState}
            /> {/*filtro atual e função que altera o filtro*/}
            <ButtonTheme/>
          </nav>
        </header>
        <main>
          <TaskList
            setTaskToEdit={setTaskToEdit}
            tasks={filteredTasks}
            setTasks={setTasks}
          /> {/*
            1° envia a permissão de definir qual é a tarefa que deve ir para o ModalEdit
            2° lista de tarefas
            3° permissão de setara tarefas
          */}
          <AddTask
            setOpenModal={setOpenModalAddTask}
            openModal={openModalAddTask}
          /> {/*permissão de abrir o modal e saber qual o estado do mesmo*/}
        </main>
        <ModalAddTask
          isOpen={openModalAddTask}
          setOpenModal={setOpenModalAddTask}
          tasks={tasks}
          setTasks={setTasks}
        /> {/*
          1̣° Recebe o estado do modal e permissão de definir o estado
          2° Recebe a lista de tarefas e a permissão de alterá-la
        */}
        <ModalEditTask
          task={taskToEdit}
          tasks={tasks}
          setTasks={setTasks}
        /> {/*
          1̣° Recebe a task a editar
          2° Recebe a lista de tarefas e a permissão de alterá-la
        */}
      </div>
    </div>
    </>
  )
}

export default App
