import { Image } from '@/domain/models'
import { ImageList } from '@/presentation/components'
import React from 'react'
import { BackdropSectionStyles as Styled } from './styles'

type Props = {
  images: Image.Model[]
  title?: string
}

const BackdropSection: React.FC<Props> = ({ images, title }) => {
  return (
    <Styled.Container>
      <h2>Gallery</h2>
      <ImageList images={images} title={title} />
    </Styled.Container>
  )
}

export default BackdropSection
