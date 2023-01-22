import React from 'react'
import { CastListStyles as Styled } from './styles'
import { Cast, Movie } from '@/domain/models'
import { ActorCard, MovieCard } from '@/presentation/components/'
import { useNavigate } from 'react-router-dom'

type Props = {
  cast: Array<Cast.Model>
}

const CastList: React.FC<Props> = ({ cast }) => {
  const navigate = useNavigate()
  return (
    <Styled.Container>
      {cast.length > 0 ? (
        cast.map(actor => (
          <ActorCard key={actor.id! * Math.random()} actor={actor} />
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

export default CastList
