import React, { useEffect, useState } from 'react'
import { HeaderStyles as Styled } from './styles'

import { useAppContext } from '@/presentation/contexts'
import {
  CreateSession,
  DeleteSession,
  LoadAccountDetails,
  RequestToken,
} from '@/domain/usecases'

import { Link, useNavigate } from 'react-router-dom'
import { Menu, NavBar } from './components'
import Feedback, { FeedbackType } from '../feedback'

type Props = {
  requestToken: RequestToken
  createSession: CreateSession
  deleteSession: DeleteSession
  loadAccountDetails: LoadAccountDetails
}

const Header: React.FC<Props> = ({
  requestToken,
  createSession,
  deleteSession,
  loadAccountDetails,
}) => {
  const {
    getRequestToken,
    setRequestToken,
    setCurrentSession,
    getCurrentSession,
    setCurrentAccount,
  } = useAppContext()

  const navigate = useNavigate()

  const [isLogged, setIsLogged] = useState(getCurrentSession?.() ? true : false)
  const [showHamburger, setShowHamburger] = useState(false)
  const [feedback, setFeedback] = useState<FeedbackType>({
    message: '',
    type: 'success',
    open: false,
  })

  const handleRequest = async () => {
    try {
      const { request_token } = await requestToken.request()
      setRequestToken?.(request_token)
      window.open(
        `https://www.themoviedb.org/authenticate/${request_token}`,
        '_blank'
      )
    } catch (error) {
      setFeedback({
        message: 'Something went wrong',
        type: 'error',
        open: true,
      })
    }
  }

  const handleSession = async (request_token: string) => {
    try {
      const { session_id } = await createSession.create({ request_token })
      const { id, name, username } = await loadAccountDetails.load({
        session_id,
      })
      setCurrentSession?.(session_id)
      setCurrentAccount?.({ id, name, username })
      setRequestToken?.(null)
      window.location.reload()
    } catch (error) {
      setFeedback({
        message: 'Something went wrong',
        type: 'error',
        open: true,
      })
    }
  }

  const handleLogout = async (e?: React.MouseEvent<HTMLAnchorElement>) => {
    e?.preventDefault()

    try {
      const session_id = getCurrentSession?.()

      if (!session_id) return
      await deleteSession.delete({ session_id })
      setCurrentSession?.(null)
      setCurrentAccount?.({
        id: 0,
        name: '',
        username: '',
      })
      setIsLogged(false)
      setFeedback({
        message: 'You logged out',
        type: 'success',
        open: true,
      })
      navigate('/', { replace: true })
    } catch (error) {
      setFeedback({
        message: 'Error on logout',
        type: 'error',
        open: true,
      })
    }
  }

  useEffect(() => {
    const handleVisibility = () => {
      const requestToken = getRequestToken?.()
      if (document.visibilityState === 'visible' && requestToken) {
        handleSession(requestToken)
      }
    }
    document.addEventListener('visibilitychange', handleVisibility)
    return () => {
      document.removeEventListener('visibilitychange', handleVisibility)
    }
  }, [])

  useEffect(() => {
    const resize = (): void => {
      if (window.innerWidth < 880) {
        setShowHamburger(true)
      } else {
        setShowHamburger(false)
      }
    }
    resize()
    window.addEventListener('resize', resize)
    return () => window.removeEventListener('resize', resize)
  })

  return (
    <Styled.Container>
      <Styled.LogoContainer>
        <Link className='logo' to='/'>
          moviewing
        </Link>
      </Styled.LogoContainer>
      {!showHamburger && (
        <NavBar
          isLogged={isLogged}
          handleLogout={handleLogout}
          handleRequest={handleRequest}
        />
      )}
      {showHamburger && (
        <Menu
          isLogged={isLogged}
          handleLogout={handleLogout}
          handleRequest={handleRequest}
        />
      )}
      <Feedback
        message={feedback.message}
        open={feedback.open}
        type={feedback.type}
        closeFeedback={() =>
          setFeedback({
            message: '',
            type: 'success',
            open: false,
          })
        }
      />
    </Styled.Container>
  )
}

export default Header
