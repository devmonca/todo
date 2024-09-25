import { useContext, useState, useEffect } from 'react'
import styles from './App.module.css'
import { AddTask } from './components/main/AddTask'
import { ButtonTheme } from './components/head/ButtonTheme'
import { Filter } from './components/head/Filter'
import { SearchInput } from './components/head/SearchInput'
import { ModalAddTask } from './components/main/ModalAddTask'
import { TaskType } from './components/main/TaskItem'
import { TaskList } from './components/main/TaskList'
import { ThemeContext } from './context/ThemeContext'
import { ModalEditTask } from './components/main/ModalEditTask'
function App() {
  const [openModalAddTask, setOpenModalAddTask] = useState(false)
  const [openModalEditTask, setOpenModalEditTask] = useState(false)
  const [taskToEdit, setTaskToEdit] = useState('');
  const [valueToEdit, setValueToEdit] = useState(null);
  const {theme} = useContext(ThemeContext)

  useEffect(() => {
    if (theme === 'dark') {
      document.body.classList.add('dark');
    } else {
      document.body.classList.remove('dark');
    }
  }, [theme]);

  const [searchTerm, setSearchTerm] = useState('');
  const [filterState, setFilterState] = useState('ALL');
  const [tasks, setTasks] = useState<TaskType[]>([
    {
      id: '1',
      content: 'Pegar a priminha do carlin',
      status: false
    }
  ]);

  const filteredTasks = tasks.filter(task => {
    const matchesSearch = task.content.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesFilter = filterState === 'ALL' ||
      (filterState === 'Complete' && task.status) ||
      (filterState === 'Incomplete' && !task.status);

    return matchesSearch && matchesFilter;
  });

  tasks.forEach(e=>console.log(e))
  return (
    <>
    <div className={`App ${theme === "dark" ? "dark" : ""}`}>
      <div className={styles.wrapper}>
        <header>
          <h1>TODO LIST</h1>
          <nav className={styles.navControl}>
            <SearchInput setSearchTerm={setSearchTerm}/>
            <Filter filterState={filterState}setFilterState={setFilterState}/>
            <ButtonTheme/>
          </nav>
        </header>
        <main>
          <TaskList tasks={filteredTasks} setTasks={setTasks}/>
          <AddTask
            setOpenModal={setOpenModalAddTask}
            openModal={openModalAddTask}
          />
        </main>
        <ModalAddTask
          isOpen={openModalAddTask}
          setOpenModal={setOpenModalAddTask}
          tasks={tasks}
          setTasks={setTasks}
        />
        <ModalEditTask
          oldValue=''
          isOpen={openModalEditTask}
          setOpenModal={setOpenModalEditTask}
          tasks={tasks}
          setTasks={setTasks}
        />
      </div>
    </div>
    </>
  )
}

export default App
