import React, { useEffect, useState } from 'react'
import { HeaderStyles as Styled } from './styles'

import { useAppContext } from '@/presentation/contexts'
import {
  CreateSession,
  DeleteSession,
  LoadAccountDetails,
  RequestToken,
} from '@/domain/usecases'

import BookmarkIcon from '@mui/icons-material/Bookmark'
import LocalMoviesRoundedIcon from '@mui/icons-material/LocalMoviesRounded'
import ExitToAppRoundedIcon from '@mui/icons-material/ExitToAppRounded'
import { Link } from 'react-router-dom'

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

  const handleLogout = async (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault()

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

  return (
    <Styled.Container>
      <Styled.LogoContainer>
        <Link className='logo' to='/'>
          moviewing
        </Link>
      </Styled.LogoContainer>
      <Styled.NavContainer>
        <Styled.NavLinkContainer to='/'>
          <LocalMoviesRoundedIcon sx={{ color: 'white' }} />
          <Styled.NavLink>Movies</Styled.NavLink>
        </Styled.NavLinkContainer>
        {isLogged ? (
          <>
            <Styled.NavLinkContainer
              to={`${getCurrentAccount?.().id}/watch-list`}
            >
              <BookmarkIcon sx={{ color: 'white' }} />
              <Styled.NavLink>Watch List</Styled.NavLink>
            </Styled.NavLinkContainer>

            <Styled.NavLinkContainer
              to='/'
              onClick={handleLogout}
              className='last'
            >
              <ExitToAppRoundedIcon sx={{ color: 'white' }} />
              <Styled.NavLink>Logout</Styled.NavLink>
            </Styled.NavLinkContainer>
          </>
        ) : (
          <Styled.Button variant='outlined' onClick={handleRequest}>
            login
          </Styled.Button>
        )}
      </Styled.NavContainer>
    </Styled.Container>
  )
}

export default Header
