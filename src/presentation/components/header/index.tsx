import React, { useEffect, useState } from 'react'
import { HeaderStyles as Styled } from './styles'

import { useAppContext } from '@/presentation/contexts'
import {
  CreateSession,
  DeleteSession,
  LoadAccountDetails,
  RequestToken,
} from '@/domain/usecases'

import { Link } from 'react-router-dom'
import { Menu, NavBar } from './components'

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
    getCurrentAccount,
    setCurrentAccount,
  } = useAppContext()

  const [isLogged, setIsLogged] = useState(getCurrentSession?.() ? true : false)
  const [showHamburger, setShowHamburger] = useState(false)

  const handleRequest = async () => {
    try {
      const { request_token } = await requestToken.request()
      setRequestToken?.(request_token)
      window.open(
        `https://www.themoviedb.org/authenticate/${request_token}`,
        '_blank'
      )
    } catch (error) {
      console.log(error)
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
      console.log(error)
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
    } catch (error) {
      console.log(error)
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
    </Styled.Container>
  )
}

export default Header
