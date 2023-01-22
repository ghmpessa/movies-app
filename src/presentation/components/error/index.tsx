import React from 'react'
import { useNavigate } from 'react-router-dom'
import { ErrorStyles as Styled } from './styles'

type Props = {
  onTryAgain?: () => void
}

const Error: React.FC<Props> = ({ onTryAgain }) => {
  const navigate = useNavigate()
  return (
    <Styled.Container>
      <h2>Something went wrong</h2>
      <Styled.Button variant='contained' color='primary' onClick={onTryAgain}>
        Try Again
      </Styled.Button>
      <Styled.Button
        variant='outlined'
        color='secondary'
        onClick={() => navigate('/')}
      >
        Home
      </Styled.Button>
    </Styled.Container>
  )
}

export default Error
