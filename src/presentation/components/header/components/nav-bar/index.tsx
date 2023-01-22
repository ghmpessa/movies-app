import React from 'react'
import { NavBarStyles as Styled } from './styles'

import { useAppContext } from '@/presentation/contexts'

import BookmarkIcon from '@mui/icons-material/Bookmark'
import LocalMoviesRoundedIcon from '@mui/icons-material/LocalMoviesRounded'
import ExitToAppRoundedIcon from '@mui/icons-material/ExitToAppRounded'

type Props = {
  isLogged: boolean
  handleLogout: (e: React.MouseEvent<HTMLAnchorElement>) => void
  handleRequest: () => void
}

const NavBar: React.FC<Props> = ({ isLogged, handleLogout, handleRequest }) => {
  const { getCurrentAccount } = useAppContext()
  return (
    <Styled.NavContainer>
      <Styled.NavLinkContainer to='/'>
        <LocalMoviesRoundedIcon sx={{ color: 'white' }} />
        <Styled.NavLink>Movies</Styled.NavLink>
      </Styled.NavLinkContainer>
      {isLogged ? (
        <>
          <Styled.NavLinkContainer to={`${getCurrentAccount?.().id}/watchlist`}>
            <BookmarkIcon sx={{ color: 'white' }} />
            <Styled.NavLink>Watchlist</Styled.NavLink>
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
  )
}

export default NavBar
