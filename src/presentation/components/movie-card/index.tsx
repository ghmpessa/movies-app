import React from 'react'
import { MovieCardStyles as Styled } from './styles'

import { format } from 'date-fns'
import { Movie } from '@/domain/models'
import { useNavigate } from 'react-router-dom'

type Props = {
  movie: Movie.ShortModel
}

const MovieCard: React.FC<Props> = ({ movie }) => {
  const navigate = useNavigate()
  // images base url
  const urlPrefix = 'https://image.tmdb.org/t/p/w300'

  // give border colors according to rating
  const rate =
    movie.vote_average! < 3
      ? 'red'
      : movie.vote_average! < 7
      ? 'yellow'
      : 'green'

  // format date
  const day = movie.release_date!.slice(8)
  const month = movie.release_date!.slice(5, 7)
  const year = movie.release_date!.slice(0, 4)
  const releaseDate = format(
    new Date([month, day, year].join('-')),
    'MMMM dd, yyyy'
  )

  return (
    <Styled.Container onClick={() => navigate(`/${movie.id}`)}>
      <Styled.Image src={`${urlPrefix}${movie.poster_path}`} />
      <Styled.InfosContainer>
        <Styled.Title>{movie.title}</Styled.Title>
        <Styled.Label>{releaseDate}</Styled.Label>
        <Styled.Rate rateColor={rate}>
          <label>{movie.vote_average?.toFixed(1)}</label>
        </Styled.Rate>
      </Styled.InfosContainer>
    </Styled.Container>
  )
}

export default MovieCard
