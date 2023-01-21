import {
  getCurrentAccount,
  getCurrentSession,
  getRequestToken,
  setCurrentAccount,
  setCurrentSession,
  setRequestToken,
} from '@/main/adapters'
import { theme } from '@/main/config'
import { Router } from '@/main/routes'
import { AppProvider } from '@/presentation/contexts'
import { CssBaseline } from '@mui/material'
import { ThemeProvider } from '@mui/material/styles'

const value = {
  getCurrentSession: getCurrentSession,
  setCurrentSession: setCurrentSession,
  getCurrentAccount: getCurrentAccount,
  setCurrentAccount: setCurrentAccount,
  getRequestToken: getRequestToken,
  setRequestToken: setRequestToken,
}

function App() {
  return (
    <ThemeProvider theme={theme}>
      <AppProvider value={value}>
        <CssBaseline />
        <Router />
      </AppProvider>
    </ThemeProvider>
  )
}

export default App
