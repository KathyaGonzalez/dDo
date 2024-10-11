import { useBoard } from "../hooks/useBoard"
import { TaskItem } from "./TaskItem"
import '../styles/Tasks.css'

export function Tasks({tasks}) {
    const { removeFromBoard} = useBoard()
    return (
     <ul className="board">
        {
            tasks.map(task =>               
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