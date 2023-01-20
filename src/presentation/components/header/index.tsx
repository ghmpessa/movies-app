import React from 'react'
import { HeaderStyles as Styled } from './styles'

import BookmarkIcon from '@mui/icons-material/Bookmark'
import LocalMoviesRoundedIcon from '@mui/icons-material/LocalMoviesRounded'

const Header: React.FC = () => {
  return (
    <Styled.Container>
      <Styled.LogoContainer>
        <a href='#'>moviewing</a>
      </Styled.LogoContainer>
      <Styled.NavContainer>
        <Styled.NavLinkContainer href='#'>
          <LocalMoviesRoundedIcon sx={{ color: 'white' }} />
          <Styled.NavLink>Movies</Styled.NavLink>
        </Styled.NavLinkContainer>
        <Styled.NavLinkContainer href='#' className='last'>
          <BookmarkIcon sx={{ color: 'white' }} />
          <Styled.NavLink>Watch List</Styled.NavLink>
        </Styled.NavLinkContainer>
      </Styled.NavContainer>
    </Styled.Container>
  )
}

export default Header
