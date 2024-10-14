import '../styles/TaskItem.css'

export function TaskItem ({task, removeFromBoard}) {
    return (
        <li  
            className={`
                ${task.priority==='HP' && "hp"} 
                ${task.priority==='MP' && "mp"}
                ${task.priority==='LP' && "lp"} 
                + taskItem`}> 
            <strong>{task.description}</strong>
            <button className='delete' onClick={removeFromBoard}>x</button>
            <p>
                {'Added on '} {task.dateTime}
            </p>
        </li>
    )
}