import { Cast } from '@/domain/models'
import { CastList } from '@/presentation/components'
import React from 'react'
import { CastSectionStyles as Styled } from './styles'

type Props = {
  cast: Cast.Model[]
}

const CastSection: React.FC<Props> = ({ cast }) => {
  return (
    <Styled.Container>
      <h2>Cast</h2>
      <CastList cast={cast} />
    </Styled.Container>
  )
}

export default CastSection
