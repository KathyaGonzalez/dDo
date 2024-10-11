import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BoardProvider } from './context/board.jsx'
import { FiltersProvider } from './context/filters.jsx'

createRoot(document.getElementById('root')).render(
  <BoardProvider>
    <FiltersProvider>
      <App/>
    </FiltersProvider>
  </BoardProvider>
)
