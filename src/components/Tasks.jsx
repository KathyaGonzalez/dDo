import { useBoard } from "../hooks/useBoard"
import { TaskItem } from "./TaskItem"
import '../styles/Tasks.css'

export function Tasks() {
    const { board, removeFromBoard} = useBoard()
    return (
     <ul className="board">
        {
            board.map(task =>               
            {
                return(
                    <TaskItem
                    key={task.description}
                    task={task} 
                    removeFromBoard={() => removeFromBoard(task)}
                     />
                )
            }
            )
        }
     </ul>   
    )
}