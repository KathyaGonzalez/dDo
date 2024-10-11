import './App.css'
import { Header } from './components/Header'
import { NewTask } from './components/NewTask'
import { Tasks } from './components/Tasks'
import { BoardProvider } from './context/board'

function App() {

  return (
    <>
    <BoardProvider>
      <Header/>
      <NewTask/>
      <Tasks/>
    </BoardProvider>
    </>
  )
}

export default App
