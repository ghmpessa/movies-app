import { ActorCard, CastList } from '@/presentation/components'
import React from 'react'
import { CastSectionStyles as Styled } from './styles'

const actor = {
  adult: false,
  gender: 2,
  id: 287,
  known_for_department: 'Acting',
  name: 'Brad Pitt',
  original_name: 'Brad Pitt',
  popularity: 20.431,
  profile_path: '/cckcYc2v0yh1tc9QjRelptcOBko.jpg',
  cast_id: 5,
  character: 'Tyler Durden',
  credit_id: '52fe4250c3a36847f80149f7',
  order: 1,
}

const list = Array(12).fill(actor)

const CastSection: React.FC = () => {
  return (
    <Styled.Container>
      <h2>Cast</h2>
      <CastList cast={list} />
    </Styled.Container>
  )
}

export default CastSection
