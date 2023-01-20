import React from 'react'
import { FabStyles as Styled } from './styles'

type Props = {
  children: React.ReactNode
  isVisible?: boolean
  handleScrollToTop?: () => void
}

const Fab: React.FC<Props> = ({ children, isVisible, handleScrollToTop }) => {
  return (
    <Styled.Fab
      onClick={handleScrollToTop}
      color='primary'
      sx={{
        opacity: isVisible ? 1 : 0,
      }}
    >
      {children}
    </Styled.Fab>
  )
}

export default Fab
