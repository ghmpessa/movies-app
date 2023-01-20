import { format, parse } from 'date-fns'
import React from 'react'
import { MovieCardStyles as Styled } from './styles'

const example = {
  title: 'The Chronicles of Narnia: The Lion, the Witch and the Wardrobe',
  release_date: '2018-05-15',
  vote_average: 7.6,
  poster_path: '/to0spRl1CMDvyUbOnbb4fTk3VAd.jpg',
}

const MovieCard: React.FC = () => {
  const urlPrefix = 'http://image.tmdb.org/t/p/w500'

  const day = example.release_date.slice(8)
  const month = example.release_date.slice(5, 7)
  const year = example.release_date.slice(0, 4)

  const rate =
    example.vote_average < 3
      ? 'red'
      : example.vote_average < 7
      ? 'yellow'
      : 'green'

  const releaseDate = format(
    new Date([month, day, year].join('-')),
    'MMMM dd, yyyy'
  )
  return (
    <Styled.Container>
      <Styled.Image src={`${urlPrefix}${example.poster_path}`} />
      <Styled.InfosContainer>
        <Styled.Title>{example.title}</Styled.Title>
        <Styled.Label>{releaseDate}</Styled.Label>
        <Styled.Rate rateColor={rate}>
          <label>{example.vote_average}</label>
        </Styled.Rate>
      </Styled.InfosContainer>
    </Styled.Container>
  )
}

export default MovieCard
