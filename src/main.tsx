import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App'
import { BrowserRouter } from 'react-router-dom'
import { ThemeProvider, createTheme } from '@mui/material/styles'
import CssBaseline from '@mui/material/CssBaseline'

// Load Roboto font weights recommended for MUI
import '@fontsource/roboto/400.css'
import '@fontsource/roboto/500.css'

const theme = createTheme({
  typography: {
    fontFamily: 'Roboto, "Helvetica Neue", Arial, sans-serif',
    h1: {
      fontSize: '3.5rem',
      fontWeight: 700,
    },
    h2: {
      fontSize: '3.0rem',
      fontWeight: 700,
    },
    h3: {
      fontSize: '1.8rem',
      fontWeight: 500,
    },
    h4: {
      fontSize: '2.2rem',
      fontWeight: 500,
    },
    h5: {
      fontSize: '2.0rem',
      fontWeight: 500,
    },
    h6: {
      fontSize: '1.0rem',
      fontWeight: 500,
    },
    body1: {
      fontSize: '1.3rem',
    },
      body2: {
      fontSize: '1.0rem',
    },
  },
  palette: {
    primary: {
      main: '#025589',
    },
    secondary: {
      main: '#00bcd4',
    },
  },
})

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <App />
      </ThemeProvider>
    </BrowserRouter>
  </StrictMode>,
)
