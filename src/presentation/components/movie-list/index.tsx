import React from 'react'
import { MovieListStyles as Styled } from './styles'
import { Movie } from '@/domain/models'
import { MovieCard } from '@/presentation/components/'
import { useNavigate } from 'react-router-dom'

type Props = {
  movies: Array<Movie.ShortModel>
  emptyList: {
    title: string
    buttonTitle: string
  }
  handleClick?: () => void
}

const MovieList: React.FC<Props> = ({ movies, emptyList, handleClick }) => {
  const navigate = useNavigate()

  const onButtonClick = () => {
    if (handleClick) return handleClick()
    navigate('/')
  }

  return (
    <Styled.Container isEmpty={movies.length === 0}>
      {movies.length > 0 ? (
        movies.map(movie => (
          <MovieCard key={movie.id! * Math.random()} movie={movie} />
        ))
      ) : (
        <Styled.EmptyList>
          <h3>{emptyList.title}</h3>
          <Styled.Button variant='contained' onClick={onButtonClick}>
            {emptyList.buttonTitle}
          </Styled.Button>
        </Styled.EmptyList>
      )}
    </Styled.Container>
  )
}

export default MovieList
