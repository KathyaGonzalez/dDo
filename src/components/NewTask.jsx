import { useId, useState } from 'react'
import '../styles/NewTask.css'
import { useBoard } from '../hooks/useBoard'

export function NewTask () {
    const newTaskId = useId()
    const [newTask, setNewTask ]= useState('')
    const {addToBoard, board} = useBoard()
    const handleSubmit = (event) => {
        event.preventDefault()
        if(newTask!== ''){
            const check = board.filter(task => task.description === newTask)
            if(check.length===0){
                const task = {
                    'description': newTask,
                    'dateTime': new Date(),
                    'priority': document.getElementById('priority').value
                }
                addToBoard(task)
                setNewTask('')
                console.log(task)
            }else{
                alert('Task already exist')
            }
        }else{
            alert('Task cannot be empty')
        }
    }
    return (
        <form className='newTask' onSubmit={handleSubmit}>
            <article className='campos'>
                <section className='campo'>
                    <label htmlFor={newTaskId}> New task</label>
                    <input 
                    id={newTaskId} placeholder='Example: Refactoring code' onChange={(event) => {setNewTask(event.target.value)}} value={newTask}></input>
                </section>
                <section className='campo'>    
                    <label>Priority</label>
                    <select id='priority'>
                        <option value='HP'>High priority</option>
                        <option value='MP'>Medium priority</option>
                        <option value='LP'>Low priority</option>
                    </select>
                </section>
            </article>
            <button className='add' type='submit'>
                Add new task
            </button>
        </form>
    )
}
