import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BoardProvider } from './context/board.jsx'
import { FiltersProvider } from './context/filters.jsx'
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
});

createRoot(document.getElementById('root')).render(
  <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <BoardProvider>
        <FiltersProvider>
          <App/>
        </FiltersProvider>
      </BoardProvider>
    </ThemeProvider>
)
