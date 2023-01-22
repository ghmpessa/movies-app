import { ImageList } from '@/presentation/components'
import React from 'react'
import { BackdropSectionStyles as Styled } from './styles'

const example = {
  aspect_ratio: 1.77777777777778,
  file_path: '/r9PkFnRUIthgBp2JZZzD380MWZy.jpg',
  height: 720,
  iso_639_1: null,
  vote_average: 0,
  vote_count: 0,
  width: 1280,
}

const list = Array(20).fill(example)

const BackdropSection: React.FC = () => {
  return (
    <Styled.Container>
      <h2>Gallery</h2>
      <ImageList images={list} />
    </Styled.Container>
  )
}

export default BackdropSection
