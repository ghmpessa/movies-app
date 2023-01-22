import { Cast } from '@/domain/models'
import React from 'react'
import { ActorCard as Styled } from './styles'

import ImageNotSupportedRoundedIcon from '@mui/icons-material/ImageNotSupportedRounded'

type Props = {
  actor: Cast.Model
  isLast?: boolean
}

const ActorCard: React.FC<Props> = ({ actor, isLast }) => {
  // images base url
  const urlPrefix = 'https://image.tmdb.org/t/p/w300'
  return (
    <Styled.Container className={isLast ? 'last' : ''}>
      {actor.profile_path ? (
        <Styled.Image src={`${urlPrefix}${actor.profile_path}`} />
      ) : (
        <Styled.NoPhoto>
          <ImageNotSupportedRoundedIcon sx={{ width: 48, height: 48 }} />
        </Styled.NoPhoto>
      )}
      <Styled.InfosContainer>
        <Styled.Title>{actor.name}</Styled.Title>
        <Styled.Label>{actor.character}</Styled.Label>
      </Styled.InfosContainer>
    </Styled.Container>
  )
}

export default ActorCard
