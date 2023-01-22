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
      {cast.map((actor, index) => (
        <ActorCard
          key={actor.id! * Math.random()}
          actor={actor}
          isLast={index === cast.length - 1}
        />
      ))}
    </Styled.Container>
  )
}

export default CastList
