import React from 'react'
import { FabStyles as Styled } from './styles'
import KeyboardDoubleArrowUpRoundedIcon from '@mui/icons-material/KeyboardDoubleArrowUpRounded'
import { useScrollToTop } from '@/presentation/hooks'

const ScrollToTopFab: React.FC = () => {
  const [isVisible, scrollToTop] = useScrollToTop()
  return (
    <Styled.Fab
      onClick={scrollToTop}
      color='primary'
      sx={{
        opacity: isVisible ? 1 : 0,
      }}
    >
      <KeyboardDoubleArrowUpRoundedIcon />
    </Styled.Fab>
  )
}

export default ScrollToTopFab
