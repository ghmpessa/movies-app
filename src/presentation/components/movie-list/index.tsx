import React from 'react'
import { MovieListStyles as Styled } from './styles'
import { Movie } from '@/domain/models'
import { MovieCard } from '@/presentation/components/'
import { useNavigate } from 'react-router-dom'

type Props = {
  movies: Array<Movie.ShortModel>
}

const MovieList: React.FC<Props> = ({ movies }) => {
  const navigate = useNavigate()
  return (
    <Styled.Container isEmpty={movies.length === 0}>
      {movies.length > 0 ? (
        movies.map(movie => (
          <MovieCard key={movie.id! * Math.random()} movie={movie} />
        ))
      ) : (
        <Styled.EmptyList>
          <h3>Your watchlist is empty</h3>
          <h3>Show us some movies you want to watch</h3>
          <Styled.Button variant='contained' onClick={() => navigate('/')}>
            Go to movies
          </Styled.Button>
        </Styled.EmptyList>
      )}
    </Styled.Container>
  )
}

export default MovieList
