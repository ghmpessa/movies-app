import { CssBaseline } from '@mui/material'
import { ThemeProvider } from '@mui/material/styles'
import { theme } from './config'

import { Router } from './routes'

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router />
    </ThemeProvider>
  )
}

export default App
