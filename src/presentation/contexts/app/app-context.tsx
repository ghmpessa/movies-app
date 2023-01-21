import { createContext } from 'react'
import { useContext } from 'react'

type Props = {
  setCurrentSession?: (session_id: string) => void
  getCurrentSession?: () => string
}

const Context = createContext<Props>({})

export const { Provider: AppProvider } = Context

export const useAppContext = (): Props => {
  const context = useContext(Context)

  return context
}
