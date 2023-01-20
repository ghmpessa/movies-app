import React from 'react'
import { MainContainerStyles as Styled } from './styles'

type Props = {
  children: React.ReactNode
}

const MainContainer: React.FC<Props> = ({ children }) => {
  return <Styled.Container>{children}</Styled.Container>
}

export default MainContainer
