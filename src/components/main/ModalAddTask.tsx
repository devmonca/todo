import styles from './Modal.module.css'

interface ModalAddTaskProps{
    isOpen: boolean
    setOpenModal: React.Dispatch<React.SetStateAction<boolean>>
}

export function ModalAddTask({ isOpen,setOpenModal }: ModalAddTaskProps){
    
    const handleCloseModal = () =>{
        setOpenModal(false)
    }
    
    if(isOpen){
        console.log('modal on')
        return (
            <div className={styles.modal}>
                <div className={styles.container}>
                    <h1>NEW TASK</h1>
                    <input placeholder='Input you task' className={styles.inputTask} type="text" />
                    <footer>
                        <button 
                          className={`${styles.decisionBtn} ${styles.cancel}`}
                          onClick={handleCloseModal}>
                            CANCEL
                        </button>
                        <button 
                          className={`${styles.decisionBtn} ${styles.confirm}`}
                          onClick={handleCloseModal}>
                            SAVE
                        </button>
                    </footer>
                </div>
                {/* <h1>{content}</h1> */}
                
            </div>
        )
    }
    return null
}