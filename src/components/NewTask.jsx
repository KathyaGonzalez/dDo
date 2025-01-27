import { useId, useState } from 'react'
import '../styles/NewTask.css'
import { useBoard } from '../hooks/useBoard'
import { Button, Dialog, DialogActions, DialogContent, DialogContentText} from '@mui/material';

export function NewTask () {
    const newTaskId = useId()
    const [newTask, setNewTask ]= useState('')
    const {addToBoard, board} = useBoard()
    const [problem, setProblem] = useState(false)
    const [msg, setMsg] = useState("");
    const [open, setOpen] = useState(false);
  
    const handleClose = () => {
      setOpen(false);
      setProblem(false);
      setMsg("");
    };

    const handleSubmit = (event) => {
        event.preventDefault()
        setOpen(true);
        if(newTask!== ''){
            const check = board.filter(task => task.description === newTask)
            if(check.length===0){
                const now = new Date()
                const dateTime= now.getDate() +'/'+ now.getMonth()+1 + '/' 
                + now.getFullYear() + ' at '+ now.getHours() + ':'
                + now.getMinutes()
                const task = {
                    'description': newTask,
                    'dateTime': dateTime,
                    'priority': document.getElementById('priority').value
                }
                addToBoard(task)
                setNewTask('')
            }else{
                setProblem(true);
                setMsg('Task already exist');
            }
        }else{
            setProblem(true);
            setMsg('Task cannot be empty');
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
            {
                problem && 
                <Dialog
                    open={open}
                    onClose={handleClose}
                    aria-describedby="alert-dialog-description"
                >
                    <DialogContent >
                    <DialogContentText id="alert-dialog-description">
                        {msg}
                    </DialogContentText>
                    </DialogContent>
                    <DialogActions>
                    <Button onClick={handleClose} autoFocus>
                        Agree
                    </Button>
                    </DialogActions>
                </Dialog>
            }
        </form>
    )
}
