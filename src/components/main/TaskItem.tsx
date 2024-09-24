import { GoPencil } from "react-icons/go";
import { GoTrash } from "react-icons/go";
import styles from './TaskItem.module.css'

interface TaskProps{
    status: boolean
}

export function TaskItem({status}: TaskProps){
   return (
    <div>
         {status ? (
        <div className={styles.taskItem}>
            <img className={styles.status} src="../src/assets/retangulovazio.svg" alt="" />
            <p>Primeira tarefa</p>
            <div className={styles.options}>
                <button className={`${styles.optionBtn} ${styles.edit}`}>
                    <GoPencil/>
                </button>
                <button className={`${styles.optionBtn} ${styles.delete}`}> 
                    <GoTrash/>
                </button>
            </div>
        </div>
    ) : (
      <div>
          <div className={`${styles.taskItem} ${styles.complete}`}>
                <div className={styles.aboutTask}>
                    <img className={styles.status} src="../src/assets/retangulocheck.svg" alt="" />
                    <p>Primeira tarefa</p>
                </div>
                <div className={styles.options}>
                    <button className={`${styles.optionBtn} ${styles.edit}`}>
                        <GoPencil/>
                    </button>
                    <button className={`${styles.optionBtn} ${styles.delete}`}> 
                        <GoTrash/>
                    </button>
                </div>
            </div>
            <div className={`${styles.taskItem} ${styles}`}>
                <div className={styles.aboutTask}>
                    <img className={styles.status} src="../src/assets/retangulovazio.svg" alt="" />
                    <p>Primeira tarefa</p>
                </div>
                <div className={styles.options}>
                    <button className={`${styles.optionBtn} ${styles.edit}`}>
                        <GoPencil/>
                    </button>
                    <button className={`${styles.optionBtn} ${styles.delete}`}> 
                        <GoTrash/>
                    </button>
                </div>
            </div>
      </div>
    ) }
    </div>
   )
}