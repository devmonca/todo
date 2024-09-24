import { TaskItem } from './TaskItem'
import styles from './TaskList.module.css'

interface Props{
    hasList: boolean
}

export function TaskList({hasList}: Props){
    {hasList && (
        <div className={styles.list}>
        <img src="../src/assets/detetive.png" alt="" />
        <p>Empty...</p>
    </div>
    )}

    return(
        <div className={styles.list}>
            <TaskItem status={false}/>
        </div>
    )

}