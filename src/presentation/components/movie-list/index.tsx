import React from 'react'
import { MovieListStyles as Styled } from './styles'
import { Movie } from '@/domain/models'
import { MovieCard } from '@/presentation/components/'

type Props = {
  movies: Array<Movie.ShortModel>
}

const MovieList: React.FC<Props> = ({ movies }) => {
  return (
    <Styled.Container>
      {movies.map(movie => (
        <MovieCard key={movie.id! * Math.random()} movie={movie} />
      ))}
    </Styled.Container>
  )
}

export default MovieList
