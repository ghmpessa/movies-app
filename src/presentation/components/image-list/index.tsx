import React from 'react'
import { ImageListStyles as Styled } from './styles'

import { Image } from '@/domain/models'
import ImageCard from '../image-card'

type Props = {
  images: Array<Image.Model>
  title?: string
}

const ImageList: React.FC<Props> = ({ images, title }) => {
  const prefix = 'https://image.tmdb.org/t/p/w500'
  return (
    <Styled.Container>
      {images.map((image, index) => (
        <ImageCard
          src={`${prefix}${image.file_path}`}
          isLast={index === images.length - 1}
          key={image.file_path + Math.random()}
          title={title}
        />
      ))}
    </Styled.Container>
  )
}

export default ImageList
