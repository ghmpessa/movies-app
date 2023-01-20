import React from 'react'
import { FooterStyles as Styled } from './styles'
const Footer: React.FC = () => {
  return (
    <Styled.Container>
      {'Made with ❤️ by'}
      <a href='https://github.com/ghmpessa'>Guga</a>
    </Styled.Container>
  )
}

export default Footer
