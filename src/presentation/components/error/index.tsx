import React from 'react'
import { ErrorStyles as Styled } from './styles'

const Error: React.FC = () => {
  return (
    <Styled.Container>
      <h2>Something went wrong</h2>
      <Styled.Button variant='contained' color='primary'>
        Try Again
      </Styled.Button>
      <Styled.Button variant='outlined' color='secondary'>
        Home
      </Styled.Button>
    </Styled.Container>
  )
}

export default Error
