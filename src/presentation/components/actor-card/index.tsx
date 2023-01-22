import { Cast } from '@/domain/models'
import React from 'react'
import { CastCardStyles as Styled } from './styles'

type Props = {
  actor: Cast.Model
}

const ActorCard: React.FC<Props> = ({ actor }) => {
  // images base url
  const urlPrefix = 'https://image.tmdb.org/t/p/w300'
  return (
    <Styled.Container>
      <Styled.Image src={`${urlPrefix}${actor.profile_path}`} />
      <Styled.InfosContainer>
        <Styled.Title>{actor.name}</Styled.Title>
        <Styled.Label>{actor.character}</Styled.Label>
      </Styled.InfosContainer>
    </Styled.Container>
  )
}

export default ActorCard
