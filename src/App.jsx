import './App.css'
import { Filters } from './components/Filters'
import { Header } from './components/Header'
import { NewTask } from './components/NewTask'
import { Tasks } from './components/Tasks'
import { useBoard } from './hooks/useBoard'
import { useFilters } from './hooks/useFilters'

function App() {
  const { board } = useBoard()
  const { filterTasks } = useFilters()
  const filteredTasks = filterTasks(board)
  return (
    <div className='container'>
      <Header/>
      <NewTask/>
      <Filters/>
      <Tasks tasks={filteredTasks}/>
    </div>
  )
}

export default App
