import styles from './App.module.css'
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

  const [openModalAddTask, setOpenModalAddTask] = useState(false)
  const [taskToEdit, setTaskToEdit] = useState<TaskType | null>(null);
  const {theme} = useContext(ThemeContext)
  const [searchTerm, setSearchTerm] = useState('');
  const [filterState, setFilterState] = useState('ALL');

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
    const matchesSearch = task.content.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesFilter = filterState === 'ALL' ||
      (filterState === 'Complete' && task.status) ||
      (filterState === 'Incomplete' && !task.status);

    return matchesSearch && matchesFilter;
  });

  return (
    <>
    <div className={`App ${theme === "dark" ? "dark" : ""}`}>
      <div className={styles.wrapper}>
        <header>
          <h1>TODO LIST</h1>
          <nav className={styles.navControl}>
            <SearchInput setSearchTerm={setSearchTerm}/>
            <Filter 
              filterState={filterState}
              setFilterState={setFilterState}
            />
            <ButtonTheme/>
          </nav>
        </header>
        <main>
          <TaskList
            setTaskToEdit={setTaskToEdit}
            tasks={filteredTasks}
            setTasks={setTasks}
          />
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
          task={taskToEdit}
          tasks={tasks}
          setTasks={setTasks}
        />
      </div>
    </div>
    </>
  )
}

export default App
