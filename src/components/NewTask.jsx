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
                alert('La tarea ya existe')
            }
        }else{
            alert('La tarea no puede ser vacía')
        }
    }
    return (
        <form className='newTask' onSubmit={handleSubmit}>
            <label htmlFor={newTaskId}> New task</label>
            <input 
            id={newTaskId} placeholder='Exaple: Refactoring code' onChange={(event) => {setNewTask(event.target.value)}} value={newTask}></input>
            <label>Priority</label>
            <select id='priority'>
                <option value='HP'>High priority</option>
                <option value='MP'>Medium priority</option>
                <option value='LP'>Low priority</option>
            </select>
            <button className='add' type='submit'>
                Add new task
            </button>
        </form>
    )
}
