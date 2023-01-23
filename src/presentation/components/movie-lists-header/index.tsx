import React, { useState } from 'react'

import { MovieListsHeaderStyles as Styled } from './styles'
import SearchRoundedIcon from '@mui/icons-material/SearchRounded'
import { useLocation, useNavigate, Outlet } from 'react-router-dom'

type Props = {
  children?: React.ReactNode
}

const MovieListHeader: React.FC<Props> = ({ children }) => {
  const { pathname } = useLocation()
  const navigate = useNavigate()
  const [query, setQuery] = useState('')

  const isPopular = pathname === '/popular'
  const isOnTheaters = pathname === '/on_theaters'
  const isTopRated = pathname === '/top_rated'
  const isUpcoming = pathname === '/upcoming'

  return (
    <Styled.Container>
      <Styled.HeaderContainer>
        <Styled.LinksContainer>
          <Styled.Link to='/popular' className={`${isPopular && 'selected'}`}>
            Popular
          </Styled.Link>
          <Styled.Link
            to='/on_theaters'
            className={`${isOnTheaters && 'selected'}`}
          >
            On theaters{' '}
          </Styled.Link>
          <Styled.Link
            to='/top_rated'
            className={`${isTopRated && 'selected'}`}
          >
            Top rated
          </Styled.Link>
          <Styled.Link
            to='/upcoming'
            className={`last ${isUpcoming && 'selected'}`}
          >
            Upcoming
          </Styled.Link>
        </Styled.LinksContainer>
        <Styled.SearchContainer>
          <Styled.Input
            value={query}
            onChange={event => setQuery(event.target.value)}
          />
          <Styled.SearchFab
            color='primary'
            onClick={() => navigate(`/search/${query}`)}
            disabled={query.length === 0}
          >
            <SearchRoundedIcon sx={{ color: 'white', width: 32, height: 32 }} />
          </Styled.SearchFab>
        </Styled.SearchContainer>
      </Styled.HeaderContainer>
      <Outlet />
      {children}
    </Styled.Container>
  )
}

export default MovieListHeader
